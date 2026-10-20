import type { Availability } from "../../types"; // adjust path
import {
  AVAILABILITY_LABELS,
  DEFAULT_FILTERS,
  hasActiveFilters,
  type FilterState,
} from "./filterArtworks";

type Props = {
  value: FilterState;
  onChange: (next: FilterState) => void;
  mediums: string[];
};

export default function GalleryFilters({ value, onChange, mediums }: Props) {
  const set = <K extends keyof FilterState>(key: K, v: FilterState[K]) =>
    onChange({ ...value, [key]: v });

  return (
    <div className="filters" role="search" aria-label="Filter pieces">
      <input
        type="search"
        className="filters__input"
        placeholder="Search by Collection or title"
        value={value.query}
        onChange={(e) => set("query", e.target.value)}
        aria-label="Search by Collection or title"
      />

      <select
        className="filters__select"
        value={value.medium}
        onChange={(e) => set("medium", e.target.value)}
        aria-label="Filter by medium"
      >
        <option value="all">All mediums</option>
        {mediums.map((m) => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>

      <select
        className="filters__select"
        value={value.availability}
        onChange={(e) => set("availability", e.target.value as "all" | Availability)}
        aria-label="Filter by availability"
      >
        <option value="all">Toute disponibilité</option>
        {(Object.keys(AVAILABILITY_LABELS) as Availability[]).map((a) => (
          <option key={a} value={a}>
            {AVAILABILITY_LABELS[a]}
          </option>
        ))}
      </select>

      {hasActiveFilters(value) && (
        <button
          type="button"
          className="filters__reset"
          onClick={() => onChange(DEFAULT_FILTERS)}
        >
          Reset
        </button>
      )}
    </div>
  );
}