export type Availability = "disponible" | "prive" | "sold";

export type Artwork = {
  //id = nazwa kolekcji powiedzmy, tak bedzie najlatwiej
  id?: string;
  title: string;
  year?: number;
  medium?: string;
  size?: string;
  description: string;
  /** Path to your image, e.g. "/art/harbour.jpg". Leave undefined to show a colour placeholder. */
  src?: string;
  alt?: string;
  /** Placeholder colours, only used when there is no src. */
  placeholder: [string, string];
  /** Shape of the frame on the page. */
  shape: "landscape" | "portrait" | "square";
  /** Availability of the piece. */
  disponibilite?: Availability;
};