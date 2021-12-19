import foto from '../img/LionelMessi.jpeg';
import ItemCount from './ItemCount';



function Productosdestacados (props) {
    return (
        <>
        <div>
        <h3>{props.nombre}</h3>
        <img src={foto} alt="Lio Messi"/>
        <h5>Autor: {props.autor}</h5>
        </div>
        <ItemCount max={6} initial={1}/>
        </>
    );
}

export default Productosdestacados;