import './Bouton.scss'

export default function Bouton({
    titre,
    sousTitre,
    lien
}) {
    return (
        <a className="Bouton" href={lien}>
            <div className="texte">
                <h3 className="titre">{titre}</h3>
                {sousTitre && <h5 className="sous-titre">{sousTitre}</h5>}
            </div>
        </a>
    )
}
