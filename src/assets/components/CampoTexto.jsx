import "../css/CampoTexto.css"

const CampoTexto =(props)=> {
    const placeholderModificado=`${props.placeholder}...`;
    return (
        <section className="formularios">
            <div className="form-campos">
            <label>{props.titulo}</label>
            <input placeholder={placeholderModificado} required={props.required}/>
            </div>
        </section>
    )
}

export default CampoTexto