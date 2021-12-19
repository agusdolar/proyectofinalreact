import  { Productos } from './Productos';

function ListaDeProductos () {
    return (
        <>
        {
            Productos.map(productos => (
                <Productos 
                key={productos.id}
                nombre={productos.name}
                img={productos.image}
                autor={productos.autor} />
            ))
        }
        </>
    );
}

export default ListaDeProductos;