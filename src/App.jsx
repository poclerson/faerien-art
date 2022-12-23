import './App.scss';
import Header from './composants/Entete';
import {Routes, Route} from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path='/' />
            <Route path='/origine' />
            <Route path='/contact' />
        </Routes>
    </div>
  );
}
