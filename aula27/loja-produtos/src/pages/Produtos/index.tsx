import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Produto = () => {
  const  [produtos, setProdutos] = useState<any>([])

  useEffect(() =>{
      axios.get(`https://fakestoreapi.com/products/${params.id}`).then(resposta => setProdutos(resposta.data))
  
  }, [])
  
  const params = useParams<any>()

  return (
    <p><h1>O Produto escolhido foi: </h1> <br></br> {produtos.title} <br></br>
    Preço: R$ {produtos.price} <br></br> {produtos.description}</p>
  );
}

export default Produto;