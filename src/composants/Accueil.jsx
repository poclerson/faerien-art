import './Accueil.scss';

import Banniere from './Banniere';
import {Outlet, Link} from 'react-router-dom';
import DonneesSiteContexte from '../Contexte';
import {useContext} from 'react';

export default function Accueil() {
    const {projets} = useContext(DonneesSiteContexte);
    return (
        projets &&
        <section className="Accueil">
            <Banniere titre="" />
            <div className="contenu">
                <h1 className="titre">Les projets</h1>
                <h4 className="titre-description">[Découvrez nos projets, progrès et objectifs.]</h4>
                <ul className="liste-projets">
                    {projets.map(projet => 
                        <Link 
                            key={projet.id} 
                            to={projet.id + ""} 
                            className="miniature-projet"
                            style={{
                                backgroundImage: `url(${projet.acf.image_de_presentation})`
                            }}
                        >
                            <h1 className="titre">{projet.acf.titre}</h1>
                        </Link>
                    )}
                    
                </ul>
            </div>
            <Outlet context={projets} />
        </section>
    )
}
