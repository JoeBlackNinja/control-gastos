
export default function Mensaje(props) {
  return (
    <div className={`alerta ${props.tipo}`}>
        {props.children}
    </div>
  )
}
