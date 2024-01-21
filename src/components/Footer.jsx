import React, { useContext } from 'react'
import { Icon } from '@iconify/react';
import { ModeContext } from '../context/ModeContexts.jsx';

const Footer = () => {
    const {mode} = useContext(ModeContext)
  return (
    <footer className={`Footer ${mode}-footer`}>
        <Icon icon="ic:baseline-facebook" color={mode === "light" ? "#03302f" : "aqua"} width="24" height="24" />
        <a href="https://github.com/IsaacBerri/my-card.git" target="_blank"><Icon icon="mdi:github" color={mode === "light" ? "#03302f" : "aqua"} width="24" height="24" /></a>
        <a href="https://www.linkedin.com/in/isaacberrio/" target="_blank"><Icon icon="mdi:linkedin" color={mode === "light" ? "#03302f" : "aqua"} width="24" height="24" /></a>
    </footer>
  )
}

export default Footer