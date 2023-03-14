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
            <img src={image} alt=""/>
            <div className="information">
                <div className="bloc-sur-bouton">
                    <h4 className="sous-titre">{sousTitre}</h4>
                    <p className="texte">{texte[0] == '<' ? 
                        <ul className="texte-liste">
                            {parse(texte.replaceAll(
                                '<p>', '<li class="item-liste">'
                            ).replaceAll('</p>', '</li>'))}
                        </ul>
                        :
                        texte
                    }</p>
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
