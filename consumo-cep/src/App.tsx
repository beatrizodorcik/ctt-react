import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { Dados } from './types/cep';

function App() {
  const [cep, setCep] = useState<String>("")
  const [dados, setDados] = useState<Dados>()

  const getDados =() => {
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then(resp => setDados(resp.data))
  }

  return (
    <div className="App">
      <input type="text" onChange={(event)=> setCep(event.target.value)} />
      <button onClick={getDados}>Ver Endereço</button>

      <h1>Informações</h1>
      {
        <>
          <p>{dados?.localidade}</p>
          <p>{dados?.bairro}</p>
          <p>{dados?.logradouro}</p>
          <p>{dados?.uf}</p>
        </>
      }

    </div>
  );
}

export default App;
