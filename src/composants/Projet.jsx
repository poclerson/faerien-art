import './Projet.scss';

import Banniere from './Banniere';
import Retour from './Retour';
import Bouton from './Bouton';

import {useParams} from 'react-router-dom'

export default function Projet({donnees}) {
    const id = useParams();

    const projet = donnees.projets.filter(_projet => _projet.id == id.donneeId)[0];

    return (
        <li className="Projet">
            <Banniere 
                titre={projet.acf.titre} 
                image={projet.acf.image_de_presentation}
                blocs={[projet.acf.slogan, projet.acf.description]} 
            />
            <div className="contenu">
                <div className="rangee rangee-1">
                    <img src={projet.acf.section_1_image} alt=""/>
                    <div className="information">
                        <Bouton 
                            titre={projet.acf.section_1_bouton}
                            lien={projet.acf.section_1_lien_du_bouton}
                        />
                        <p className="texte">{projet.acf.section_1_texte}</p>
                    </div>
                </div>
            </div>
            <Retour lien={'/'} />
        </li>
    )
}
