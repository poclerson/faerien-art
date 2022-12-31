import './Projet.scss';

import Banniere from './Banniere';

import {useParams} from 'react-router-dom';

export default function Projet({donnees}) {
    const {donneeId} = useParams();

    const donnee = donnees.filter(donnee => donnee.id == donneeId);
    return (
        <li className="Projet">
            <Banniere titre={donnee[0].nom} />
            <div className="contenu">
                <img src="projet.webp" alt=""/>
            </div>
        </li>
    )
}
