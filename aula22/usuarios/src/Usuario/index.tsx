import React, {useEffect} from 'react'
import {useDispatch, useSelector, useStore} from 'react-redux'
import axios from 'axios'

const Usuario = () => {
  
  const dispatch = useDispatch()

  const name = useSelector ((state: any) => state.name)
  const username = useSelector ((state: any) => state.username)
  const email = useSelector ((state: any) => state.email)

  const buscaUser = () => {
    axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(resp => dispatch({type: 'USER', payload: resp.data}))
  }

  return(
    <div>
      <h4>{name}</h4>
      <h5>{username}</h5>
      <h6>{email}</h6>

      <button onClick={buscaUser}>Ver usuário</button>
    </div>
  )
}

export default Usuario;