import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { Produtos } from '../../types'
import '../../index.css'

const Home  = () => {

    const  [produtos, setProdutos] = useState<any>([])

    useEffect(() =>{
        axios.get('https://fakestoreapi.com/products').then(resposta => setProdutos(resposta.data))
    
    }, [])
  return (
    <div>
      {produtos.map((item: Produtos) => (
        <ul>
          <li>
          <p>
            Nome do produto:  {item.title}
          </p>
          <p>
            Preço: R$ {item.price}
          </p>
          <p className="width-image">
          <img src={item.image} alt=""/>
          </p>
          <p>
            <Link to={`/produto/${item.id}`}>Comprar </Link>
          </p>
          </li>
        </ul>
        
      ))}
      
      
    </div>
  );
}

export default Home;