import './Banniere.scss';

export default function Banniere({
    titre, 
    image = "/image.jpg",
    blocs = []
}) {
    return (
        <section className="Banniere" style={{backgroundImage: `url(${image})`}}>
            <article className="texte">
                {titre && <h1 className="titre">{titre}</h1>}
                {blocs.map(bloc => 
                    <p className="bloc">{bloc}</p>
                )}
            </article>
        </section>
    )
}
