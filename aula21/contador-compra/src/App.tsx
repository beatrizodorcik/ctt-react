import React from 'react';
import { Provider } from 'react-redux';
import Valor from './Valores';
import {createStore} from 'redux'
import Carrinho from './Carrinho'

interface Store {
  carrinho: number
}

const initialState: Store = {
  carrinho: 0
}

function reducer(state= initialState, action: any ){
  switch(action.type) {
    case 'ADICIONAR':
      return {
        carrinho: state.carrinho + 15.99
      };
    case 'REMOVER':
      return {
        carrinho: state.carrinho > 0 ? state.carrinho - 15.99 : state.carrinho
      };
    default:
      return state
  }
}

const store = createStore(reducer)

function App() {
  return (
    <Provider store={store}>
      <Valor/>
      <Carrinho/>
    </Provider>
  )
}

export default App;
