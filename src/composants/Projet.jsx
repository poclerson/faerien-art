import './Projet.scss';

import Banniere from './Banniere';
import Retour from './Retour';
import SectionTexte from './SectionTexte';
import SectionImage from './SectionImage';
import SectionImageTexte from './SectionImageTexte';

import { useParams } from 'react-router-dom'

import parse from 'html-react-parser'
import { useContext } from 'react';
import DonneesSiteContexte from '../Contexte';

export default function Projet() {
  const donnees = useContext(DonneesSiteContexte)
  const id = useParams();

  const projet = donnees.projets.filter(_projet => _projet.acf.titre === id.donneeId)[0];
  const { content } = projet
  const { titre, slogan, image_de_presentation, description } = projet.acf

  const sectionsIds = projet.acf.sections

  const sections = donnees.sections.filter(({ id: sectionId }) => sectionsIds.includes(sectionId))

  return (
    <section className="Projet">
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
                key={section.id}
                sousTitre={section.acf.titre}
                image={section.acf.image}
                texte={section.acf.description}
                bouton={section.acf.bouton}
                lienBouton={section.acf.bouton_lien}
                coteImage={section.acf.cote}
              />
            case 'image':
              return <SectionImage
                key={section.id}
                image={section.acf.image}
              />
            case 'imageTexte':
              return <SectionImageTexte
                key={section.id}
                sousTitre={section.acf.titre}
                image={section.acf.image}
                texte={section.acf.description}
              />
            default:
              return null
          }
        })}
      </div>
    </section>
  )
}
