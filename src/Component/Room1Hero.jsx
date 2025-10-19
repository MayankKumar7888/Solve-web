import React from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import Box from '@mui/material/Box';

export default function Room1Hero(props) {
  return (
    <>
        <div className="room1Hero">
            <Navbar navColor="var(--txt1-clr)" />
            <div className="room1Hero-inner">
                <h2 className="room1Hero-heading">{props.title}</h2>
                <Box className='room1Hero-para-box' sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
                  <p className="room1Hero-para">{props.para}</p>
                  <NavLink className='room1Hero-btn' to={props.path}>{props.btnTitle}<TrendingFlatIcon className='rightArrow-icon' /></NavLink>
                </Box>
            </div>
        </div>
    </>
  )
}
