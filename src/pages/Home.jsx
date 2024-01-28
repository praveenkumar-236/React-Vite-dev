import React from 'react'
import '../App.css'
import AboutMe from '../components//HomePage/AboutMe'
import HeroSection from '../components/HomePage/HeroSection'
import ProjectCards from '../components/HomePage/ProjectCards'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <ProjectCards />
    </div>
  )
}
