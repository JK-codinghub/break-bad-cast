import React from 'react'
import logo from '../../img/logo.png'

const Header = () => {
  return (
    <header className='center'>
      <img src={logo} style={{width:"50px",height:"50px"}} alt='' />
      <span style={{color:"white",fontSize:"25px",fontFamily:"san-serif"}}><u>BREAKING BAD CHARACTERS</u></span>
    </header>
  )
}

export default Header
