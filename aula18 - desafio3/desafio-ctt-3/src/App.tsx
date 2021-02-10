  
import React from 'react';
import './App.css';
import Beer from './Components/Beer/beer';
import Foods from './Components/Food/food';

function App() {
  return (
    <div className="App">
      <Foods />
      <Beer />
    </div>
  );
}

export default App;