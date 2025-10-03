import * as React from "react";
const MOBILE = 768;

export function useIsMobile() {
  const get = () =>
    typeof window !== "undefined" &&
    window.matchMedia?.(`(max-width: ${MOBILE - 1}px)`).matches;

  const [isMobile, setIsMobile] = React.useState<boolean>(() => !!get());

  React.useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mql = window.matchMedia(`(max-width: ${MOBILE - 1}px)`);
    const handler = (e: MediaQueryListEvent | MediaQueryList) =>
      setIsMobile("matches" in e ? e.matches : (e as MediaQueryList).matches);

    if (mql.addEventListener) mql.addEventListener("change", handler as any);
    else mql.addListener(handler as any);

    setIsMobile(mql.matches);
    return () => {
      if (mql.removeEventListener)
        mql.removeEventListener("change", handler as any);
      else mql.removeListener(handler as any);
    };
  }, []);

  return isMobile;
}
