import CerrarBtn from '../img/cerrar.svg';
import { useState } from 'react';
import Mensaje from './Mensaje';

const Modal = (props) => {

    const [nombre, setNombre] = useState('');
    const [cantidad,setCantidad] = useState('');
    const [categoria,setCategoria] = useState('');
    const [mensaje,setMensaje] = useState('');
    
    const ocultarModal = () => {
        props.setAnimarModal(false)
        setTimeout(() => {
            props.setModal(false)
        }, 400)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if([nombre,cantidad,categoria].includes('')){
            setMensaje('Todos los campos son obligatorios');
            setTimeout(() => {
                setMensaje('')
            },2000);              
            return;
        }
        props.guardarGasto({nombre, cantidad, categoria});
        ocultarModal(); 
    }

  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img 
                src={CerrarBtn}
                alt='cerrar-modal'
                onClick={ocultarModal}
            />
        </div>
        <form 
            onSubmit={handleSubmit}
            className={`formulario ${props.animarModal ? "animar" : "cerrar"}`}>
            <legend>Nuevo gasto</legend>
            {mensaje && <Mensaje tipo={'error'}>{mensaje}</Mensaje>}
            <div className='campo'>
                <label htmlFor='nombre'>Nombre gasto</label>
                <input
                    id="nombre"
                    type="text"
                    placeholder="Añade el nombre del gasto"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                >                
                </input>
            </div>
            <div className='campo'>
                <label htmlFor='cantidad'>Cantidad</label>
                <input
                    id="cantidad"
                    type="number"
                    placeholder="Añade la cantidad del gasto"
                    value={cantidad}
                    onChange={e => setCantidad(e.target.value)}
                >                
                </input>
            </div>
            <div className='campo'>
                <label htmlFor='categoria'>Categoria</label> 
                <select
                    id="categoria"
                    onChange={e => setCategoria(e.target.value)}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="ahorro">-- Ahorro --</option>
                    <option value="comida">-- Comida --</option>
                    <option value="casa">-- Casa --</option>
                    <option value="ocio">-- Ocio --</option>
                    <option value="salud">-- Salud --</option>
                    <option value="suscripciones">-- Suscripciones --</option>
                    <option value="otros">-- Otros --</option>
                </select>               
            </div>
            <input 
                type="submit"                
            ></input>
        </form>
    </div>
  )
}

export default Modal