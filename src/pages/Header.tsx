import { Link } from "react-router-dom";
import "./Header.css";

type HeaderProps = {
  name: string;
};

export default function Header({ name }: HeaderProps) {
  return (
    <>
      <header className="masthead">
        <Link className="masthead__name" to="/">{name}</Link>
        <nav aria-label="Main">
          <Link to="/gallery">Gallery</Link>
          <a href="#about">About</a>
        </nav>
      </header>
    </>
  );
}
