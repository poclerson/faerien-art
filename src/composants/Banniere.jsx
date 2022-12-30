import './Banniere.scss';

export default function Banniere({
    titre, 
    blocs = []
}) {
    return (
        <section className="Banniere" style={{backgroundImage: "url(/image.jpg)"}}>
            <article className="texte">
                {titre && <h1 className="titre">{titre}</h1>}
                {blocs.map(bloc => 
                    <p className="bloc">{bloc}</p>
                )}
            </article>
        </section>
    )
}
