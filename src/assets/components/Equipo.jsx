import "../css/Equipo.css"
import Colaborador from "../components/Colaborador"

const Equipo = (props) => {
    const {colorPrimary, titulo}=props.datos
    const {colaboradores} = props
    const obj={
        backgroundColor: colorPrimary
    }
    return <> 
        { 
            colaboradores.length > 0 && 
                <section className="categoria-main">
                    <section className="equipo">
                        <div className="title-categoria" style={ obj }>
                        <h3>{titulo}</h3>
                        </div>
                        <div className="colaboradores">
                            {
                                colaboradores.map((colaborador, index) => <Colaborador datos={colaborador} key={index}/>)
                            }
                        </div>
                    </section>
                </section>
        } 
    </>
}

export default Equipo