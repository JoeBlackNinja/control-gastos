import {useState, useEffect} from 'react'

const Filtros = (props) => {
  return (
    <div className='filtros sombra contenedor'>
        <form>
            <div className='campo'>
                <label>Filtrar gastos</label>
                <select
                  value={props.filtro}
                  onChange={e => props.setFiltro(e.target.value)}
                >
                    <option value="">-- Todas las categorias --</option>
                    <option value="ahorro">-- Ahorro --</option>
                    <option value="comida">-- Comida --</option>
                    <option value="casa">-- Casa --</option>
                    <option value="ocio">-- Ocio --</option>
                    <option value="salud">-- Salud --</option>
                    <option value="suscripciones">-- Suscripciones --</option>
                    <option value="otros">-- Otros --</option>
                </select>
            </div>
        </form>
    </div>
  )
}

export default Filtros