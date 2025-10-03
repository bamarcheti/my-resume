// Definimos a data de nascimento em UTC para evitar off-by-one por fuso horário
const BIRTHDATE_UTC = new Date(Date.UTC(2002, 6, 1)); // 01/07/2002  => mês 6 (0-based)

/** Retorna a idade exata na data de referência (por padrão, agora). */
export function getAge(ref: Date = new Date()): number {
  const y = ref.getUTCFullYear() - BIRTHDATE_UTC.getUTCFullYear();
  const beforeBirthdayThisYear =
    ref.getUTCMonth() < BIRTHDATE_UTC.getUTCMonth() ||
    (ref.getUTCMonth() === BIRTHDATE_UTC.getUTCMonth() &&
      ref.getUTCDate() < BIRTHDATE_UTC.getUTCDate());
  return y - (beforeBirthdayThisYear ? 1 : 0);
}

/* Opcional: hook que atualiza sozinho no próximo aniversário, se o site ficar aberto.
import { useEffect, useState } from "react";
export function useAge() {
  const [age, setAge] = useState(() => getAge());
  useEffect(() => {
    const now = new Date();
    const thisYearBday = new Date(
      Date.UTC(now.getUTCFullYear(), BIRTHDATE_UTC.getUTCMonth(), BIRTHDATE_UTC.getUTCDate())
    );
    const nextBday = now > thisYearBday
      ? new Date(Date.UTC(now.getUTCFullYear() + 1, BIRTHDATE_UTC.getUTCMonth(), BIRTHDATE_UTC.getUTCDate()))
      : thisYearBday;
    const timer = setTimeout(() => setAge(getAge()), nextBday.getTime() - now.getTime() + 1000);
    return () => clearTimeout(timer);
  }, []);
  return age;
}
*/
