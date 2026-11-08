import type { Artwork } from "../types";
import image1 from "../assets/Obrazy/KUS06259.jpg"; 
import image2 from "../assets/Obrazy/KUS06265.jpg";
import image3 from "../assets/Obrazy/KUS06258.jpg";
import image4 from "../assets/Obrazy/KUS06263.jpg";
import image5 from "../assets/Obrazy/KUS06260.jpg";
import image6 from "../assets/Obrazy/KUS06271.jpg";
import image7 from "../assets/Obrazy/KUS06268.jpg";

import image8 from "../assets/Obrazy/KUS06277.jpg";
import image9 from "../assets/Obrazy/KUS06280.jpg";
import image10 from "../assets/Obrazy/KUS06283.jpg";
import image11 from "../assets/Obrazy/KUS06286.jpg";
//id = w jakiej kolekcji sie znajduje obraz
const artworksGallery: Artwork[] = [
  {
    id: "We are the world",
    title: "Nietknięta Norwegia",
    year: 2026,
    medium: "Oil on canvas",
    size: "70 × 100 cm",
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
    size: "70 × 100 cm",
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
    size: "70 × 100 cm",
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
    size: "70 × 100 cm",
    description: "The yellow autumnal hues, the clouds in their beautiful pastel shades, and those fantastical trees stole my heart. That inspiration drove me to paint the sky using practically nothing but a palette knife. Painting those misty areas with oil paint was a new experience for me.  The scene was captured at the top of the pass in south-west Colorado, above the low-hanging clouds and mist, just before sunrise.",
    src: image4,
    placeholder: ["#c9d6e8", "#4a6a94"],
    shape: "landscape",
  },
  {
    id: "We are the world",
    title: "Dotyk światła",
    year: 2026,
    medium: "Oil on canvas",
    size: "80 × 100 cm",
    description: "This is the first portrait based on this reflexion about nature and us. I wanted to reflect the inseparable bond between human beings and nature, to reveal our true essence, and to treat the skin as a surface for a sunny hug. ",
    src: image5,
    placeholder: ["#c9d6e8", "#4a6a94"],
    shape: "portrait", 
  },
  {
    id: "We are the world",
    title: "Sakura",
    year: 2026,
    medium: "Oil on canvas",
    size: "80 × 100 cm",
    description: "This work was created with the aim of revealing the primal forces of the earth that are pushed out from our bodies and allow us to live. The skin once again serves as a canvas for the shadows created by light and vegetation, symbolising the insignificance of humankind in all of this.",
    src: image6,
    placeholder: ["#c9d6e8", "#4a6a94"],
    shape: "portrait", 
  },
  {
    id: "We are the world",
    title: "Świetlista noc",
    year: 2026,
    medium: "Oil on canvas",
    size: "80 × 100 cm",
    description: "I wanted to capture the shadows and the magic of midnight lights. This is the final piece in this series; I posed for the portraits so that the whole series would be about us – including me in this reflection. People often think they are stronger than the laws of nature and can do whatever they like here on Earth; yet, particularly in recent years, we realize that this is absolutely not the case. We should live in harmony with nature. After all, we are the nature; we are the world.",
    src: image7,
    placeholder: ["#c9d6e8", "#4a6a94"],
    shape: "portrait",
  },   
  {
    id: "Abstract",
    title: "Eksplozja",
    year: 2026,
    medium: "Acrylic on canvas",
    size: "75 × 55 cm",
    description: "A painting created using the pouring technique with chaotic, rapid movements.",
    src: image8,
    placeholder: ["#c9d6e8", "#4a6a94"],
    shape: "portrait",
  },   
  {
    id: "Jesters",
    title: "Budzik",
    year: 2026,
    medium: "Watercolor on canvas",
    size: "75 × 55 cm",
    description: "The painting was created some time after I drew a quick sketch at 7.00 am, shortly after the alarm went off. I was feeling a great wave of resignation, hate to the alarm clocks and this imposed, global routine of getting up early.",
    src: image9,
    placeholder: ["#c9d6e8", "#4a6a94"],
    shape: "portrait",
  },  
  {
    id: "Paintings",
    title: "Autoportret",
    year: "2021-02-05",
    medium: "Acrylic on canvas",
    size: "80 × 59,5 cm",
    description: "I painted the work alone in my room, while my parents were having a noisy party in the living room and a single guest would come in from time to time to ask how I was doing.",
    src: image10,
    placeholder: ["#c9d6e8", "#4a6a94"],
    shape: "portrait",
  }, 
  {
    id: "Paintings",
    title: "Topiona",
    year: "2026-03",
    medium: "Acrylic on canvas",
    size: "75 × 55 cm",
    description: "The painting was created during moments of great sadness, a sense of being drowned, and a hopeless situation.",
    src: image11,
    placeholder: ["#c9d6e8", "#4a6a94"],
    shape: "portrait",
  },
];

export { artworksGallery };
