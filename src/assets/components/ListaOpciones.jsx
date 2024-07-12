import "../css/ListaOpciones.css"

const ListaOpciones =(props)=> {
      const equipos=[
          "BACK END",
          "FRONT END",
          "INNOVACIÓN Y GESTIÓN"
      ]

      const manejarCambio=(e)=>{
        props.actualizarEquipo(e.target.value)
      }

    return (
        <div className="form-campos">
            <label>Categoría</label>
            <select value={props.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden>Seleccionar equipos</option>
                {equipos.map((equipo, index) =><option key={index} value={equipo}>{equipo}</option>)}
                {/* {props.equipos.map( (equipo, index) => <option key={index}>{equipo}</option>)} */}
            </select>
        </div>
    )
}

export default ListaOpciones