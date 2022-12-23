import './Entete.scss';

import {Link} from 'react-router-dom';

export default function Entete() {
    return (
        <header className="Entete">
            <Link to='/contact'>
                <h3 className="sous-titre">Contact</h3>
            </Link>
            <Link to='/'>
                <h2 className="titre">Faerien Art</h2>
            </Link>
            <Link to='/origine'>
                <h3 className="sous-titre">Origine</h3>
            </Link>
        </header>
    )
}
