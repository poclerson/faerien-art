import './App.scss';
import Header from './composants/Entete';
import {Routes, Route} from 'react-router-dom';
import Accueil from './composants/Accueil';
import Contact from './composants/Contact';
import Origine from './composants/Origine';
import Projet from './composants/Projet';

export default function App() {
    const donnees = [
        {
            id: "1",
            nom: "allo",
        },
        {
            id: "2",
            nom: "salut",
        },
        {
            id: "3",
            nom: "bonjour",
        },
    ]
    return (
        <div className="App">
            <Header />
            <Routes>
                {/* <Route exact path={'/*'} element={<Navigate to='/accueil' />} /> */}
                <Route path='/' element={<Accueil donnees={donnees} />}>
                </Route>
                <Route path=':donneeId' element={<Projet donnees={donnees} />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/origine' element={<Origine />} />
            </Routes>
        </div>
    );
}
