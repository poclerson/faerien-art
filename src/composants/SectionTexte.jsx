import './SectionTexte.scss'

import Bouton from './Bouton';

import parse from 'html-react-parser';

export default function SectionTexte({
  image,
  texte,
  sousTitre,
  bouton,
  lienBouton,
  coteImage = "droite"
}) {
  return (
    <div className="SectionTexte rangee" cote={coteImage}>
      <img src={image} alt="" />
      <div className="information">
        <div className="bloc-sur-bouton">
          <h4>{sousTitre}</h4>
          <div className="texte">{parse(texte)}</div>
        </div>
        {bouton &&
          <Bouton
            titre={bouton}
            lien={lienBouton}
          />
        }
      </div>
    </div>
  )
}
