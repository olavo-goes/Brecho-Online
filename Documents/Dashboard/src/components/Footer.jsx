import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} CyberBrechó — Desenvolvido por <strong>Olavo Goes</strong></p>
    </footer>
  );
}

export default Footer;
