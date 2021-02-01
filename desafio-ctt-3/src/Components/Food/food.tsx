import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Categoria } from '../../types/categoria/categoria';


const Foods = () => {

  const [categoria, setCategoria] = useState([]);
  /* const [comida, setComida] = useState([]); */

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(resp => setCategoria(resp.data))
  }, [categoria])

  return (
    <div className="food-beer-list food-shop">
      <h1> Tipos de pratos </h1>
        <p>
          Selecione uma categoria ou digite a comida (em inglês):
          <input type="text" placeholder="Digite a comida" />
        </p>


      {categoria?.map((item: Categoria) => (
        <ul key={item.idCategory}>
          <li>{item.strCategory}</li>
        </ul>
      ))}

      <h2>Tipo selecionado: <strong>Batata (mudar isso hein)</strong></h2>

      <div className="food-container">
        <div className="food-item">
          <img src="https://www.themealdb.com/images/media/meals/8x09hy1560460923.jpg" />
          <p>Nome da comidinha</p>
        </div>
      </div>
    </div>
  );
}

export default Foods;