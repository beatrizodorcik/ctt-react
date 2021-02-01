import React, { useState } from 'react';
import axios from 'axios'
import { Beer } from '../../types/beer/beer';

const Cerveja = () => {
  const [beer, setBeer] = useState([])

  function BuscaCerveja(){
    axios.get('https://api.punkapi.com/v2/beers/?per_page=8')
      .then(resp => setBeer(resp.data))
  }
 
  return (
    <div className="food-beer-list food-shop">
      
      <h1>Tipos de Cerveja</h1>
        <button onClick={BuscaCerveja}>Buscar Cerveja</button>
        {beer?.map((item: Beer) => (

      <div className="beers-list">
        <div className="beer" key={item.id}>
          <img src={item.image_url} alt="Buzz" />
          <h3>{item.name}a</h3>
          <span>{item.tagline}</span>
          <small>{item.description}</small>
        </div>
      </div>
    ))}
   </div>

  )}

export default Cerveja;