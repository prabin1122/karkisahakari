import React from 'react'
import ClientHeroSection from '../../locales/Hero/ClientHeroSection'
import ServiceHeroSection from '../../locales/Hero/ServiceHeroSection'
import Testimonial from '../../locales/Hero/Testimonial'
import AboutCompany from '../../locales/Section/AboutCompany'
import CompanyCEO from '../../locales/Section/CompanyCEO'
import LatestNews from '../../locales/Section/LatestNews'

function About() {
  return (
    <div>
      <AboutCompany/>
      <ServiceHeroSection/>
      <ClientHeroSection />
      <CompanyCEO />
      <LatestNews />
      <Testimonial />
    </div>
  )
}

export default About