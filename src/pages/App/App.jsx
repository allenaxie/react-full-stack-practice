import './App.css';
import {Routes, Route} from 'react-router-dom';
import NewEntryPage from '../NewEntryPage/NewEntryPage';
import {Navbar} from '../../components';

export default function App() {
  return (
    <main className="App">
      <Navbar/> <br/>
      App
      <Routes>
        <Route path="/entry/new" element={<NewEntryPage/>}/>
      </Routes>
    </main>
  );
}