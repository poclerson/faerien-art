import './Projet.scss';

import Banniere from './Banniere';
import Retour from './Retour';
import SectionTexte from './SectionTexte';
import SectionImage from './SectionImage';
import SectionImageTexte from './SectionImageTexte';

import { useParams } from 'react-router-dom'

import parse from 'html-react-parser'

export default function Projet({ donnees }) {
  const id = useParams();

  const projet = donnees.projets.filter(_projet => _projet.acf.titre == id.donneeId)[0];
  const { content } = projet
  const { titre, slogan, image_de_presentation, description } = projet.acf

  const sections = donnees.sections.filter(section =>
    projet.acf.sections.filter(sectionProjet => sectionProjet.id == section.id)
  );
  return (
    <li className="Projet">
      <Banniere
        titre={titre}
        sousTitre={slogan}
        image={image_de_presentation}
        blocs={[{ texte: description }]}
      />
      <div className="contenu">
        {content && parse(content)}
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
