import { experiences } from "@/content/about";

function parseYear(s: string): number {
  const [y] = s.split("-");
  return Number(y);
}

export const careerStartYear: number = (() => {
  const years = experiences.map((e) => parseYear(e.period.startDate));
  return years.length ? Math.min(...years) : new Date().getFullYear();
})();
