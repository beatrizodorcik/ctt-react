import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch} from 'react-redux'

const Todo = () => {
  
  const dispatch = useDispatch()

  const title = useSelector ((state: any) => state.title)
  const id = useSelector ((state: any)=> state.id)

  useEffect (() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(resp => dispatch({type: 'TODO', payload: resp.data}))
  })

  return (
    <div>

    </div>
  )
}

export default Todo;