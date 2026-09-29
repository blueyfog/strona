import "./Header.css";

type HeaderProps = {
  name: string;
};

export default function Header({ name }: HeaderProps) {
  return (
    <>
      <header className="masthead">
        <a className="masthead__name" href="/">{name}</a>
        <nav aria-label="Main">
          <a href="/gallery">Gallery</a>
          <a href="#about">About</a>
        </nav>
      </header>
    </>
  );
}
