import "../styles/Projets.css";

export interface Project {
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface ProjetsProps {
  title?: string;
  projects?: Project[];
}

const defaultProjects: Project[] = [
  { title: "App météo", description: "Application Flutter de prévision météo utilisant l'API OpenWeatherMap, avec un système de recherche, une gestion des favoris ", image: "img/App-Meteo.png", href: "https://github.com/Rafal60/App-Meteo" },
  { title: "Forum", description: "Forum en ligne, avec gestion des utilisateurs et connexion à une base de données. Réalisé en Go, HTML et CSS, utilisant SQLite pour la gestion des données.", image: "img/Forum-go.png", href: "https://github.com/Alkaniel/go-forum" },
  { title: "Game Jam", description: "Jeu platformeur à énigmes réalisé avec Godot dans le cadre d'un Game Jam", image: "img/Godot-Game.png", href: "https://github.com/Rafal60/Dying-Knight" },
  { title: "E-Commmerce PHP", description: "Courte description : le problème résolu, votre rôle et le résultat obtenu.", image: "img/projet-4.png", href: "https://github.com/Fox-Programs/E-commerce-php" },
  { title: "Campus Companion", description: "Courte description : le problème résolu, votre rôle et le résultat obtenu.", image: "img/projet-5.png", href: "https://github.com/lazlodev/campuscompanion" },
  { title: "Projet Fil Rouge", description: "Courte description : le problème résolu, votre rôle et le résultat obtenu.", image: "img/tower-defence.png", href: "https://github.com/Rafal60/Tower-defence_Fil-rouge" },
];

export function Projets({projects = defaultProjects }: ProjetsProps) {
  return (
    <section id="projets">
        <div  className="projets-content" >
        <div className="projets-panel">
            <h1>Quelques Projets</h1>

            <div className="projets-row">
            {projects.map((project) => (
                <a className="projets-box" key={project.title} href={project.href}>
                <img className="projets-box-img" src={project.image} alt={project.title} />
                <div className="projets-box-text">
                    <h2 className="projets-box-title">{project.title}</h2>
                    <p className="projets-box-desc">{project.description}</p>
                </div>
                </a>
            ))}
            </div>
        </div>
        </div>
    </section>
  );
}