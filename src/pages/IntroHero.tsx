import { useEffect, useState, type ReactNode } from "react";

type Props = {
  title: string;
  /** Background image. Leave undefined for the plain fallback colour. */
  image?: string;
  /** Extra class, e.g. "intro--compact" for a shorter banner. */
  className?: string;
  children?: ReactNode;
};

export default function IntroHero({ title, image, className = "", children }: Props) {
  const [shown, setShown] = useState(false);

  // The hero is visible at page load, so start the sequence right after first render.
  useEffect(() => {
    const id = setTimeout(() => setShown(true), 50);
    return () => clearTimeout(id);
  }, []);

  return (
    <section className={`intro ${shown ? "intro--in" : ""} ${className}`.trim()}>
      {image && (
        <div
          className="intro__bg"
          style={{
            backgroundImage: `linear-gradient(rgba(10, 22, 51, 0.55), rgba(10, 22, 51, 0.75)), url(${image})`,
          }}
        />
      )}

      <div className="intro__inner">
        <h1 className="intro__title">{title}</h1>
        <div className="intro__text">{children}</div>
      </div>
    </section>
  );
}