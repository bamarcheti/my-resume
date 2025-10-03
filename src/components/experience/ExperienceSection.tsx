import type { Experience } from "@/types/content";
import { useMemo } from "react";
import CompanyTimeline from "./CompanyTimeline";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceSection({
  experiences,
}: {
  experiences: Experience[];
}) {
  const groups = useMemo(() => {
    type Group = { company: string; items: Experience[] };
    const seen = new Set<string>();
    const g: Group[] = [];

    for (const exp of experiences) {
      if (!seen.has(exp.company)) {
        seen.add(exp.company);
        g.push({
          company: exp.company,
          items: experiences.filter((e) => e.company === exp.company),
        });
      }
    }
    return g;
  }, [experiences]);

  return (
    <div>
      {groups.map(({ company, items }) =>
        items.length > 1 ? (
          <CompanyTimeline key={company} company={company} items={items} />
        ) : (
          <ExperienceCard key={company} exp={items[0]} />
        )
      )}
    </div>
  );
}
