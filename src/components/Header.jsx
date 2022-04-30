import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'

const Header = ({
  presupuesto, 
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto
}) => {
  return (
      <header>
          <h1>Planificador de gastos</h1>

          {isValidPresupuesto ? 
            <h1>Control presupuesto</h1>
          : 
          <NuevoPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
          /> 
          }
      </header>    
  )
}

export default Header