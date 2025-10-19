import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';

export default function RoomDetail({roomsDetail}) {
  
  return (
    <>
      <Grid container spacing={5} className='roomDetail' sx={{ py: { xs: 2, md: 5 }}}>
      {roomsDetail.map((roomDetail,idx) => (
        <Grid item key={idx} size={{ xs: roomDetail.xs, sm: roomDetail.sm, md: roomDetail.md }} sx={{mx: 'auto'}}>
            <div className="roomDetail-img-container">
                <div className='roomDetail-text'>{roomDetail.title}</div>
              <div className='roomDetail-img-overlay'></div>
              <CardMedia className='roomDetail-img' component="img" image={roomDetail.img} alt="Room Detail" />
            </div>
        </Grid>
      ))}
    </Grid>
    </>
  );
}