import {createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {combineReducers} from 'redux'
import { act } from 'react-dom/test-utils'

const initialStateUsuario = {
  usuarios: []
}

function reducerUsuario(state = initialStateUsuario, action: any) {
  switch(action.type) {
    case 'USER':
      return{
        usuarios: action.payload,
      }
      default:
        return state
  }
}

const initialStateTodo = {
  todo: {}
}

function reducerTodo(state= initialStateTodo, action: any ) {
  switch(action.type) {
    case 'TODO':
      return {
        id: action.payload.id,
        title: action.payload.title
      }
      default:
        return state
  }
}

const createRootreducer = () => combineReducers({
  usuarios: reducerUsuario,
  todo: reducerTodo
})

const store = createStore(createRootreducer(), composeWithDevTools())

export {store}