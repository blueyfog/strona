import { useEffect, useRef, useState } from "react";
import type { Artwork } from "../types";
import "../App.css";

/** Same fields as Artwork, but only id, title and shape are required. */
export type PieceWork = Pick<Artwork, "id" | "title" | "shape"> &
  Partial<Omit<Artwork, "id" | "title" | "shape">>;

/** Returns a ref and a boolean that flips to true once the element scrolls into view. */
function useReveal<T extends HTMLElement>() {
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

/**
 * The artwork block used on the home page: picture on one side,
 * title, details and description on the other.
 *
 * instant = true fades in right after it appears (use it in the viewer).
 * Otherwise it fades in when scrolled into view (use it in a list).
 */
export default function ArtworkPiece({
  work,
  flip = false,
  instant = false,
}: {
  work: PieceWork;
  flip?: boolean;
  instant?: boolean;
}) {
  const [ref, seenByScroll] = useReveal<HTMLElement>();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!instant) return;
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, [instant]);

  const seen = instant ? ready : seenByScroll;

  // "2024, Oil on canvas. 40 x 50 cm."  (parts that are missing are left out)
  const meta = [
    [work.year, work.medium].filter(Boolean).join(", "),
    work.size,
  ]
    .filter(Boolean)
    .map((part) => `${part}.`)
    .join(" ");

  return (
    <article
      ref={ref}
      className={`piece reveal ${seen ? "reveal--in" : ""} ${
        flip ? "piece--flip piece--white" : "piece--blue"
      }`}
      id={work.id}
    >
      <div className={`frame frame--${work.shape}`}>
        {work.src ? (
          <img src={work.src} alt={work.alt ?? work.title} />
        ) : (
          <div
            className="frame__placeholder"
            role="img"
            aria-label={`Placeholder for ${work.title}`}
            style={{
              background: `linear-gradient(160deg, ${work.placeholder?.[0] ?? "#1f3f94"}, ${
                work.placeholder?.[1] ?? "#12285f"
              })`,
            }}
          />
        )}
      </div>

      <div className="label">
        <h2>{work.title}</h2>
        {meta && <p className="label__meta">{meta}</p>}
        {work.description && <p className="label__description">{work.description}</p>}
      </div>
    </article>
  );
}
