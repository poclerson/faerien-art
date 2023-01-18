import './Origine.scss';

import Banniere from './Banniere';
import DonneesSiteContexte from '../Contexte';

import {useContext} from 'react'

export default function Origine({imgBanniere}) {
    const {blocs_origine} = useContext(DonneesSiteContexte);

    return (
        <section className="Origine">
            <Banniere 
                titre="Origine" 
                image={imgBanniere}
                blocs={blocs_origine.map(bloc => bloc.acf.texte)}
            />
        </section>
    )
}
