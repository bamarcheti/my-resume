import { isCompleted, mergeCategories } from "@/helpers/projects";
import { getProjectsSplit } from "@/services/github";
import type { Project } from "@/types/content";
import { useEffect, useMemo, useState } from "react";

type State = {
  loading: boolean;
  error?: string;
  featured: Project[];
  all: Project[];
  rest: Project[];
};

const KEY = "gh-projects-graphql-v1";
const TTL = 1000 * 60 * 10; // 10min

export function useProjects() {
  const [state, setState] = useState<State>({
    loading: true,
    featured: [],
    all: [],
    rest: [],
  });

  useEffect(() => {
    const now = Date.now();
    const cached = sessionStorage.getItem(KEY);
    if (cached) {
      try {
        const { t, data } = JSON.parse(cached);
        if (now - t < TTL) {
          setState({ loading: false, ...data });
          return;
        }
      } catch {}
    }

    (async () => {
      try {
        const data = await getProjectsSplit();
        sessionStorage.setItem(KEY, JSON.stringify({ t: Date.now(), data }));
        setState({ loading: false, ...data });
      } catch (e: any) {
        setState({
          loading: false,
          featured: [],
          all: [],
          rest: [],
          error: e?.message ?? "Erro ao carregar projetos",
        });
      }
    })();
  }, []);

  const categories = useMemo(() => mergeCategories(state.all), [state.all]);
  const completedCount = useMemo(
    () => state.all.filter(isCompleted).length,
    [state.all]
  );

  return { ...state, categories, completedCount };
}
