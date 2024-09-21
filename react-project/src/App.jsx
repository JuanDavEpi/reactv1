import './App.css'
import ItemListContainer from './componentes/ItemListContainer';
import NavBar from './componentes/navBar'
import ItemList from './componentes/ItemList'

function App() {
    return (
        <>
            <NavBar />
            <ItemListContainer greeting='Bienvenido a mi e-commerce 💻'/>
            <ItemList />
        </>
    );
}

export default App