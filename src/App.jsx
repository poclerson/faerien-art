import './App.scss';
import Header from './composants/Entete';
import {Routes, Route, Navigate} from 'react-router-dom';
import Accueil from './composants/Accueil';
import Contact from './composants/Contact';
import Origine from './composants/Origine';

export default function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route exact path={'/*'} element={<Navigate to='/' />} />
            <Route path='/' element={<Accueil />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/origine' element={<Origine />} />
        </Routes>
    </div>
  );
}
