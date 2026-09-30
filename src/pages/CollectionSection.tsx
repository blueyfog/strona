import type { Collection } from "./groupArtworks";

type Props = {
  collection: Collection;
  collapsed: boolean;
  startIndex: number; // index of this collection's first piece in the viewer order
  onToggle: () => void;
  onOpen: (index: number) => void;
};

export default function CollectionSection({
  collection,
  collapsed,
  startIndex,
  onToggle,
  onOpen,
}: Props) {
  const panelId = `collection-${collection.id}`;
  const n = collection.works.length;

  return (
    <section className="collection">
      <button
        type="button"
        className="collection__header"
        onClick={onToggle}
        aria-expanded={!collapsed}
        aria-controls={panelId}
      >
        <span className="collection__title">{collection.label}</span>
        <span className="collection__count">
          {n} {n === 1 ? "piece" : "pieces"}
        </span>
        <span className="collection__chevron" aria-hidden="true">
          {collapsed ? "+" : "–"}
        </span>
      </button>

      {!collapsed && (
        <div id={panelId} className="gallery">
          {collection.works.map((work, i) => (
            <button
              key={`${collection.id}-${work.title}-${i}`}
              type="button"
              className="gallery__item"
              onClick={() => onOpen(startIndex + i)}
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
        </div>
      )}
    </section>
  );
}