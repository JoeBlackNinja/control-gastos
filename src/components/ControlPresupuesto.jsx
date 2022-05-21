
const ControlPresupuesto = (props) => {
      let currency = props.presupuesto.toLocaleString('en-US', {
          style : 'currency',
          currency : 'MXN' 
      })  
  
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
            <p>Gráfica aquí</p>
        </div>
        <div className="contenido-presupuesto">
            <p>
                <span>Presupuesto: </span> {currency}
            </p>
            <p>
                <span>Disponible: </span> {currency}
            </p>
            <p>
                <span>Gastado: </span> {currency}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto;