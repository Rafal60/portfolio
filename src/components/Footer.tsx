import "../styles/Footer.css";
 
export interface FooterLink {
  label: string;
  href: string;
}
 
export interface FooterProps {
  links?: FooterLink[];
}
 
const defaultLinks: FooterLink[] = [
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#competences" },
  { label: "Projets", href: "#projets" },
];
 
export function Footer({links = defaultLinks,}: FooterProps) {
  return (
    <footer>
      <div className="footer-row">
        <div className="footer-identity">
          <span className="footer-name">Raphaël Coatleven</span>
          <span className="footer-role">Développeur Full-stack polyvalent</span>
        </div>
        <ul className="footer-nav">
          {links.map(({ label, href }) => (
            <li>
              <a href={href}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}