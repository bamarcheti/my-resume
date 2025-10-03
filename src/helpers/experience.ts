// src/helpers/experience.ts
import type { Period } from "@/types/content";

function parseISO(s: string): Date {
  // Aceita "YYYY", "YYYY-MM" ou "YYYY-MM-DD" (mês/dia default = 01)
  const [y, m = "01", d = "01"] = s.split("-");
  return new Date(Date.UTC(Number(y), Number(m) - 1, Number(d)));
}

/** Meses completos entre start e end (end = hoje se não informado) */
function totalCompletedMonths(period: Period, ref: Date = new Date()): number {
  const start = parseISO(period.startDate);
  const end = period.endDate
    ? parseISO(period.endDate)
    : new Date(
        Date.UTC(ref.getUTCFullYear(), ref.getUTCMonth(), ref.getUTCDate())
      );

  let months =
    (end.getUTCFullYear() - start.getUTCFullYear()) * 12 +
    (end.getUTCMonth() - start.getUTCMonth());

  // Se o dia do mês do 'end' ainda não alcançou o do 'start', não conta o mês corrente
  if (end.getUTCDate() < start.getUTCDate()) months--;

  return Math.max(0, months);
}

/** Quebra em anos e meses a partir dos meses completos */
export function yearsMonthsBetweenPeriod(
  period: Period,
  ref: Date = new Date()
): { years: number; months: number } {
  const months = totalCompletedMonths(period, ref);
  return { years: Math.floor(months / 12), months: months % 12 };
}

/** Ex.: "3 anos e 6 meses", "1 ano e 1 mês", "7 meses", "1 ano" */
export function formatYearsMonths({
  years,
  months,
}: {
  years: number;
  months: number;
}): string {
  const parts: string[] = [];
  if (years > 0) parts.push(`${years} ${years === 1 ? "ano" : "anos"}`);
  if (months > 0 || years === 0)
    parts.push(`${months} ${months === 1 ? "mês" : "meses"}`);
  return parts.join(" e ");
}

/** Atalho: formata direto do Period */
export function formatDurationFromPeriod(
  period: Period,
  ref: Date = new Date()
): string {
  return formatYearsMonths(yearsMonthsBetweenPeriod(period, ref));
}

/** Mantém sua função de período em anos (se ainda usa em algum lugar) */
export function yearsBetweenPeriod(
  period: Period,
  ref: Date = new Date()
): number {
  return yearsMonthsBetweenPeriod(period, ref).years;
}

/** "2022 — 2025" ou "2022 — atual" */
export function formatPeriod(period: Period): string {
  const s = parseISO(period.startDate).getUTCFullYear();
  if (!period.endDate) return `${s} — atual`;
  const e = parseISO(period.endDate).getUTCFullYear();
  return `${s} — ${e}`;
}
