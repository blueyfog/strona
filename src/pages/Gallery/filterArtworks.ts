import type { Artwork, Availability } from "../../types"; // adjust path

export type FilterState = {
  query: string;
  medium: string; // "all" or a medium name
  availability: "all" | Availability;
};

export const DEFAULT_FILTERS: FilterState = {
  query: "",
  medium: "all",
  availability: "all",
};

export const AVAILABILITY_LABELS: Record<Availability, string> = {
  disponible: "Disponible",
  prive: "Prive",
  sold: "Sold",
};

export function hasActiveFilters(f: FilterState): boolean {
  return f.query !== "" || f.medium !== "all" || f.availability !== "all";
}

export function getMediums(works: Artwork[]): string[] {
  return Array.from(
    new Set(works.map((w) => w.medium).filter((m): m is string => !!m))
  ).sort();
}

export function filterArtworks(works: Artwork[], f: FilterState): Artwork[] {
  const q = f.query.trim().toLowerCase();
  return works.filter((w) => {
    const matchesQuery =
      !q ||
      (w.id ?? "").toLowerCase().includes(q) ||
      w.title.toLowerCase().includes(q);
    const matchesMedium = f.medium === "all" || w.medium === f.medium;
    const matchesAvailability =
      f.availability === "all" || w.disponibilite === f.availability;
    return matchesQuery && matchesMedium && matchesAvailability;
  });
}