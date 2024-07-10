import "../assets/css/Video.css"
import CampoTexto from "../assets/components/CampoTexto"
import ListaOpciones from "../assets/components/ListaOpciones"
import Boton from "../assets/components/Boton"

const Video = () => {
    const ManejarEnvio=(e)=>{
        e.preventDefault()
        console.log("Maneja el envio", e)
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
                <CampoTexto titulo="Nombre" placeholder="Ingresa el titulo" required/>
                <ListaOpciones/>
                {/* <CampoTexto titulo="Categoría" placeholder="seleccione una categoría" required/> */}
                <CampoTexto titulo="Imagen" placeholder="ingrese un enlace de imagen" required/>
                <CampoTexto titulo="Video" placeholder="ingrese el enlace del video" required/>
                <CampoTexto titulo="Descripción" placeholder="¿De qué se trata este vídeo?" required/>
                <Boton>
                    Crear
                </Boton>
                </div>
            </form>
        </section>
    )
}

export default Video