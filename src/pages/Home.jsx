/*
 * ZoutGames Hosting Company Template
 * Copyright (C) 2025 26bz (https://26bz.online/)
 * Licensed under GNU GPLv3 or later. See LICENSE file.
 */

import FeaturesSection from '../components/home/FeaturesSection'
import Hero from '../components/home/Hero'
import ShowcasePanel from '../components/ShowcasePanel'
import Testimonials from '../components/home/Testimonials'
import FAQ from '../components/FAQ'
import BottomCTA from '../components/home/BottomCTA'
import Helmet from 'react-helmet'
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | ZoutGames</title>
      </Helmet>
      <Hero />
      <FeaturesSection />
      <ShowcasePanel />
      <Testimonials />
      <FAQ />
      <BottomCTA />
    </>
  )
}

export default Home
