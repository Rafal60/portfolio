import "../styles/Header.css"

export function Header() {
  return (
    <section id="about">
        <header >
        <h1 className="header-name">Raphaël Coatleven</h1>
        <p className="header-role">Developpeur Full-stack polyvalent</p>
        <p className="header-about">Étudiant en troisième année de Bachelor chez Lille Ynov Campus en temps que developpeur, 
          passionné depuis le lycée et animé par une réelle envie de suivre un parcours dans le domaine 
          de l’informatique, j’aimerais apprendre et développer mes connaissances en matière de programmation.</p>
        </header>
        <img src= 'img/nuage.png' alt="Bord des nuages" width="100%"></img>
    </section>
  );
}