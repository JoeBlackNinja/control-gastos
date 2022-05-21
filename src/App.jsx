import { useState, useEffect } from 'react'
import Header from './components/Header'
import imagenNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './components/Modal'

import { formatearFecha, generarId } from './components/helpers'
import ListadoGastos from './components/ListadoGastos'

function App() {

  const [presupuesto, setPresupuesto] = useState('');
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [modal,setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos,setGastos] = useState([]);  

  const handleNuevoGasto = () => {
    setModal(true)

    setTimeout(() => {
      setAnimarModal(true)
    }, 1000)
  }

  const guardarGasto = gasto => {
    gasto.id = generarId();
    gasto.fecha = new Date();
    setGastos([...gastos, gasto]);
  }
  
  return (
    <div className={modal && 'fijar'}>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
      {isValidPresupuesto && (
        <>
          <main>
            <ListadoGastos
              gastos={gastos}
            />
          </main>
          <div className="nuevo-gasto">
            <img
              src={imagenNuevoGasto}
              alt="imagenNuevoGasto"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
        />
      )}
    </div>
  );
}

export default App
