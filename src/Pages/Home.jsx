import React from 'react'
import Hero from '../Component/Hero'
import Featured from '../Component/Featured'
import About from '../Component/About'
import Images from '../Component/images'
import OurRooms from '../Component/OurRooms'
import OurStores from '../Component/OurStores'
import Footer from '../Component/Footer';

export default function Home() {
  return (
    <>
        <Hero />
        <Featured />
        <About />
        <Images />
        <OurRooms />
        <OurStores />
        <Footer />
    </>
  )
}
