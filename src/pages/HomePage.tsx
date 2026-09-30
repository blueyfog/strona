import { useEffect, useRef, useState } from "react";
import type { Artwork } from "../types";
import { artworksMain } from "../data/artworksMain";
import "../App.css";

import backIMG from "../assets/MainObrazy/20260817_160900111eedfg11.png";


/** Returns a ref and a boolean that flips to true once the element scrolls into view. */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  // If the browser has no IntersectionObserver, start out visible instead of waiting.
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

/* ------------------------------------------------------------------ */
/* 1. EDIT THIS: your name, intro, and artworks                        */
/* ------------------------------------------------------------------ */

const artist = {
  tagline: "Maria Hajduk",
  /** Background image for the intro, e.g. "/art/hero.jpg". Leave undefined for a plain blue fallback. */
  heroImage: backIMG,
  intro:
    "I make work about quiet places and the light that moves through them. " +
    "Here is a small selection of recent pieces, with notes on how each one came about.",
};





/* ------------------------------------------------------------------ */
/* 2. Components                                                       */
/* ------------------------------------------------------------------ */

function Artwork({ work, flip }: { work: Artwork; flip: boolean }) {
  const [ref, seen] = useReveal<HTMLElement>();

  return (
    <article
      ref={ref}
      className={`piece reveal ${seen ? "reveal--in" : ""} ${flip ? "piece--flip piece--white" : "piece--blue"}`}
      id={work.id}
    >
      <div className={`frame frame--${work.shape}`}>
        {work.src ? (
          <img src={work.src} alt={work.alt ?? work.title} loading="lazy" />
        ) : (
          <div
            className="frame__placeholder"
            role="img"
            aria-label={`Placeholder for ${work.title}`}
            style={{
              background: `linear-gradient(160deg, ${work.placeholder[0]}, ${work.placeholder[1]})`,
            }}
          />
        )}
      </div>

      <div className="label">
        <h2>{work.title}</h2>
        <p className="label__meta">
          {work.year} {work.medium} {work.size}
        </p>
        <p className="label__description">{work.description}</p>
      </div>
    </article>
  );
}

export default function HomePage() {
  return (
    <>
      
        <section
          className="intro"
          style={
            artist.heroImage
              ? {
                  backgroundImage: `linear-gradient(rgba(10, 22, 51, 0.55), rgba(10, 22, 51, 0.75)), url(${artist.heroImage})`,
                }
              : undefined
          }
        >
          <div className="intro__inner">
            <h1 >{artist.tagline}</h1>
            <p>{artist.intro}</p>
          </div>
        </section>

        <section id="work" aria-label="Selected work" className="wall">
          {artworksMain.map((work, i) => (
            <Artwork key={work.id} work={work} flip={i % 2 === 1} />
          ))}
        </section>
    </>
  );
}