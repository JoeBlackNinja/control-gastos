import Gasto from "./Gasto"

const ListadoGastos = (props) => {
  return (
    <div className="listado-gastos contenedor">
        <h2>{props.gastos.length ? 'Gastos': 'No hay gastos'}</h2>
        {props.gastos.map(gasto => (
            <Gasto/>
        ))}
    </div>
  )
}

export default ListadoGastos