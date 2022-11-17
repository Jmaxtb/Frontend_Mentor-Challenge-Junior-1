import React from 'react'
import "../styles/CardBack.css"
import cardBack from "../assets/bg-card-back.png"

const CardBack = ({cvc}) => {
  return (
    <>
      <div className='cardback-img' style={
      { backgroundImage: `url(${cardBack})` }
      }>
        <span>{cvc}</span>
      </div>
    </>
  )
}

export default CardBack
