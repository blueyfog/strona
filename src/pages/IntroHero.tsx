import type { ReactNode } from "react";

type Props = {
  title: string;
  /** Background image. Leave undefined for the plain fallback colour. */
  image?: string;
  /** Extra class, e.g. "intro--compact" for a shorter banner. */
  className?: string;
  children?: ReactNode;
};

export default function IntroHero({ title, image, className = "", children }: Props) {
  return (
    <section
      className={`intro ${className}`.trim()}
      style={
        image
          ? {
              backgroundImage: `linear-gradient(rgba(10, 22, 51, 0.55), rgba(10, 22, 51, 0.75)), url(${image})`,
            }
          : undefined
      }
    >
      <div className="intro__inner">
        <h1>{title}</h1>
        {children}
      </div>
    </section>
  );
}