import './Projet.scss';

import Banniere from './Banniere';
import Retour from './Retour';
import SectionTexte from './SectionTexte';
import SectionImage from './SectionImage';

import {useParams} from 'react-router-dom'

export default function Projet({donnees}) {
    const id = useParams();

    const projet = donnees.projets.filter(_projet => _projet.id == id.donneeId)[0];

    return (
        <li className="Projet">
            <Banniere 
                titre={projet.acf.titre} 
                sousTitre={projet.acf.slogan}
                image={projet.acf.image_de_presentation}
                blocs={[projet.acf.description]} 
            />
            <div className="contenu">
                {projet.acf.sections.includes("1") &&
                    <SectionTexte 
                        image={projet.acf.section_1_image}
                        titreBouton={projet.acf.section_1_bouton}
                        sousTitreBouton={projet.acf.section_1_sous_titre_bouton}
                        utiliserHTMLBouton={projet.acf.section_1_remplacer_le_bouton_par_du_html}
                        lienBouton={projet.acf.section_1_lien_du_bouton}
                        texte={projet.acf.section_1_texte}
                    />
                }
                {projet.acf.sections.includes("2") &&
                    <SectionImage 
                        image={projet.acf.section_2_image}
                    />
                }
                {projet.acf.sections.includes("3") &&
                    <SectionTexte 
                        image={projet.acf.section_3_image}
                        titreBouton={projet.acf.section_3_bouton}
                        sousTitreBouton={projet.acf.section_3_sous_titre_bouton}
                        lienBouton={projet.acf.section_3_lien_du_bouton}
                        texte={projet.acf.section_3_texte}
                        direction={"inverse"}
                    />
                }
            </div>
            <Retour lien={'/'} />
        </li>
    )
}
