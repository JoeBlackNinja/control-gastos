import { useEffect, useState } from "react";

const ControlPresupuesto = (props) => {
    const [disponible,setDisponible] = useState(0);
    const [gastado,setGastado] = useState(0);
    
    useEffect(() => {
        const totalGastado = props.gastos.reduce((total, gasto) => parseInt(gasto.cantidad)  + parseInt(total), 0)
        const totalDisponible = props.presupuesto - totalGastado;
        setDisponible(totalDisponible)
        setGastado(totalGastado)
    }, [props.gastos])  

    const formatoCantidad = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
                        style : 'currency',
                        currency : 'MXN' 
                })
    }    
  
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
            <p>Gráfica aquí</p>
        </div>
        <div className="contenido-presupuesto">
            <p>
                <span>Presupuesto: </span> {formatoCantidad(props.presupuesto)}
            </p>
            <p>
                <span>Disponible: </span> {formatoCantidad(disponible)}
            </p>
            <p>
                <span>Gastado: </span> {formatoCantidad(gastado)}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto;