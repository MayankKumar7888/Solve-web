import React from 'react';
import Grid from '@mui/material/Grid';

export default function Content(props) {
  return (
    <>
      <Grid container spacing={2} className="content" >
        <Grid item size={{ xs: 12, md: 6 }}>
          <h2 className="content-heading">{props.title}</h2>
        </Grid>
        <Grid item size={{ xs: 12, md: 6 }} >
          <div className="content-inner-box">
            <p className="content-para">{props.para1}</p>
            <p className="content-para">{props.para2}</p>
            <p className="content-para">{props.para3}</p>
          </div>
          <button className='btn' style={{ display: props.visible}} to={props.path}>{props.titleBtn}</button>
        </Grid>
      </Grid>
    </>
  );
}
