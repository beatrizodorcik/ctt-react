import React from 'react';
import './App.css';
import Cerveja from './Components/Beer/beer';
import Foods from './Components/Food/food';


function App() {
  return (
    <div className="App">
      <Foods />
      <Cerveja />
    </div>
  );
}


export default App;