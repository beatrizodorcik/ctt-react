import React, { useState } from "react";

function MostreGif() {
  const [mostrarMensagem, adcMensagem] = useState(false)

  const mostrar = () => {
    adcMensagem(true)
  }
  const escondeGif = () => {
    adcMensagem(false);
  };

  return (
    <>
      <button onClick={mostrar}>Clique aqui!</button>
      {mostrarMensagem && <img
          src="https://cdn.dicionariopopular.com/imagens/nazareconfusamatematica.gif"
          alt="Gif Nazare" onClick={escondeGif}/>   
      }
    </>
  )
}

export default MostreGif;


