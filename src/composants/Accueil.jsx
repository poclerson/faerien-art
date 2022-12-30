import './Accueil.scss';

import useOuvertures from '../hooks/useOuvertures';

import Banniere from './Banniere';
import Projet from './Projet';

export default function Accueil() {
    const {surClic, verifierOuverture} = useOuvertures([1, 2, 3]);
    
    return (
        <section className="Accueil">
            <Banniere titre="" />
            <div className="contenu">
                <h1 className="titre">Les projets</h1>
                <h4 className="titre-description">[Découvrez nos projets, progrès et objectifs.]</h4>
                <ul className="liste-projets">
                    <Projet />
                    <Projet />
                    <Projet />
                </ul>
            </div>
        </section>
    )
}
