import "../assets/css/Seccion.css"
import video from "../assets/img/claqueta.png"

const Seccion = () => {
    return (
        <section className="seccion-video">
            <h3 className="title">Nuevo Video</h3>
            <img src={video} alt="Nuevo Video"/>
        </section>
    )
}

export default Seccion