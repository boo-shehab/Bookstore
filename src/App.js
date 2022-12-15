import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './redux/configureStore';
import NavBar from './components/NavBar';
import Cateories from './components/Categories';
import Books from './components/Books';

function App() {
  return (
    <Provider store={Store}>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/Categories" element={<Cateories />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
