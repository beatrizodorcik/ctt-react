import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { store } from './geral';
import Usuario from './Usuario';
import Todo from './Todo';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Usuario/>
        <Todo/>
      </Provider>
    </div>
  );
}

export default App;
