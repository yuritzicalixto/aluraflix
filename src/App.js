import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './pages/Header';
import Foter from './pages/Footer';
import Video from './pages/Video';
import Seccion from './pages/Seccion';

function App() {
  const [mostrarFormulario, actualizarMostrar]= useState(true)
  //Ternario --> condicion ? seMuestra : noSeMuestra
  //condicion && seMuestra 
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  return (
    <>
    <Header/>
    {/* {mostrarFormulario  ? <Video/> : <div></div>} */}
    {mostrarFormulario && <Video/> }
    <Seccion cambiarMostrar={cambiarMostrar}/>
    <Foter/>
    </>
  );
}

export default App;
