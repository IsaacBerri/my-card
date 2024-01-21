import React, { useContext } from 'react'
import { Icon } from '@iconify/react';
import { ModeContext } from '../context/ModeContexts';

const Footer = () => {
    const {mode} = useContext(ModeContext)
  return (
    <footer className={`Footer ${mode}-footer`}>
        <Icon icon="ic:baseline-facebook" color={mode === "light" ? "#03302f" : "aqua"} width="24" height="24" />
        <Icon icon="mdi:github" color={mode === "light" ? "#03302f" : "aqua"} width="24" height="24" />
        <Icon icon="mdi:linkedin" color={mode === "light" ? "#03302f" : "aqua"} width="24" height="24" />
    </footer>
  )
}

export default Footer