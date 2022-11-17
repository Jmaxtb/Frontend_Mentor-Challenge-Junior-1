import React from 'react'
import Attribution from './components/attribution'
import Cards from './components/Cards'
import Form from './components/Form'
import "./styles/App.css"

function App() {

  return (
    <>
      <div className="App">
        <Cards/>
        <Form/>
        <Attribution/>
      </div>
    </>
  )
}

export default App
