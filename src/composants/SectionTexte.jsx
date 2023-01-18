import './SectionTexte.scss'

import Bouton from './Bouton';

export default function SectionTexte({
    image,
    titreBouton,
    sousTitreBouton,
    utiliserHTMLBouton,
    lienBouton,
    texte,
    direction = "normale"
}) {
    return (
        <div className="SectionTexte rangee" direction={direction}>
            <img src={image} alt=""/>
            <div className="information">
                <Bouton 
                    titre={titreBouton}
                    sousTitre={sousTitreBouton}
                    utiliserHTML={utiliserHTMLBouton}
                    lien={lienBouton}
                />
                <p className="texte">{texte}</p>
            </div>
        </div>
    )
}
