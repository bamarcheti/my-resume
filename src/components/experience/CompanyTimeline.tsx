import { Card, CardContent } from "@/components/ui/card";
import { formatDurationFromPeriod, formatPeriod } from "@/helpers/experience";
import type { Experience } from "@/types/content";

type Props = { company: string; items: Experience[] };

export default function CompanyTimeline({ company, items }: Props) {
  // mais antiga -> recente (ajuste se quiser desc)
  const sorted = [...items].sort(
    (a, b) =>
      new Date(a.period.startDate).getTime() -
      new Date(b.period.startDate).getTime()
  );

  return (
    <Card className="shadow-lg animate-fade-in mb-6">
      <CardContent className="p-8">
        {/* título alinhado à esquerda e alinhado com o conteúdo (pl-16 => ml-14) */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-primary ml-14">{company}</h3>
        </div>

        <div className="relative" role="list">
          {/* linha da timeline */}
          <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary to-primary/30" />

          {sorted.map((exp, idx) => (
            <div
              key={`${exp.title}-${exp.period.startDate}-${idx}`}
              className="relative pl-16 pb-10 last:pb-0 animate-fade-in"
              style={{ animationDelay: `${idx * 0.15}s` }}
              role="listitem"
            >
              {/* ponto */}
              <div className="absolute left-4 top-1 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-lg" />

              <div className="mb-3">
                <h4 className="text-lg font-semibold">{exp.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {formatPeriod(exp.period)} (
                  {formatDurationFromPeriod(exp.period)})
                </p>
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
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
