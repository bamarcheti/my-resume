import { Card, CardContent } from "@/components/ui/card";
import { formatDurationFromPeriod, formatPeriod } from "@/helpers/experience";
import type { Experience } from "@/types/content";

export default function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <Card className="shadow-lg animate-fade-in mb-6">
      <CardContent className="p-8">
        <div className="mb-4">
          <h3 className="text-xl font-semibold">{exp.title}</h3>
          <div className="flex gap-2 flex-wrap text-sm">
            <p className="text-primary font-medium">{exp.company}</p>
            <span>•</span>
            <p className="text-muted-foreground">
              {formatPeriod(exp.period)} ({formatDurationFromPeriod(exp.period)}
              )
            </p>
          </div>
        </div>

        {/* resumo (opcional) */}
        {exp.summary &&
          (Array.isArray(exp.summary) ? exp.summary : [exp.summary]).map(
            (p, i) => (
              <p key={`sum-${i}`} className="text-muted-foreground mb-3">
                {p}
              </p>
            )
          )}

        {exp.description?.length ? (
          <ul className="space-y-3">
            {exp.description.map((item, i) => (
              <li key={i} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-muted-foreground leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        ) : null}
      </CardContent>
    </Card>
  );
}
