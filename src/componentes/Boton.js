import React from 'react';
import '../hojas-de-estilo/Boton.css'


function Boton( { texto, esBotonDeClic, manejarClic } ) {   /*esta forma de escribir el props, es referirse a la propiedad por su nombre, llamada desestructuración*/
  return (
    <button className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' } 
            onClick={manejarClic}>
            {texto}
    </button>
  );
}


export default Boton; /*con la export x defecto solo podemos exportar un elemento del archivo(Boton)*/

