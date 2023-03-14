import './Bouton.scss'

import parse from 'html-react-parser';

export default function Bouton({
    titre,
    lien
}) {
    return (
        titre[0] == '<' ?
            parse(titre) :
            <a className="Bouton" href={lien}>
                <div className="texte">
                    <h3 className="titre">{titre}</h3>
                </div>
            </a>
    )
}
