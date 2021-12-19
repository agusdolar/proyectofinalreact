import './App.css';
import Navbar from './components/Navbar';
import Productosdestacados from './components/Productosdestacados';


function App() {
  return (
    <>
    <Navbar></Navbar>
    <hr />
    <h2>Producto destacado</h2>
    <hr />
    <div className="DivProdDest">
    <Productosdestacados nombre="Lionel Messi" autor="Goy Dolar" />
    </div>
    </>
  );
}

export default App;
