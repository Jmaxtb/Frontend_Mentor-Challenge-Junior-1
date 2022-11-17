import React from 'react'
import "../styles/CardFront.css"
import cardFront from "../assets/bg-card-front.png"

const CardFront = () => {
  return (
        <div className='cardfront-img' style={
            { backgroundImage: `url(${cardFront})` }
        }>
            <div className='circle'></div>
            <div className='circle-border'></div>
            <h1>0000 0000 0000 0000</h1>
            <h3 className='first'>JANE APPLESEET</h3>
            <h3 className='second'>00/00</h3>
        </div>
  )
}

export default CardFront
