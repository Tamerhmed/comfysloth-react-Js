import React from 'react'
import { FeaturedProducts, Hero, Services, Contact, Sidebar } from '../components'
const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Contact />
      <Services />
    </main>
    
  );
}

export default HomePage
