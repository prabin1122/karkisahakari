import React from 'react'
import HeaderSlider from '../../components/Carousel/HeaderSlider.js'
import AboutSection from '../../locales/Section/AboutSection.js'
import ContactHeroSection from '../../locales/Hero/ContactHeroSection.js'
import ServiceHeroSection from '../../locales/Hero/ServiceHeroSection.js'
import ServiceSection from '../../locales/Section/ServiceSection.js'
import WorkSection from '../../locales/Section/WorkSection.js'
import WorkHeroSection from '../../locales/Hero/WorkHeroSection.js'
import ClientHeroSection from '../../locales/Hero/ClientHeroSection.js'
import CompanyCEO from '../../locales/Section/CompanyCEO.js'
import LatestNews from '../../locales/Section/LatestNews.js'
import Testimonial from '../../locales/Hero/Testimonial.js'
import Stats from '../../features/Stats.js'
import Form from '../../features/Form.js'


function Home() {
  return (
    <div>
      <HeaderSlider/>
      <AboutSection/>
      <ServiceHeroSection/>
      <ServiceSection/>
      <ContactHeroSection/>
      <WorkSection/>
      <WorkHeroSection/>
      <ClientHeroSection/>
      <CompanyCEO/>
      <LatestNews/>
      <Testimonial/>
      <Stats/>
      <Form/>
    </div>
  )
}

export default Home