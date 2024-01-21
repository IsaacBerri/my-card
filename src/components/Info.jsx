import React, { useContext } from 'react'
import { ModeContext } from '../context/ModeContexts'

const Info = () => {

  const {mode} = useContext(ModeContext)
  return (
    <section className='mainInformation'>
        <h1>Isaac Berrio</h1>
        <p id={`${mode}-profession`}>Full-Stack Developer</p>
        <p>Medellin, Colombia</p>
    </section>
  )
}

export default Info