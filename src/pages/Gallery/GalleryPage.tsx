import { useCallback, useEffect, useMemo, useState } from "react";
import { artworksGallery } from "../../data/artworksGallery";
import ArtworkPiece from "../HomePage/ArtworkPiece";
import CollectionSection from "./CollectionSection";
import GalleryFilters from "./GalleryFilters";
import galleryIMG from "../../assets/MainObrazy/20260817_1609001111okfjhif11.webp"
import {
  DEFAULT_FILTERS,
  filterArtworks,
  getMediums,
  hasActiveFilters,
  type FilterState,
} from "./filterArtworks";
import { groupByCollection } from "./groupArtworks";
import "../../App.css";
import "./GalleryPage.css";
import type { Artwork } from "../../types";
import IntroHero from "../IntroHero";

const works = artworksGallery;
const mediums = getMediums(works);

export default function GalleryPage() {
  const [open, setOpen] = useState<number | null>(null);
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set());

  const filtered = useMemo(() => filterArtworks(works, filters), [filters]);
  const collections = useMemo(() => groupByCollection(filtered), [filtered]);

  // Viewer order = pieces of expanded collections, in display order
  const { sections, visible } = useMemo(() => {
    const visible: Artwork[] = [];
    const sections = collections.map((c) => {
      const startIndex = visible.length;
      if (!collapsed.has(c.id)) visible.push(...c.works);
      return { collection: c, startIndex };
    });
    return { sections, visible };
  }, [collections, collapsed]);

  const count = visible.length;

  const handleFilters = (next: FilterState) => {
    setFilters(next);
    setOpen(null);
  };

  const toggle = (id: string) =>
    setCollapsed((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const collapseAll = () => setCollapsed(new Set(collections.map((c) => c.id)));
  const expandAll = () => setCollapsed(new Set());

  const close = useCallback(() => setOpen(null), []);
  const prev = useCallback(
    () => setOpen((i) => (i === null ? i : (i - 1 + count) % count)),
    [count]
  );
  const next = useCallback(
    () => setOpen((i) => (i === null ? i : (i + 1) % count)),
    [count]
  );

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

  const current = open !== null ? visible[open] : null;

  return (
    <>
      <IntroHero title="Gallery" image={galleryIMG} className="intro-collection">
        <p>
          {filtered.length} {filtered.length === 1 ? "piece" : "pieces"} in{" "}
          {collections.length} {collections.length === 1 ? "collection" : "collections"}
          {hasActiveFilters(filters) ? ` (of ${works.length} pieces)` : ""}. Select one to
          see it with its details.
        </p>
      </IntroHero>

      <GalleryFilters value={filters} onChange={handleFilters} mediums={mediums} />

      {collections.length > 1 && (
        <div className="collections-actions">
          <button type="button" className="filters__reset" onClick={expandAll}>
            Expand all
          </button>
          <button type="button" className="filters__reset" onClick={collapseAll}>
            Collapse all
          </button>
        </div>
      )}

      <div aria-label="All collections">
        {collections.length === 0 && (
          <p className="gallery__empty">No pieces match these filters.</p>
        )}
        {sections.map(({ collection, startIndex }) => (
          <CollectionSection
            key={collection.id}
            collection={collection}
            collapsed={collapsed.has(collection.id)}
            startIndex={startIndex}
            onToggle={() => toggle(collection.id)}
            onOpen={setOpen}
          />
        ))}
      </div>

      {current && open !== null && (
        <div className="viewer" role="dialog" aria-modal="true" aria-label={current.title}>
          <div className="viewer__bar">
            <button type="button" className="viewer__btn" onClick={prev}>Prev</button>
            <span className="viewer__count">{open + 1} of {count}</span>
            <button type="button" className="viewer__btn" onClick={next}>Next</button>
            <button type="button" className="viewer__btn" onClick={close}>Close</button>
          </div>

          <ArtworkPiece
            key={`${current.id}-${current.title}-${open}`}
            work={current}
            flip={open % 2 === 1}
            instant
          />
        </div>
      )}
    </>
  );
}