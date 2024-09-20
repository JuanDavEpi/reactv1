import CartWidget from './CartWidget';
import './componentes.css'
export default function NavBar() {
    return <>
    <nav>
        <img src='./Twitter-X-White-Logo-PNG.png' />
        <a>Home</a>
        <a>Products</a>
        <a>Discounts</a>
        <CartWidget />
    </nav>
    </>;
}