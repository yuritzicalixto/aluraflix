import { useState } from "react"
import "../assets/css/Video.css"
import CampoTexto from "../assets/components/CampoTexto"
import ListaOpciones from "../assets/components/ListaOpciones"
import Boton from "../assets/components/Boton"

const Video = () => {
    const [nombre,actualizarNombre]=useState("")
    const [imagen,actualizarImagen]=useState("")
    const [video,actualizarVideo]=useState("")
    const [descripcion,actualizarDescripcion]=useState("")
    const [equipo, actualizarEquipo]=useState("")

    const ManejarEnvio=(e)=>{
        e.preventDefault()
        console.log("Maneja el envio")
        let datosAEnviar={
            nombre:nombre,
            equipo:equipo,
            imagen:imagen,
            video:video,
            descripcion:descripcion
        }
        console.log(datosAEnviar);
    }
    return (
        <section className=" form form-main">
            <form onSubmit={ManejarEnvio} className="form-container">
                <div className="form-container-title">
                    <h1>NUEVO VIDEO</h1>
                    <p>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</p>
                </div>
                <div className="form-container-head">
                    <h2>Crear Tarjeta</h2>
                </div>
                <div className="formulario">
                <CampoTexto titulo="Nombre" 
                    placeholder="Ingresa el titulo" 
                    required
                    valor={nombre}
                    actualizarValor={actualizarNombre}/>
                <ListaOpciones
                    valor={equipo}
                    actualizarEquipo={actualizarEquipo}/>
                <CampoTexto 
                    titulo="Imagen" 
                    placeholder="ingrese un enlace de imagen" 
                    required
                    valor={imagen}
                    actualizarValor={actualizarImagen}/>
                <CampoTexto 
                    titulo="Video" 
                    placeholder="ingrese el enlace del video" 
                    required
                    valor={video}
                    actualizarValor={actualizarVideo}/>
                <CampoTexto 
                    titulo="Descripción" 
                    placeholder="¿De qué se trata este vídeo?" 
                    required
                    valor={descripcion}
                    actualizarValor={actualizarDescripcion}/>
                <Boton>
                    Crear
                </Boton>
                </div>
            </form>
        </section>
    )
}

export default Video