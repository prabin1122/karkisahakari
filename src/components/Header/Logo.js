import React from 'react'
import Logo from '../../assets/images/Logo.png'
import './Header.css'

function LogoImage() {
  return (
    <div className='w-[300px] pl-10 p-[10px]'>
        <img src={Logo} />
    </div>
  )
}

export default LogoImage