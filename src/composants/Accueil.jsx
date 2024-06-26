import './Accueil.scss';

import Banniere from './Banniere';
import { Outlet, Link } from 'react-router-dom';
import DonneesSiteContexte from '../Contexte';
import { useContext } from 'react';
import parse from 'html-react-parser'

export default function Accueil({ imgBanniere }) {
  const { projets, blocs_accueil, pages } = useContext(DonneesSiteContexte);
  const page = pages.filter(page => page.slug === 'accueil')[0]
  const { title, content } = page

  return (
    projets &&
    <section className="Accueil">
      <Banniere
        titre={title}
        blocs={blocs_accueil.map(bloc => bloc.acf && bloc.acf).filter(bloc => bloc)}
        image={imgBanniere}
      />
      <div className="contenu">
        {content && parse(content)}
        <ul className="liste-projets">
          {projets.map(projet =>
            <li className="miniature-projet" key={projet.id}>
              <Link
                key={projet.id}
                to={projet.acf.titre + ""}
              >
                <div
                  className="image-titre-projet"
                  style={{
                    backgroundImage: `url(${projet.acf.image_de_presentation})`
                  }}
                >
                  <h1 className="titre">{projet.acf.titre}</h1>
                </div>
                <h4>{projet.acf.sous_titre}</h4>
              </Link>
            </li>
          )}

        </ul>
      </div>
      <Outlet context={projets} />

    </section>
  )
}
