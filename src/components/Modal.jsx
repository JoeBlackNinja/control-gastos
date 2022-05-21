import CerrarBtn from '../img/cerrar.svg'

const Modal = (props) => {
    
    const ocultarModal = () => {
        props.setAnimarModal(false)

        setTimeout(() => {
            props.setModal(false)
        }, 400)
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
        <form className={`formulario ${props.animarModal ? "animar" : "cerrar"}`}>
            <legend>Nuevo gasto</legend>
        </form>
    </div>
  )
}

export default Modal