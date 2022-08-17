import React from 'react'
import Logo from '../../assets/images/Logo.png'
import './Header.css'

function LogoImage() {
  return (
    <div className='w-[200px] pl-10'>
        <img src={Logo} />
    </div>
  )
}

export default LogoImage