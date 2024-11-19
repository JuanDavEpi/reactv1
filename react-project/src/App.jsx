import './App.css';
import NavBar from './componentes/navBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import Contact from './componentes/Contact';
import { CartProvider } from './context/CartContext';
import Cart from './componentes/Cart';

function App() {

  return (
    <div> 
      <CartProvider>
    <Router>

      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenido a mi e-commerce 🛒" />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/productos/:categoria" element={<ItemListContainer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      
    </Router>
    </CartProvider>
    </div>
  );
}

export default App;
