import type { Artwork } from "../types";
//import image1 from "../assets/MainObrazy/20260817_160900.jpg";
import image2 from "../assets/MainObrazy/20260924_172429.jpg";
import image3 from "../assets/MainObrazy/IMG-20260617-WA0112.jpg";
import image4 from "../assets/MainObrazy/20260924_172857.jpg";


const artworksMain: Artwork[] = [
  {
    id: "harbour-at-six",
    title: "Maria Hajduk",
    medium: "artist",
    description:
      "artysta nie psych",
    placeholder: ["#c9d6e8", "#4a6a94"],
    shape: "portrait",
  },
  {
    id: "kitchen-table",
    title: "Kitchen Table, Sunday",
    year: 2024,
    medium: "Gouache on paper",
    size: "40 × 50 cm",
    description:
      "A study of leftover objects: a cup, a folded cloth, a bowl of lemons. " +
      "I kept the palette to five colours to see how much warmth I could get from so little.",
    src:image2,
    placeholder: ["#f2d98a", "#c76a3a"],
    shape: "square",
  },
  {
    id: "field-notes",
    title: "Field Notes I",
    year: 2024,
    medium: "Linocut, edition of 20",
    size: "30 × 30 cm",
    description:
      "The first in a series of prints based on sketchbook pages from walks in the countryside. " +
      "Each print in the edition is inked by hand, so no two are quite the same.",
    src:image3,
    placeholder: ["#dfe8d2", "#3f5a3c"],
    shape: "portrait",
  },
  {
    id: "field-notes",
    title: "Field Notes I",
    year: 2024,
    medium: "Linocut, edition of 20",
    size: "30 × 30 cm",
    description:
      "The first in a series of prints based on sketchbook pages from walks in the countryside. " +
      "Each print in the edition is inked by hand, so no two are quite the same.",
    src:image4,
    placeholder: ["#dfe8d2", "#3f5a3c"],
    shape: "landscape",
  },
];

export {artworksMain};