import './Origine.scss';

import Banniere from './Banniere';
import DonneesSiteContexte from '../Contexte';

import { useContext } from 'react'

export default function Origine({ imgBanniere, titre }) {
  const { blocs_origine } = useContext(DonneesSiteContexte);
  return (
    <section className="Origine">
      {console.log(titre)}
      {blocs_origine && <Banniere
        titre={titre}
        image={imgBanniere}
        blocs={blocs_origine.map(bloc => bloc.acf)}
      />}
    </section>
  )
}
