import "../assets/css/Equipo.css"
import Colaborador from "../assets/components/Colaborador"

const Equipo = (props) => {
    const {colorPrimary, titulo}=props.datos

    const obj={
        backgroundColor: colorPrimary
    }
    return (
        <section className="categoria-main">
            <section className="equipo">
                <div className="title-categoria" style={ obj }>
                <h3>{titulo}</h3>
                </div>
                <div className="colaboradores">
                    <Colaborador/>
                    <Colaborador/>
                    <Colaborador/> 
                </div>
            </section>
        </section>
    )
}

export default Equipo