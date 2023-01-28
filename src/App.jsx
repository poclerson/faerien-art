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
        '/blocs_accueil',
        '/pages'
    ])

    const urlBanniere = (pages, slug) => {
        return pages.filter(page => page.slug == slug)[0].acf.banniere;
    }
    
    return (
        <div className="App">
            {donnees &&
                <DonneesSiteContexte.Provider value={donnees}>   
                    <Entete />
                    <Routes>
                        {/* <Route exact path={'/*'} element={<Navigate to='/accueil' />} /> */}
                        <Route path='/' element={
                            <Accueil 
                                donnees={donnees}  
                                imgBanniere={urlBanniere(donnees.pages, 'accueil')} 
                            />
                        }>
                        </Route>
                        <Route path=':donneeId' element={<Projet donnees={donnees} />} />
                        <Route path='/origine' element={
                            <Origine imgBanniere={urlBanniere(donnees.pages, 'origine')}  />
                        } />
                    </Routes>
                    <PiedPage />
                </DonneesSiteContexte.Provider>
            }
        </div>
    );
}
