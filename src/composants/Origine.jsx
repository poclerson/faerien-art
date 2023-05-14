import './Origine.scss';

import Banniere from './Banniere';
import DonneesSiteContexte from '../Contexte';

import { useContext } from 'react'

export default function Origine({ imgBanniere }) {
  const { blocs_origine, pages } = useContext(DonneesSiteContexte);
  const page = pages.filter(page => page.slug === 'origine')[0]
  return (
    <section className="Origine">
      {blocs_origine && pages && <Banniere
        titre={page.title}
        image={imgBanniere}
        blocs={blocs_origine.map(bloc => bloc.acf)}
      />}
    </section>
  )
}
