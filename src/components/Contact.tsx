import "../styles/Contact.css";
 
export interface ContactItem {
  label: string;
  value: string;
  href: string;
}
 
export interface ContactProps {
  title?: string;
  items?: ContactItem[];
}
 
const defaultItems: ContactItem[] = [
  { label: "LinkedIn", value: "Raphaël Coatleven", href: "https://www.linkedin.com/in/raphaël-coatleven-08ba07353/" },
  { label: "GitHub", value: "github.com/Rafal60", href: "https://github.com/Rafal60" },
  { label: "Mail", value: "raphael.coatleven@gmail.com", href: "mailto:raphael.coatleven@gmail.com" },
  { label: "Téléphone", value: "07 69 75 98 05", href: "tel:+33769759805" },
];
 
export function Contact({ items = defaultItems }: ContactProps) {
  return (
    <div className="content">
      <div className="glass-panel">
        <h1>Contacter Moi</h1>
 
        <div className="contact-glass-panel-row">
          {items.map((item) => (
            <a className="contact-glass-panel-box" key={item.label} href={item.href}>
              <h2 className="contact-glass-panel-box-title">{item.label}</h2>
              <p className="contact-glass-panel-box-value">{item.value}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}