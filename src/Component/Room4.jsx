import React from 'react'
import Room1Hero from './Room1Hero'
import Room1Img from './Room1Img'
import Content from './Content'
import Room1Next from './Room1Next'
import Room1Help from './Room1Help'
import Footer from './Footer'
import Img1 from '../assets/pexels-houzlook-3356416.jpg'
import Img3 from '../assets/pexels-whynugrohou-3097112.webp'

export default function Room3() {
  return (
    <>
       <div className="room1">
        <Room1Hero
          title = 'Berlin'
          para = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed faucibus turpis in eu mi bibendum neque.'
          path = "/room5"
          btnTitle = "Rooms"
        />
        <Room1Img
            img = {Img1}
            visible = "none"
        //   imgSrc= {Img1}
        //   btnTitle = "Single Sofa"
        //   btnPrice = "$ 68.00 USD"
         />
        <Content
            title = 'Norwegian Interior Design'
            para1 = 'Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Netus et malesuada fames ac turpis egestas integer eget. A diam maecenas sed enim ut sem viverra aliquet eget. Vel fringilla est ullamcorper eget nulla facilisi etiam. Velit egestas dui id ornare arcu odio ut. Felis donec et odio pellentesque diam volutpat commodo sed egestas. Auctor eu augue ut lectus arcu bibendum at varius. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices.'
            para2 = 'Aenean euismod elementum nisi quis eleifend. Vitae purus faucibus ornare suspendisse sed nisi lacus. Mattis enim ut tellus elementum sagittis. Lectus quam id leo in vitae turpis. Lobortis scelerisque fermentum dui faucibus in ornare quam.'
            para3 = 'Proin fermentum leo vel orci porta non pulvinar. Diam phasellus vestibulum lorem sed risus ultricies. Quisque egestas diam in arcu cursus. Morbi tincidunt ornare massa eget egestas. Scelerisque eu ultrices vitae auctor eu.'
            visible = 'none'
            // titleBtn = 'Read More'
            // path = "/readmore"
        />
        <Room1Next
            title = "Next" 
            img = {Img3}
        />
        <Room1Help />
        <Footer />
       </div>
    </>
  )
}