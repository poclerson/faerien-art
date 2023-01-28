import './Origine.scss';

import Banniere from './Banniere';
import DonneesSiteContexte from '../Contexte';

import {useContext} from 'react'

export default function Origine({imgBanniere}) {
    const {blocs_origine} = useContext(DonneesSiteContexte);

    return (
        <section className="Origine">
            <Banniere 
                titre="Contact" 
                sousTitre="Origine"
                image={imgBanniere}
                blocs={blocs_origine.map(bloc => bloc.acf)}
            />
        </section>
    )
}
