import React, { useRef, useState } from 'react';
import axios from 'axios'

function App() {

  let inputName = useRef<HTMLInputElement>(null)
  let inputAge = useRef<HTMLInputElement>(null)
  let inputCompany = useRef<HTMLInputElement>(null)
  let inputPhone = useRef<HTMLInputElement>(null)

  const [cadastrou, setCadastrou] = useState<String>('')

  const formularioEnviar = () => {
    const name = inputName.current?.value
    const age = inputAge.current?.value
    const company = inputCompany.current?.value
    const phone = inputPhone.current?.value

    axios.post('http://localhost:4000/usuarios', {
      name: name,
      age: age,
      company: company,
      phone: phone
    })
    .then(resp => {
      if(resp.status === 201){
        setCadastrou("Dados enviados com sucesso!")
      }
    })
  }

  return (
   <div className="App">
     <input ref={inputName} placeholder="Digite seu nome" type='text'/>
     <input ref={inputAge} placeholder="Digite sua idade" type='text'/>
     <input ref={inputCompany} placeholder="Digite o nome da empresa em que trabalha" type='text'/>
     <input ref={inputPhone} placeholder="Digite seu telefone" type='text'/>
     <button onClick={formularioEnviar}>Enviar</button>

     <p>{cadastrou}</p>
   </div>
  );
}

export default App;
