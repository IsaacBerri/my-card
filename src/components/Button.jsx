import React, { useContext } from 'react'
import { ModeContext } from '../context/ModeContexts'

const Button = ({type}) => {

  const {mode} = useContext(ModeContext)

  if (type == "mail") {
    return (
        <a href="mailto:berrioisaac15@gmail.com" target='_blank'><button className={`${mode}-button`}>Email</button></a>
    )
  }else {
    return (
        <a href="https://protafolio-isaac.netlify.app/" target='_blank'><button className={`${mode}-button2`}>Briefcase</button></a>
    )
  }
}

export default Button