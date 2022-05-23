import Gasto from "./Gasto"

const ListadoGastos = (props) => {
  return (
    <div className="listado-gastos contenedor">
        <h2>{props.gastos.length ? 'Gastos': 'No hay gastos'}</h2>
        
        {props.gastos.map(gasto => (
            <Gasto 
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={props.setGastoEditar}
              eliminarGasto={props.eliminarGasto}
            />
        ))}
    </div>
  )
}

export default ListadoGastos