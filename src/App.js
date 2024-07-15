import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './pages/Header';
import Foter from './pages/Footer';
import Video from './pages/Video';
import Seccion from './pages/Seccion';
import EquiposSec from './pages/EquiposSec';
import Equipo from './assets/components/Equipo';

function App() {
  const [mostrarFormulario, actualizarMostrar]= useState(true)
  const [colaboradores, actualizarColaboradores] = useState([])
  //Ternario --> condicion ? seMuestra : noSeMuestra
  //condicion && seMuestra 
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }
  //Registrar Colaborador
  const registrarColaborador = (colaborador)=>{
    console.log("Nuevo colaborador", colaborador);
    //Spread operador
    actualizarColaboradores([...colaboradores, colaborador])
  }
  //ListaOpciones
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
    <>
    <Header/>
    {/* {mostrarFormulario  ? <Video/> : <div></div>} */}
    {mostrarFormulario && <Video 
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}
        /> 
    }
    <Seccion cambiarMostrar={cambiarMostrar}/>
     <EquiposSec/> 
     {/* {
        equipos.map((equipo) => <Equipo 
          datos={equipo} key={equipo.titulo}
          colaboradores={colaboradores}
          />
        )
    }  */}
    <Foter/>
    </>
  );
}

export default App;
