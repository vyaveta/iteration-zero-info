import { LandingHeader } from '@/components/layout/header/landing-header'
import React from 'react'
import HeroSection from './components/hero-section'
import Statistics from './components/statistics'
import { Features } from './components/features'
import TopicsCovered from './components/topics-covered'
import { Testimonial } from './components/testimonial'
import WhatWeOffer from './components/what-we-offer'
import DashboardInfo from './components/dashboard-info'
import Redirector from './components/redirecter'
import Faqs from './components/faqs'

const Home = () => {
  return (
    <div>
      <LandingHeader />
      <HeroSection />
      <Features />
      <TopicsCovered />
      <WhatWeOffer />
      <DashboardInfo />
      <Statistics />
      <Testimonial />
      <Faqs />
      <Redirector />
      <footer className="bg-muted/50 py-12">
        <div className="container mx-auto px-4 text-center text-gray-200">
          <p>Made with 💗 by Adwaith</p>
        </div>
      </footer>
    </div>
  )
}

export default Home