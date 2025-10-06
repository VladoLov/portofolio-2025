"use client";
import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Briefcase,
  User,
  MessageSquare,
  Menu,
  X,
  ChevronDown,
  Calendar,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
const NAV_SECTIONS = [
  "home",
  "about",
  "projects",
  "blog",
  "skills",
  "contact",
] as const;
export type NavSection = (typeof NAV_SECTIONS)[number];
type SectionVisibility = {
  [key in NavSection]: boolean;
};

type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
};

const blogPosts: BlogPost[] = [
  {
    title: "Building Performant Apps with Next.js 15",
    excerpt:
      "Exploring the new features in Next.js 15 and how they improve application performance and developer experience.",
    date: "2025-03-15",
    readTime: "8 min read",
    tags: ["Next.js", "Performance", "React"],
    slug: "nextjs-15-performance",
  },
  {
    title: "Advanced TypeScript Patterns for React",
    excerpt:
      "Deep dive into advanced TypeScript patterns that make your React components more type-safe and maintainable.",
    date: "2025-02-28",
    readTime: "12 min read",
    tags: ["TypeScript", "React", "Best Practices"],
    slug: "advanced-typescript-react",
  },
  {
    title: "Server Components vs Client Components",
    excerpt:
      "Understanding when to use Server Components and Client Components in Next.js for optimal performance.",
    date: "2025-02-10",
    readTime: "10 min read",
    tags: ["Next.js", "React", "Architecture"],
    slug: "server-vs-client-components",
  },
];
export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<NavSection>("home");
  const initialVisibility: SectionVisibility = {
    home: false,
    about: false,
    projects: false,
    skills: false,
    contact: false,
    blog: false,
  };
  const [isVisible, setIsVisible] =
    useState<SectionVisibility>(initialVisibility);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id as NavSection;
          setIsVisible((prev) => ({
            ...prev,
            [id]: entry.isIntersecting,
          }));
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  // Sample projects - Replace with your actual projects
  const projects = [
    {
      title: "Atena Genomics",
      description:
        "Static website for a genomics company built with Next.js 14 and Tailwind CSS",
      tags: ["Next.js", "next-i18next", "Tailwind"],
      github: "https://github.com/VladoLov/Atena",
      live: "https://atenagenomics.com",
      image: "/Images/Atena.webp",
    },
    {
      title: "Service Finder",
      description: "Real-time service marketplace",
      tags: [
        "Next.js",
        "React",
        "Neon",
        "Prisma ORM",
        "Tailwind",
        "Shadcn UI",
        "ImageKit",
      ],
      github: "https://github.com/VladoLov/local-services",
      live: "https://local-services-nine.vercel.app/",
      image: "/Images/Usluge.webp",
    },
  ];

  const skills = [
    { name: "Next.js 15", level: 75 },
    { name: "React", level: 70 },
    { name: "TypeScript", level: 50 },
    { name: "Tailwind CSS", level: 80 },
    { name: "Node.js", level: 50 },
    { name: "Git & GitHub", level: 70 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Vladislav Lovrić
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {NAV_SECTIONS.map((section: NavSection) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section
                      ? "text-purple-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-purple-500/20">
            {NAV_SECTIONS.map((section: NavSection) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left px-4 py-3 capitalize hover:bg-purple-900/30 transition-colors"
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id={"home"}
        className="min-h-screen flex items-center justify-center px-4 pt-16"
      >
        <div
          className={`text-center max-w-4xl transition-all duration-1000 ${
            isVisible.home
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-6xl">
              <Image
                src="/Images/profile.jpg"
                alt="Vladislav Lovrić"
                width={120}
                height={120}
                className="rounded-full"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            Frontend Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Building modern, responsive web applications with Next.js & React
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <a
              href="https://github.com/VladoLov"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-purple-600 transition-all hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/vladislav-lovric-29ba4ab0"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-purple-600 transition-all hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:vladislav.lovric@gmail.com"
              className="p-3 bg-gray-800 rounded-full hover:bg-purple-600 transition-all hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
          <button
            onClick={() => scrollToSection("projects")}
            className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg shadow-purple-500/50"
          >
            View My Work
          </button>
          <div className="mt-12 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-purple-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-4 py-20"
      >
        <div
          className={`max-w-4xl transition-all duration-1000 ${
            isVisible.about
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 flex items-center gap-3">
            <User className="text-purple-400" />
            About Me
          </h2>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I&apos;m a passionate frontend developer specializing in building
              exceptional digital experiences with Next.js and React. With a
              strong foundation in modern web technologies, I create responsive,
              performant, and user-friendly applications.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              My expertise includes Next.js 15, React, TypeScript, Tailwind CSS,
              and modern development practices. I&apos;m constantly learning and
              staying up-to-date with the latest web technologies to deliver
              cutting-edge solutions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              {[
                "Next.js Expert",
                "React Enthusiast",
                "TypeScript",
                "UI/UX Focused",
                "Performance",
                "Clean Code",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-purple-900/30 rounded-lg p-4 text-center border border-purple-500/20 hover:border-purple-500/50 transition-colors"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center px-4 py-20"
      >
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 flex items-center gap-3">
            <Briefcase className="text-purple-400" />
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 ${
                  isVisible.projects
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-6xl flex items-center justify-center h-48 bg-gradient-to-br from-purple-900/50 to-pink-900/50">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={380}
                    height={380}
                    objectFit="cover object-fit-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-purple-900/50 px-3 py-1 rounded-full border border-purple-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm bg-gray-700 px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors"
                    >
                      <Github size={16} /> Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      <ExternalLink size={16} /> Live
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section
        id="blog"
        className="min-h-screen flex items-center justify-center px-4 py-20"
      >
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 flex items-center gap-3">
            <BookOpen className="text-purple-400" />
            Latest Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 cursor-pointer ${
                  isVisible.blog
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                  <Calendar size={16} />
                  <span>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 hover:text-purple-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-purple-900/50 px-3 py-1 rounded-full border border-purple-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  className="text-purple-400 text-sm font-semibold hover:text-purple-300 transition-colors flex items-center gap-1"
                >
                  <Link href={`/blog/${post.slug}`}>Read More </Link>
                  <ChevronDown size={16} className="rotate-[-90deg]" />
                </button>
              </article>
            ))}
          </div>

          <div
            className={`mt-12 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 text-center transition-all duration-1000 ${
              isVisible.blog
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-gray-300 mb-4">
              Want to read more? Check out my complete blog
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
              <Link href="/blog">View All Articles</Link>
            </button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen flex items-center justify-center px-4 py-20"
      >
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 flex items-center gap-3">
            <Code2 className="text-purple-400" />
            Skills & Technologies
          </h2>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`mb-6 last:mb-0 transition-all duration-1000 ${
                  isVisible.skills
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-purple-400">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000"
                    style={{
                      width: isVisible.skills ? `${skill.level}%` : "0%",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center px-4 py-20"
      >
        <div
          className={`max-w-2xl w-full text-center transition-all duration-1000 ${
            isVisible.contact ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 flex items-center justify-center gap-3">
            <MessageSquare className="text-purple-400" />
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            I&apos;m currently looking for new opportunities. Whether you have a
            question or just want to say hi, feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:vladislav.lovric@gmail.com"
              className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg shadow-purple-500/50 inline-flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/vladislav-lovric-29ba4ab0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 px-8 py-4 rounded-full font-semibold hover:bg-purple-600 transition-colors inline-flex items-center justify-center gap-2"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/80 border-t border-purple-500/20 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <p>© 2025 Vladisalv Lovrić. Built with Next.js 15 & React</p>
        </div>
      </footer>
    </div>
  );
}
