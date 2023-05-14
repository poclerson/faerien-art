import './App.scss';

import Entete from './composants/Entete';
import PiedPage from './composants/PiedPage';
import { Routes, Route } from 'react-router-dom';
import Accueil from './composants/Accueil';
import Origine from './composants/Origine';
import Projet from './composants/Projet';

import useObtenirMultiples from './hooks/useObtenir';
import DonneesSiteContexte from './Contexte';

export default function App() {
  const donnees = useObtenirMultiples([
    '/projets',
    '/blocs_origine',
    '/blocs_accueil',
    '/pages',
    '/sections'
  ])

  const urlBanniere = (pages, slug) => {
    return pages.filter(page => page.slug === slug)[0];
  }

  return (
    <div className="App">
      {donnees &&
        <DonneesSiteContexte.Provider value={donnees}>
          <Entete />
          {console.log(donnees.pages)}
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
              <Origine imgBanniere={urlBanniere(donnees.pages, 'origine').acf.banniere} titre={urlBanniere(donnees.pages, 'origine').title} />
            } />
          </Routes>
          <PiedPage />
        </DonneesSiteContexte.Provider>
      }
    </div>
  );
}
