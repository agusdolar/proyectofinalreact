import './App.css';
import Navbar from './components/Navbar';
import CustomFetch from './components/CustomFetch';
import { useEffect, useState } from 'react';
import { Productos } from './components/Productos';
import ItemCount from './components/ItemCount';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



function App() {

  const [datos, setDatos] = useState([]);
  //al linkear los productos pasar esto a link Listadeproductos//
  // custom fetch para que se vea la info de la api//
  useEffect(() => {
    CustomFetch()
      .then(result => setDatos(result)) //ahora los videos los tendre en datos//
      .catch(err => console.log(err))
  }, []);


  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <hr />
        <h2>Nuestros Productos:</h2>
        <hr />
        <Routes>
          <Route path='/ListaDeProductos' element={
        <ol>
          {

            datos.map((Productos) => <div> <h3>Obra: {Productos.name}</h3> <img src={Productos.image[0]} /> <h5>Autor: {Productos.autor}</h5> <ItemCount max={6} initial={1} /> </div>)
          }
        </ol> }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
