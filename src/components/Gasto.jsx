
const Gasto = (props) => {
  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <div className="descripcion-gasto"> 
          <p className="categoria">{props.gasto.fecha}</p>
          <p className="categoria">{props.gasto.categoria}</p>
          <p className="nombre-gasto">{props.gasto.nombre}</p>
        </div>
      </div>        
    </div>
  )
}

export default Gasto;