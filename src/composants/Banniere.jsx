import './Banniere.scss';
import parse from 'html-react-parser';
import {useEffect} from 'react';

export default function Banniere({
    titre, 
    sousTitre,
    image = "/image.jpg",
    blocs = [],
    titrePremier = true,
    blocs2
}) {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <section className="Banniere" style={{backgroundImage: `url(${image})`}}>
            {/* {console.log(blocs)} */}
            <article className="texte">
                <h1 className="titre">{titre}</h1>
                <h3 className="sous-titre">{sousTitre}</h3>
                {blocs.map((bloc, index) => console.log(bloc)
                    // <div className="bloc" key={bloc.texte + index}>
                    //     <h5 className="titre-bloc">{bloc && bloc.titre || ''}</h5>
                    //     <p className="texte">{typeof bloc == "string" ? bloc : bloc && bloc.texte}</p>
                    // </div>
                )}
                {/* {titre && !titrePremier && <h1 className="titre">{titre}</h1>}
                {sousTitre && !titrePremier && <h3 className="sous-titre">{sousTitre}</h3>}
                {blocs2 && blocs2.map((bloc, index) => 
                    <div className="bloc" key={bloc.texte + index}>
                        <h5 className="titre-bloc">{parse(bloc && bloc.titre || '')}</h5>
                        <p className="texte">{typeof bloc == "string" ? bloc : parse(bloc && bloc.texte)}</p>
                    </div>
                )} */}
            </article>
        </section>
    )
}
