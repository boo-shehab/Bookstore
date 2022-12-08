import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Cateories from './components/Categories';
import Books from './components/Books';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/Categories" element={<Cateories />} />
      </Routes>
    </>
  );
}

export default App;
