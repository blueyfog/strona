import type { Artwork } from "../../types";
import { artworksMain } from "../../data/artworksMain";
import "../../App.css";
import { useReveal } from "../useReveal";

import backIMG from "../../assets/MainObrazy/20260817_160900111eedfg11.webp";
import IntroHero from "../IntroHero";


// variable artysta, zmien co sie wyswietla na glownej

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
      
        <IntroHero title={artist.tagline} image={artist.heroImage}>
          <p>{artist.intro}</p>
        </IntroHero>

        <section id="work" aria-label="Selected work" className="wall">
          {artworksMain.map((work, i) => (
            <Artwork key={work.id} work={work} flip={i % 2 === 1} />
          ))}
        </section>
    </>
  );
}