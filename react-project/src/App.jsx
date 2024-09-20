import './App.css'
import ItemListContainer from './componentes/ItemListContainer';
import NavBar from './componentes/navBar'

function App() {
    return (
        <>
            <NavBar />
            <ItemListContainer greeting='Bienvenido a mi e-commerce 💻'/>
        </>
    );
}

export default App