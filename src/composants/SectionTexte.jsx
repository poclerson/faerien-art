import './SectionTexte.scss'

import Bouton from './Bouton';

export default function SectionTexte({
    image,
    texte,
    sousTitre,
    titreBouton,
    sousTitreBouton,
    utiliserHTMLBouton,
    lienBouton,
    direction = "normale"
}) {
    return (
        <div className="SectionTexte rangee" direction={direction}>
            <img src={image} alt=""/>
            <div className="information">
                <div className="bloc-sur-bouton">
                    <h4 className="sous-titre">{sousTitre}</h4>
                    <p className="texte">{texte}</p>
                </div>
                {titreBouton && 
                    <Bouton 
                        titre={titreBouton}
                        sousTitre={sousTitreBouton}
                        utiliserHTML={utiliserHTMLBouton}
                        lien={lienBouton}
                    />
                }
            </div>
        </div>
    )
}
