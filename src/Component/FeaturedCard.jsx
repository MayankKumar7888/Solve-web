import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';

export default function FeaturedCard({featuredInfo}) {
  
  return (
    <>
      <Grid container spacing={5} className='featuredCard' sx={{ py: { xs: 2, md: 5 }}}>
      {featuredInfo.map((featureInfo,idx) => (
        <Grid item key={idx} size={{ xs: featureInfo.xs, sm: featureInfo.sm, md: featureInfo.md }} sx={{position: 'relative' , mx: 'auto' }}>
          {featureInfo.isNew && (
            <div className='featured-new'>New</div>
          )}
          <Card sx={{ backgroundColor: 'transparent' , boxShadow: 'none'}}>
          <CardActionArea>
            <NavLink to={featureInfo.path} ><CardMedia className='featured-img' component="img" image={featureInfo.img} alt="featured piture"/></NavLink>
            <CardContent sx={{ textAlign: 'center'}}>
              <Typography className='featured-card-title' gutterBottom variant="h5" component="div">
                {featureInfo.title}
              </Typography>
              <Typography className='featured-card-price' variant="body2">
                {featureInfo.price}
              </Typography>
            </CardContent>
          </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
    </>
  );
}
