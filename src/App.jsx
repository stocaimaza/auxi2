import './App.css';
import TecnicaUno from './componentes/TecnicaUno/TecnicaUno';
import TecnicaDos from './componentes/TecnicaDos/TecnicaDos';
import TecnicaTres from './componentes/TecnicaTres/TecnicaTres';
import EstilosCondicional from './componentes/EstilosCondicional/EstilosCondicional';

function App() {
  return (
    <>
      <h1>Renderizado Condicional</h1>
      <TecnicaUno nombre={"Firulais"} />
      <TecnicaDos booleano={false} />
      <TecnicaTres booleano={true} />
      <EstilosCondicional booleano={true} clase = {"nuevaClase"} />
      {
        //también puedo enviar una clase por props. 
      }
    </>

  );
}

export default App;


//Técnicas de Renderizado:

//1) Renderizado condicional: mostramos componentes en función de una condición o estado determinado en tiempo de ejecución. 

//Por ejemplo: mostrar un botón solo si el usuario esta logueado. 

