import logo from '../components/Logo.jpg';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function Navbar () {
return(
<nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
  <img src={logo} alt="logo"/>
  <ul>
<li> <Link to='../App'> Home </Link> </li>
<li> <Link to='/ListaDeProductos'> Lista de Productos </Link> </li>
<li> <Link to='/Nosotros'> Nosotros </Link> </li>
</ul>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>

);
}

export default Navbar;