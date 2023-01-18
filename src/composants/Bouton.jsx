import './Bouton.scss'

import parse from 'html-react-parser';

export default function Bouton({
    titre,
    sousTitre,
    lien,
    utiliserHTML = false
}) {
    return (
        !utiliserHTML ? 
            <a className="Bouton" href={lien}>
                <div className="texte">
                    <h3 className="titre">{titre}</h3>
                    {sousTitre && <h5 className="sous-titre">{sousTitre}</h5>}
                </div>
            </a>
        :
        parse(titre)
    )
}
