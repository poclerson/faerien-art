import './Banniere.scss';

export default function Banniere({
    titre, 
    sousTitre,
    image = "/image.jpg",
    blocs = []
}) {
    return (
        <section className="Banniere" style={{backgroundImage: `url(${image})`}}>
            <article className="texte">
                {titre && <h1 className="titre">{titre}</h1>}
                {sousTitre && <h3 className="sous-titre">{sousTitre}</h3>}
                {blocs.map(bloc => 
                    <p className="bloc">{bloc}</p>
                )}
            </article>
        </section>
    )
}
