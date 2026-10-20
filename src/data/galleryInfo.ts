import type { Artwork } from "../types";

/**
 * Optional details for gallery images.
 * The key is the file name WITHOUT the extension.
 * Images you do not list here still work: they show the file name as the title.
 */
export const galleryInfo: Record<
  string,
  Partial<Pick<Artwork, "title" | "year" | "medium" | "size" | "description" | "alt">>
> = {
  "harbour-morning": {
    title: "Harbour, morning",
    year: 2025,
    medium: "Oil on canvas",
    size: "40 x 50 cm",
    description: "The light came in low over the water and I tried to keep it.",
    alt: "A harbour at sunrise with boats and pale orange light on the water",
  },

  "IMG-20260617-WA0096": {
    title: "Blue room",
    year: 2026,
    medium: "Acrylic on paper",
    size: "30 x 40 cm",
    description: "A quiet corner, painted from memory a few days later.",
  },
};
