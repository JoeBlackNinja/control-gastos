import { useEffect, useState } from "react";
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ControlPresupuesto = (props) => {
    const [disponible,setDisponible] = useState(0);
    const [gastado,setGastado] = useState(0);
    const [porcentaje,setPorcentaje] = useState(0);
    
    useEffect(() => {
        const totalGastado = props.gastos.reduce((total, gasto) => parseInt(gasto.cantidad)  + parseInt(total), 0)
        const totalDisponible = props.presupuesto - totalGastado;
        const porcentaje = ((props.presupuesto - totalGastado)/props.presupuesto) * 100;
        const porcentajeToFixed = porcentaje.toFixed(2);

        setDisponible(totalDisponible)
        setGastado(totalGastado)
        setTimeout(() => {
            setPorcentaje(porcentajeToFixed);
        }, 1500)
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
            <CircularProgressbar
                styles={buildStyles({
                    pathColor: '#FF5733',
                    trailColor: '#D2DEFF'
                })}
                value={porcentaje}
                text={`${porcentaje}% Disponible`}
            />
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