CREATE TABLE "blog_posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"excerpt" text NOT NULL,
	"description" text NOT NULL,
	"image_url" varchar(500) NOT NULL,
	"date" date NOT NULL,
	"read_time" varchar(50) NOT NULL,
	"tags" text[] NOT NULL,
	"slug" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "blog_posts_slug_unique" UNIQUE("slug")
);
