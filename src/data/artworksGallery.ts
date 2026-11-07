import type { Artwork } from "../types";
import image1 from "../assets/Obrazy/KUS06258.jpg";
import image2 from "../assets/Obrazy/KUS06319.jpg"
import image3 from ""

//id = w jakiej kolekcji sie znajduje obraz
const artworksGallery: Artwork[] = [
  {
    id: "gallery-one",
    title: "First Piece",
    year: 2025,
    medium: "Oil on canvas",
    size: "90 × 60 cm",
    description: "jd",
    src: image1,
    placeholder: ["#c9d6e8", "#4a6a94"],
    shape: "landscape",
  },
  {
    id: "gallery-one",
    title: "nowy obraz",
    year: 2024,
    medium: "Oil",
    size: "80 × 120 cm",
    description: "super mega",
    src: image2,
    placeholder: ["#c9d6e8", "#4a6a94"],
    shape: "portrait", //square / ladnscape / portrait -> portait
  },
    {
    id: "gallery-two",
    title: "First Piece",
    year: 2025,
    medium: "Oil on canvas",
    size: "90 × 60 cm",
    description: "jd",
    //src: image3,
    placeholder: ["#c9d6e8", "#4a6a94"],
    shape: "landscape",
  },
  {
    id: "gallery-one",
    title: "ktorys obraz",
    year: 2023,
    medium: "Oil on canvas",
    size: "100 × 60 cm",
    description: "jp 100%",
    src: image3,
    placeholder: ["#c9d6e8", "#4a6a94"],
    shape: "landscape",
  },
];

export { artworksGallery };
