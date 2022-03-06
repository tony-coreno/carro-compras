import { Component } from "react";
import Button from "./Button";

const styles = {
    producto: {
        border: 'solid 1px #eee',
        boxShadow: '0 5px 5px rgb(0,0,0,0.1)',
        width: '25%',
        padding: '10px 30px',
        borderRadius: '5px'
    },
    img: {
        width: '100%'
    }
}


class Producto extends Component{
    render(){

        const {producto, agregarAlCarro} = this.props;

        return(
            
            <div style={styles.producto}> 
                <img style={styles.img} alt={producto.name} src={producto.img} />
                <p>{producto.name}</p>
                <p>{producto.price}</p>
                <Button onClick= {() => agregarAlCarro(producto)} >Agregar al carro</Button>
            </div>
        )
    }
}

export default Producto;