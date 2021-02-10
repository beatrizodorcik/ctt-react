import React from 'react'
import {useSelector} from 'react-redux'

interface Produtos {
  carrinho: number
}

const Carrinho = () => {
  const valorAdicionado = useSelector((state: Produtos) => state.carrinho)

  return (
    <h5>Valor: {valorAdicionado}</h5>
  );
}

export default Carrinho;