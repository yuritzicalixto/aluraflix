import "../assets/css/EquipoSec.css"
import Equipo from "../assets/components/Equipo"

const EquiposSec = () => {
    //Lista Opciones
    const equipos=[
        {
            titulo:"BACK END",
            colorPrimary:"#00C86F"
        },
        {
            titulo:"FRONT END",
            colorPrimary:"#6BD1FF"
        },
        {
            titulo:"INNOVACIÓN Y GESTIÓN",
            colorPrimary:"#FFBA05"
        }
    ]
    
    return (
         <section className="main">
            {
                equipos.map((equipo) => <Equipo 
                    datos={equipo} key={equipo.titulo}
                    
                    />
                )
            }
         </section>
    )
}

export default EquiposSec