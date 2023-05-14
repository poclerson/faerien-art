import './Projet.scss';

import Banniere from './Banniere';
import Retour from './Retour';
import SectionTexte from './SectionTexte';
import SectionImage from './SectionImage';
import SectionImageTexte from './SectionImageTexte';

import { useParams } from 'react-router-dom'

export default function Projet({ donnees }) {
  const id = useParams();

  const projet = donnees.projets.filter(_projet => _projet.acf.titre == id.donneeId)[0];

  const sections = donnees.sections.filter(section =>
    projet.acf.sections.filter(sectionProjet => sectionProjet.id == section.id)
  );
  return (
    <li className="Projet">
      <Banniere
        titre={projet.acf.titre}
        sousTitre={projet.acf.slogan}
        image={projet.acf.image_de_presentation}
        blocs={[{ texte: projet.acf.description }]}
      />
      <div className="contenu">
        {sections.reverse().map(function (section) {
          switch (section.acf.section_type) {
            case 'texte':
              return <SectionTexte
                sousTitre={section.acf.titre}
                image={section.acf.image}
                texte={section.acf.description}
                bouton={section.acf.bouton}
                lienBouton={section.acf.bouton_lien}
                coteImage={section.acf.cote}
              />
            case 'image':
              return <SectionImage
                image={section.acf.image}
              />
            case 'imageTexte':
              return <SectionImageTexte
                sousTitre={section.acf.titre}
                image={section.acf.image}
                texte={section.acf.description}
              />
            default:
              return null
          }
        })}
      </div>
      <Retour lien={'/'} />
    </li>
  )
}
