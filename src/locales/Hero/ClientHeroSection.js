import React from 'react'
import ClientHeroSectionImage1 from '../../assets/images/ClientHeroSectionImage1.png'
import ClientHeroSectionImage2 from '../../assets/images/ClientHeroSectionImage2.png'
import ClientHeroSectionImage3 from '../../assets/images/ClientHeroSectionImage3.png'
import ClientHeroSectionImage4 from '../../assets/images/ClientHeroSectionImage4.png'
import ClientHeroSectionImage5 from '../../assets/images/ClientHeroSectionImage5.png'

function ClientHeroSection() {
  return (
    <div className='justify-around hidden lg:flex lg:flex-row lg:p-10'>
        <img src={ClientHeroSectionImage1} />
        <img src={ClientHeroSectionImage2} />
        <img src={ClientHeroSectionImage3} />
        <img src={ClientHeroSectionImage4} />
        <img src={ClientHeroSectionImage5} />
    </div>
  )
}

export default ClientHeroSection