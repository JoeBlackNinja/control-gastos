import Gasto from "./Gasto"

const ListadoGastos = (props) => {
  return (
    <div className="listado-gastos contenedor">
        {
          props.filtro ? (
            <>
            <h2>{props.gastosFiltrados.length ? `Gastos`: 'No hay gastos en esta categoria'}</h2>
            {props.gastosFiltrados.map(gasto => (
              <Gasto 
                key={gasto.id}
                gasto={gasto}
                setGastoEditar={props.setGastoEditar}
                eliminarGasto={props.eliminarGasto}
              />
            ))}
            </>
          ) : (
            <>
            <h2>{props.gastos.length ? 'Gastos generales': 'No hay gastos'}</h2>
            {props.gastos.map(gasto => (
              <Gasto 
                key={gasto.id}
                gasto={gasto}
                setGastoEditar={props.setGastoEditar}
                eliminarGasto={props.eliminarGasto}
              />
            ))}
            </>
          )
        }
    </div>
  )
}

export default ListadoGastos