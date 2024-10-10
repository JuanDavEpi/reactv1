import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import './componentes.css';

export default function NavBar() {
  return (
    <>
      <nav>
        <img src='./Twitter-X-White-Logo-PNG.png' alt="Logo" />
        <Link to="/">Home</Link>
        <Link to="/productos/components">Components</Link>
        <Link to="/productos/peripherals">Peripherals</Link>
        <Link to="/productos/devices">Devices</Link>
        <CartWidget />
      </nav>
    </>
  );
}
