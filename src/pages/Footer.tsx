import "./Footer.css";

type FooterProps = {
  name: string;
};

export default function Footer({ name }: FooterProps) {
  return (
    <>
      <footer className="footer">
        <section id="about" className="about">
          <h2>About</h2>
          <p>
            Write a few sentences about yourself here: where you work, what you
            use, and what you are interested in making next.
          </p>
        
        <p>
          © {new Date().getFullYear()} {name}
        </p>
        </section>
      </footer>
    </>
  );
}
