import './Entete.scss';

import {Link} from 'react-router-dom';

export default function Entete() {
    return (
        <header className="Entete">
            <Link to='/' aria-label="Retour à l'accueil">
                <h2 className="titre">Faerien Art</h2>
            </Link>
            <img src="/logo.webp" alt="" className="logo"/>
            <Link to='/origine'>
                <h2 className="sous-titre">Contact</h2>
            </Link>
        </header>
    )
}
