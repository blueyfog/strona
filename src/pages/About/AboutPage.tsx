import { useReveal } from "../useReveal";
import "../../App.css";

import artistPhoto from "../../assets/Obrazy/20260817_160900227777777722.png";

const about = {
  name: "Maria Hajduk",
  text: "Write a short sentence or two about yourself here.",
  instagram: "https://www.instagram.com/blueyfog_paints?stkn=MXBkYjV2N3cxN2F3Ng==",
  email: "your@email.com",
  age_local: "21 years old, Bruxelles",
};

export default function AboutPage() {
  const [ref, seen] = useReveal<HTMLElement>();

  return (
    <section aria-label="About the artist" className="wall">
      <article
        ref={ref}
        className={`piece piece--blue reveal ${seen ? "reveal--in" : ""}`}
      >
        <div className="label">
          <h2>{about.name}</h2>
          <p className="label_meta">{about.age_local}</p>
          <p className="label__description">{about.text}</p>
          <p className="label__meta">
            Contact me:<br></br>
            <a href={about.instagram} target="_blank" rel="noopener noreferrer">
              Instagram: blueyfog_paints
            </a>
            <br></br>
            <a href={`mailto:${about.email}`}>{about.email}</a>
          </p>
        </div>
        <div className="frame frame--portrait">
          <img src={artistPhoto} alt={`Portrait of ${about.name}`} loading="lazy" />
        </div>
      </article>
    </section>
  );
}