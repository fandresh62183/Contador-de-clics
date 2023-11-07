import "./App.css";
import Boton from "./componentes/Boton.js";
import Contador from "./componentes/Contador";
import { useState } from "react"; /*uno de los hooks mas importante de react */

function App() {
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }; /*recuerda poner ; en las funciones flecha*/

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1 className="titulo-nombre">Fabián Henao</h1>
        <Contador numClics={numClics} />
        <Boton texto="Clic" esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
