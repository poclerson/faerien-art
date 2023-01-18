import './App.scss';

import Entete from './composants/Entete';
import PiedPage from './composants/PiedPage';
import {Routes, Route} from 'react-router-dom';
import Accueil from './composants/Accueil';
import Contact from './composants/Contact';
import Origine from './composants/Origine';
import Projet from './composants/Projet';

import useObtenirMultiples from './hooks/useObtenir';
import DonneesSiteContexte from './Contexte';

export default function App() {
    const donnees = useObtenirMultiples([
        '/projets',
        '/blocs_origine',
        '/blocs_accueil'
    ])
    return (
        <div className="App">
            {donnees &&
                <DonneesSiteContexte.Provider value={donnees}>   
                    <Entete />
                    <Routes>
                        {/* <Route exact path={'/*'} element={<Navigate to='/accueil' />} /> */}
                        <Route path='/' element={<Accueil donnees={donnees} />}>
                        </Route>
                        <Route path=':donneeId' element={<Projet donnees={donnees} />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/origine' element={<Origine />} />
                    </Routes>
                    <PiedPage />
                </DonneesSiteContexte.Provider>
            }
        </div>
    );
}
