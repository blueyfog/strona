import type { Artwork } from "../types"; // adjust path

export const NO_COLLECTION = "__none__";

export type Collection = {
  id: string; // collection id, or NO_COLLECTION
  label: string;
  works: Artwork[];
};

/** Groups by id, keeping the order in which each collection first appears. */
export function groupByCollection(works: Artwork[]): Collection[] {
  const map = new Map<string, Artwork[]>();
  for (const w of works) {
    const key = w.id?.trim() || NO_COLLECTION;
    const list = map.get(key);
    if (list) list.push(w);
    else map.set(key, [w]);
  }
  return Array.from(map, ([id, list]) => ({
    id,
    label: id === NO_COLLECTION ? "Sans collection" : id,
    works: list,
  }));
}