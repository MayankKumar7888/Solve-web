import React from 'react'
import Grid from '@mui/material/Grid'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { NavLink } from 'react-router-dom';

export default function Room1Help() {
    const helps = [
        {
            title: "Local Stores",
            para: "Proin fermentum leo vel orci porta non pulvinar. Diam phasellus vestibulum lorem sed risus ultricies.",
            btn: "Find a Store"
        },
        {
            title: "Questions?",
            para: "Proin fermentum leo vel orci porta non pulvinar. Diam phasellus vestibulum lorem sed risus ultricies.",
            btn: "Read the FAQ"
        }
    ]
  return (
    <>
      <Grid container spacing={2} className="room1Help" >
        <Grid item size={{ xs: 12, md: 4 }}>
            <h2 className='room1Help-heading'>Help?</h2>
        </Grid>
        {helps.map((help) => (
            <Grid item size={{ xs: 12, md: 4 }}>
                <h4 className='room1Help-title'>{help.title}</h4>
                <p className='room1Help-para'>{help.para}</p>
                <NavLink className='room1Help-btn' to="/store">{help.btn} <TrendingFlatIcon className='rightArrow-icon' /></NavLink>
            </Grid>
        ))}
      </Grid>
    </>
  )
}
