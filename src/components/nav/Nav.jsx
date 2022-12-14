import React from 'react'
import './nav.css'
import { FaHome } from 'react-icons/fa'
import { FaUserSecret } from "react-icons/fa"
import { HiDesktopComputer } from "react-icons/hi"
import { RiContactsBookFill } from "react-icons/ri"
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserSecret/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><HiDesktopComputer/></a>
      <a href="#contacts" onClick={() => setActiveNav('#contacts')} className={activeNav === '#contacts' ? 'active' : ''}><RiContactsBookFill/></a>
    </nav>
  )
}

export default Nav