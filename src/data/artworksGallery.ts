import type { Artwork } from "../types";
//import image1 from "../assets/Obrazy/";
//import image2 from "../assets/Obrazy/"
//import image3 from "../assets/Obrazy/"


// Every "id" must be different from the others.
const artworksGallery: Artwork[] = [
  {
    id: "gallery-one",
    title: "First Piece",
    year: 2025,
    medium: "Oil on canvas",
    size: "90 × 60 cm",
    description: "jd",
    //src: image2,
    placeholder: ["#c9d6e8", "#4a6a94"],
    shape: "portrait",
  },
  {
    id: "gallery-one",
    title: "First Piece",
    year: 2025,
    medium: "Oil on canvas",
    size: "90 × 60 cm",
    description: "jd",
    //src: image1,
    placeholder: ["#c9d6e8", "#4a6a94"],
    shape: "square",
  },
    {
    id: "gallery-one",
    title: "First Piece",
    year: 2025,
    medium: "Oil on canvas",
    size: "90 × 60 cm",
    description: "jd",
    //src: image3,
    placeholder: ["#c9d6e8", "#4a6a94"],
    shape: "landscape",
  },
];

export { artworksGallery };
