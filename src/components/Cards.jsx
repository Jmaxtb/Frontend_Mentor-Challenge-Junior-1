import React from 'react'
import CardBack from './CardBack'
import CardFront from './CardFront'
import "../styles/Cards.css"

const Cards = ({name, number, mes, anio, cvc}) => {
  return (
    <div className='cards-container'>
        <CardBack cvc={cvc}/>
        <CardFront 
            name={name}
            number={number}
            mes={mes}
            anio={anio}
        />
    </div>
  )
}

export default Cards
