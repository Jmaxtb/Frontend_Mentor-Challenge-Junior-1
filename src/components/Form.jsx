import React from 'react'
import { useState } from 'react';
import "../styles/Form.css"
import Cards from './Cards';

const Form = () => {
    const [name, setname] = useState(``)
    const [number, setnumber] = useState(``)
    const [mes, setmes] = useState(``)
    const [anio, setanio] = useState(``)
    const [cvc, setcvc] = useState(`000`)

  return (
    <>
        <Cards 
            name={name}
            number={number}
            mes={mes}
            anio={anio}
            cvc={cvc}
        />
        <form className='form-container' onSubmit={ev => {
            ev.preventDefault();
        }}>
            <span className='title-input'>CARDHOLDER NAME</span>
            <input 
                type="text" 
                name="name" 
                id="name" 
                placeholder='e.g. Jane Appleseed'
                value={name}
                onChange={ev => setname(ev.target.value)}
                />
            <span className='title-input'>CARD NUMBER</span>
            <input 
                type="text" 
                name="number" 
                id="number" 
                placeholder='e.g. 1234 5678 9123 0000'
                value={number}
                onChange={ev => setnumber(ev.target.value)}/>
            <span className='title-input'>EXP. DATE</span>
            <input 
                type="text" 
                name="mes" 
                id="" 
                placeholder='MM'
                value={mes}
                onChange={ev => setmes(ev.target.value)}/>
            <span className='title-input'>(MM/YY)</span>
            <input 
                type="text" 
                name="anio" 
                id="" 
                placeholder='YY'
                value={anio}
                onChange={ev => setanio(ev.target.value)}/>
            <span className='title-input'>CVC</span>
            <input 
                type="text" 
                name="cvc" 
                id="" 
                placeholder='e.g. 123'
                value={cvc}
                onChange={ev => setcvc(ev.target.value)}/>
            <button type='submit'>Confirm</button>
        </form>
    </>
  )
}

export {Form}
