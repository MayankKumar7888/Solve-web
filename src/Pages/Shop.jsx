import React from 'react'
import Navbar from '../Component/Navbar'
import ShopItems from '../Component/ShopItems'
import Room1Help from '../Component/Room1Help'
import Footer from '../Component/Footer'

export default function Shop() {
  return (
    <>
       <div className='shop'>
          <Navbar navColor="var(--txt1-clr)" />
          <div className="shop-inner">
            <h2 className='shop-heading'>Shop</h2>
          </div>
          <ShopItems />
          <Room1Help />
          <Footer />
       </div>
    </>
  )
}
