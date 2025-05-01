import { useState } from 'react';
import '../assets/style/styleNavBarre.css'

interface Props{
  strTitre:string
}

const NavBarre:React.FC<Props> = ({strTitre}) => {
  const [isOpen, setIsOpen] = useState(false);

    return (
      <header className="header">
        <nav className="navbar">
          <div className="burger-menu" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </div>
          <ul className={isOpen ? "nav-links open" : "nav-links"}>
            <li><a href="/">Accueil</a></li>
            <li><a href="/actualite">Actualité</a></li>
            <li><a href="/historique">Histoire</a></li>
            <li><a href="/petit-plus">Les petits plus</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/photo">Photos</a></li>
          </ul>
        </nav>
        <h1>Bienvenue à vous</h1>
        <p>{strTitre}</p>
      </header>
    );
  }

  export default NavBarre;