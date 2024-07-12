import { useState } from "react";
import "../css/CampoTexto.css"

const CampoTexto =(props)=> {
    // const [valor, actualizarValor] = useState("")
    const placeholderModificado=`${props.placeholder}...`;

    const manejarCambio =(e)=>{
        props.actualizarValor(e.target.value)
    }
    return (
        <section className="formularios">
            <div className="form-campos">
            <label>{props.titulo}</label>
            <input 
            placeholder={placeholderModificado} 
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}/>
            </div>
        </section>
    )
}

export default CampoTexto