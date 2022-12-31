import './Accueil.scss';

import Banniere from './Banniere';
import {Outlet, Link} from 'react-router-dom';

export default function Accueil({donnees}) {
    return (
        <section className="Accueil">
            <Banniere titre="" />
            <div className="contenu">
                <h1 className="titre">Les projets</h1>
                <h4 className="titre-description">[Découvrez nos projets, progrès et objectifs.]</h4>
                <ul className="liste-projets">
                    {donnees.map(donnee => 
                        <Link key={donnee.id} to={donnee.id}>
                            <h1 className="titre">{donnee.nom}</h1>
                            {/* <img src="projet.webp" alt=""/> */}
                        </Link>
                    )}
                    
                </ul>
            </div>
            <Outlet context={donnees} />
        </section>
    )
}
