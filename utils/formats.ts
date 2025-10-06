export function formatDate(d: string) {
  return new Date(d).toLocaleDateString("hr", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}
