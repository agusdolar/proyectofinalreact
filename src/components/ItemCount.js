import {useState} from "react";

const ItemCount = (props) => {


    const [cantidad, setCantidad] = useState(1);
    const increment = () => {
       if (cantidad < props.max) setCantidad(cantidad+1);
    }
    const decrement = () => {
        if (cantidad > 1) setCantidad(cantidad-1);
    }

    const carrito = () => {
        console.log("Se agrego al carrito", cantidad ,"de productos")
    }

    return (
        <div>
            <button onClick={decrement}>-</button>
            {cantidad}
            <button onClick={increment}>+</button>
            <button onClick={carrito}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;