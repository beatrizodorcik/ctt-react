import React from 'react'
import {useDispatch} from 'react-redux'

const Valor = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <h3>Camisetas</h3>
      <img src="https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Camisetas" width= '300px'/>
      <p/>
      <button onClick={() => dispatch({type: 'ADICIONAR'})}>
        Adicionar
      </button>
      <button onClick={() => dispatch({type: 'REMOVER'})}>
        Remover
      </button>
    </div>
  )
}

export default Valor;