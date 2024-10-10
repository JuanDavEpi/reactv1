import './App.css';
import NavBar from './componentes/navBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting='Bienvenido a mi e-commerce 🛒' />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/productos/:categoria" element={<ItemListContainer />} />
      </Routes>

    </Router>
  );
}

export default App;
