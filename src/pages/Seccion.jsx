import { useState } from "react"
import "../assets/css/Seccion.css"
import video from "../assets/img/foto-video.png"

const Seccion = (props) => {
    // const [mostrar, actualizarMostrar] = useState(true)

    // const manejarClick = ()=>{
    //     console.log("Mostrar/Ocultar elemento");
    //     actualizarMostrar(!mostrar)
    // }


    return (
        <section className="seccion-video">
            <h3 className="title">Nuevo Video</h3>
            <img src={video} alt="Nuevo Video" onClick={props.cambiarMostrar}/>
        </section>
    )
}

export default Seccion