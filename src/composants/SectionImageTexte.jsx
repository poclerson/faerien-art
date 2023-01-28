import './SectionImageTexte.scss'

export default function SectionImageTexte(
    {image,
    sousTitre,
    texte}
) {
    return (
        <section className="SectionImageTexte rangee" style={{backgroundImage: `url(${image})`}}>
            <div className="informations">
                <h4 className="sous-titre">{sousTitre}</h4>
                <p className="texte">{texte}</p>
            </div>
        </section>
    )
}
