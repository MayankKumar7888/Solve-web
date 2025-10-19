import React from 'react'
import Box from '@mui/material/Box'


export default function Room1Next(props) {
  return (
    <>
       <Box className='room1Next' sx={{ height: {xs: '520px', md: '640px'}, marginTop: { xs: '0', md: '7em'} }}>
           <div className="room1Next-inner" >
                <Box className='room1Next-heading' sx={{ marginTop: { xs: '-8%', md: '-15%'} }} >{props.title}</Box>
                <img src={props.img} className='room1Next-img' alt="Next Room" />
           </div>
       </Box>
    </>
  )
}








