import "../css/Colaborador.css"
import x from "../img/marca-x-octagono.png"

const Colaborador =(props)=> {
  const {nombre, categoria, imagen, video, descripcion} = props.datos
    return <section>
        <div className="product-card">
            <img src={imagen} alt={nombre}/>
            <div className="product-info">
              <div className="info-card">
                <p>{nombre}</p>
                <p>{descripcion}</p>
              </div>
              <figure className="icon-eliminar">
                <img src={x} alt="imagen"/>
              </figure>
            </div>
          </div>
    </section>
}

export default Colaborador