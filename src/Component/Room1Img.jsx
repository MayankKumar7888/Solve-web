import React from 'react'
import RoomPriceBtn from './RoomPriceBtn'
import Box from '@mui/material/Box'


export default function Room1Img(props) {
  return (
    <>
      <Box className='room1Img' sx={{ height: { xs: '100dvh', md: '250dvh' }, backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${props.img})` }}>
        <Box sx={{ display: props.visible }}>
          <RoomPriceBtn imgSrc={props.imgSrc} title={props.btnTitle} price={props.btnPrice} />
        </Box>
      </Box>
    </>
  )
}
