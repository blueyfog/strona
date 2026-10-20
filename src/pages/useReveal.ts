import { useEffect, useRef, useState } from "react";

/** Returns a ref and a boolean that flips to true once the element scrolls into view. */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(() => typeof IntersectionObserver === "undefined");

  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setSeen(true);
      },
      { threshold: 0.4, rootMargin: "0px 0px -25% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [seen]);

  return [ref, seen] as const;
}