import { useState, useEffect } from 'react'
import Header from './components/Header'
import imagenNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './components/Modal'

import { formatearFecha, generarId } from './components/helpers'
import ListadoGastos from './components/ListadoGastos'

function App() {

  const [presupuesto, setPresupuesto] = useState(localStorage.getItem('presupuesto') ?? 0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [modal,setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos,setGastos] = useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []
  );  
  const [gastoEditar,setGastoEditar] = useState({});

  useEffect(() => {
    if(Object.keys(gastoEditar).length > 0) {
      setModal(true)

      setTimeout(() => {
        setAnimarModal(true)
      }, 1000)
      
    }    
  }, [gastoEditar])

  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0);
  }, [presupuesto])

  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto') ?? 0);
    if(presupuesto > 0){
      setIsValidPresupuesto(true);
    }
  },[])

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? []);

  },[gastos])
  

  const handleNuevoGasto = () => {
    setModal(true)
    setGastoEditar({});

    setTimeout(() => {
      setAnimarModal(true)
    }, 1000)
  }

  const guardarGasto = gasto => {
    if(gasto.id){
      //Actualizar
      const gastosActualizado = gastos.map( gastoState => gastoState.id ===
      gasto.id ? gasto : gastoState)
      setGastos(gastosActualizado);
      setGastoEditar({})
    } else {
      //Nuevo
      gasto.id = generarId();
      gasto.fecha = new Date();
      setGastos([...gastos, gasto]);
    }
    setAnimarModal(false)
    setTimeout(() => {
      setModal(false);
    }, 500);
  }

  const eliminarGasto = id => {
    const gastosActualizados = gastos.filter(gasto => gasto.id !== id);
    setGastos(gastosActualizados);
  }
  
  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        
        gastos={gastos}
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
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
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
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}
        />
      )}
    </div>
  );
}

export default App
