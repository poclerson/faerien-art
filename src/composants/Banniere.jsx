import './Banniere.scss';
import parse from 'html-react-parser';
import {useEffect} from 'react';

export default function Banniere({
    titre, 
    sousTitre,
    image = "/image.jpg",
    blocs = []
}) {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <section className="Banniere" style={{backgroundImage: `url(${image})`}}>
            <article className="texte">
                {titre && <h1 className="titre">{titre}</h1>}
                {sousTitre && <h3 className="sous-titre">{sousTitre}</h3>}
                {blocs.map((bloc, index) => 
                    <div className="bloc" key={bloc.texte + index}>
                        <h5 className="titre-bloc">{parse(bloc.titre || '')}</h5>
                        <p className="texte">{typeof bloc == "string" ? bloc : bloc.texte}</p>
                    </div>
                )}
            </article>
        </section>
    )
}
