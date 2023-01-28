import './Accueil.scss';

import Banniere from './Banniere';
import {Outlet, Link} from 'react-router-dom';
import DonneesSiteContexte from '../Contexte';
import {useContext} from 'react';

export default function Accueil({imgBanniere}) {
    const {projets, blocs_accueil} = useContext(DonneesSiteContexte);
    return (
        projets &&
        <section className="Accueil">
            <Banniere 
                titre="Faerien art" 
                blocs={blocs_accueil.map(bloc => bloc.acf)} 
                image={imgBanniere}
            />
            <div className="contenu">
                <h1 className="titre">Les projets</h1>
                <h4 className="titre-description">[EXPLORER ET SOUTENIR]</h4>
                <ul className="liste-projets">
                    {projets.map(projet => 
                        <Link 
                            key={projet.id} 
                            to={projet.id + ""} 
                            className="miniature-projet"
                        >
                            <div 
                                className="image-titre-projet"
                                style={{
                                    backgroundImage: `url(${projet.acf.image_de_presentation})`
                                }}
                            >
                                <h1 className="titre">{projet.acf.titre}</h1>
                            </div>
                            <h4 className="sous-titre">{projet.acf.sous_titre}</h4>
                        </Link>
                    )}
                    
                </ul>
            </div>
            <Outlet context={projets} />
            
        </section>
    )
}
