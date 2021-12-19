import logo from '../img/Logo.jpg';


function Navbar () {
return(
<nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
  <img src={logo} alt="logo"/>
    <a href="../App" className="navbar-brand">Inicio</a>
    <a href="/ListaDeProductos" className="navbar-brand">Productos</a>
    <a href="./Contacto" className="navbar-brand">Contacto</a>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>

);
}

export default Navbar;