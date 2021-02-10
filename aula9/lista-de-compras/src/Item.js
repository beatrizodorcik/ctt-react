import React from 'react'

function Item(props){
  console.log(props.nome)
  return(
    <h1>{props.nome}</h1>
  )
}

export default Item