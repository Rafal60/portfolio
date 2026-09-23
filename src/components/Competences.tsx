import type { ReactNode } from "react";
import "../styles/Competences.css";
 
export interface SkillGroup {
  category: string;
  items: string[];
}
 
export interface CompetencesProps {
  title?: string;
  skillGroups?: SkillGroup[];
  children?: ReactNode;
}
 
const defaultSkillGroups: SkillGroup[] = [
  { category: "Langages", items: ["JavaScript", "TypeScript", "Python", "HTML / CSS", "PHP", "C++"] },
  { category: "Frameworks & outils", items: ["React", "Node.js", "Laravel", "Tailwind CSS"] },
  { category: "Autres", items: ["Travail en équipe", "Gestion de projet", "Anglais courant"] },
];
 
export function Competences({skillGroups = defaultSkillGroups,}: CompetencesProps) {
  return (
    <div className="content" id="competences">
      <div className="glass-panel">
        <h1>Mes Compétences</h1>
        <div className="glass-panel-row">
          {skillGroups.map((group) => (
            <div className="glass-panel-box" key={group.category}>
              <h2 className="glass-panel-box-title">{group.category}</h2>
              <ul className="glass-panel-box-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}