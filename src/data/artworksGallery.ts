import type { Artwork } from "../types";
import image1 from "../assets/Obrazy/KUS06259.jpg"; 
import image2 from "../assets/Obrazy/KUS06265.jpg";
import image3 from "../assets/Obrazy/KUS06258.jpg";
import image4 from "../assets/Obrazy/KUS06263.jpg";


//id = w jakiej kolekcji sie znajduje obraz
const artworksGallery: Artwork[] = [
  {
    id: "We are the world",
    title: "Nietknięta Norwegia",
    year: 2026,
    medium: "Oil on canvas",
    size: "100 × 70 cm",
    description: "I wanted to paint the natural forces of the elements and nature, untouched by human hands. This painting was the first to be created as part of our collaboration with the photographer Joseph Filer. It represents the sunset over the snow-covered Ramberg beach on the island of Lofoten in Norway. Almost the entire painting was created using a palette knife.",
    src: image1,
    placeholder: ["#c9d6e8", "#4a6a94"],
    shape: "landscape",
  },
  {
    id: "We are the world",
    title: "Słoneczne odludzia",
    year: 2026,
    medium: "Oil on canvas",
    size: "100 × 70 cm",
    description: "When I saw this photograph, I felt a strong impulse to paint it; it shows the sunrise in Monument Valley, Arizona. While working on it, after I’d painted the sky, the incredible colours of the place made me stop looking at the photograph and start creating the terrain myself, inspired by those vivid colours. It was a beautiful experience, even though I’d never actually been there.",
    src: image2,
    placeholder: ["#c9d6e8", "#4a6a94"],
    shape: "landscape", //square / ladnscape / portrait -> portait
  },
    {
    id: "We are the world",
    title: "Fioletowa burza",
    year: 2026,
    medium: "Oil on canvas",
    size: "100 × 70 cm",
    description: "This chaotic weather was something that immediately inspired my brush. This painting came about just as chaotically. I didn’t think too much about combining all those bright colours. I let nature paint it for me. This incredible double strike with an arc appeared at dawn in Florida Bay in the Florida Keys archipelago.",
    src: image3,
    placeholder: ["#c9d6e8", "#4a6a94"],
    shape: "landscape",
  },
  {
    id: "We are the world",
    title: "Jesienne pastele",
    year: 2026,
    medium: "Oil on canvas",
    size: "100 × 70 cm",
    description: "The yellow autumnal hues, the clouds in their beautiful pastel shades, and those fantastical trees stole my heart. That inspiration drove me to paint the sky using practically nothing but a palette knife. Painting those misty areas with oil paint was a new experience for me.  The scene was captured at the top of the pass in south-west Colorado, above the low-hanging clouds and mist, just before sunrise.",
    src: image4,
    placeholder: ["#c9d6e8", "#4a6a94"],
    shape: "landscape", //nie pamietam jaki ale chyba to byl landscape 
  },
];

export { artworksGallery };
