import { useCallback, useEffect, useState } from "react";
import { artworksGallery } from "../data/artworksGallery";
import ArtworkPiece from "./ArtworkPiece";
import "../App.css";
import "./GalleryPage.css";

const works = artworksGallery;

export default function GalleryPage() {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const prev = useCallback(
    () => setOpen((i) => (i === null ? i : (i - 1 + works.length) % works.length)),
    []
  );
  const next = useCallback(
    () => setOpen((i) => (i === null ? i : (i + 1) % works.length)),
    []
  );

  // Keyboard controls and scroll lock while the viewer is open
  useEffect(() => {
    if (open === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, close, prev, next]);

  const current = open !== null ? works[open] : null;

  return (
    <>
      <section className="gallery-intro">
        <h1>Gallery</h1>
        <p>
          {works.length} {works.length === 1 ? "piece" : "pieces"}. Select one to see it with
          its details.
        </p>
      </section>

      <section className="gallery" aria-label="All pieces">
        {works.map((work, i) => (
          <button
            key={work.id}
            type="button"
            className="gallery__item"
            onClick={() => setOpen(i)}
            aria-label={`View ${work.title}`}
          >
            {work.src ? (
              <img src={work.src} alt={work.alt ?? work.title} loading="lazy" />
            ) : (
              <span
                className="gallery__placeholder"
                style={{
                  background: `linear-gradient(160deg, ${work.placeholder[0]}, ${work.placeholder[1]})`,
                }}
              />
            )}
          </button>
        ))}
      </section>

      {current && open !== null && (
        <div className="viewer" role="dialog" aria-modal="true" aria-label={current.title}>
          <div className="viewer__bar">
            <button type="button" className="viewer__btn" onClick={prev}>
              Prev
            </button>
            <span className="viewer__count">
              {open + 1} of {works.length}
            </span>
            <button type="button" className="viewer__btn" onClick={next}>
              Next
            </button>
            <button type="button" className="viewer__btn" onClick={close}>
              Close
            </button>
          </div>

          {/* key restarts the fade-in every time you move to another piece */}
          <ArtworkPiece key={current.id} work={current} flip={open % 2 === 1} instant />
        </div>
      )}
    </>
  );
}
