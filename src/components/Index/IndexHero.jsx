import NavBar from '../NavBar/NavBar'
import DivTrigun from '../DivTrigun/DivTrigun'
import DivBoton from '../DivBoton/DivBoton'
import FormRegister from '../FormRegister/FormRegister'
import React from 'react'
import './indexHero.css'

export default function IndexHero() {
  return (
    <>
        <div className="app-container">
        <NavBar />
        <DivTrigun />
        <DivBoton />
      </div>
      <div className="divForm">
        <FormRegister />
        <div className="img-form"></div>
      </div>
    </>
  )
}

