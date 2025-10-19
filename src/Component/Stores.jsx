import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';

export default function Stores({stores}) {

  return (
    <>
        <Grid container spacing={0} className='store' sx={{ py: { xs: 2, md: 5 }}}>
            {stores.map((store,idx) => (
                <Grid item key={idx} size={{ xs: store.xs, sm: store.sm, md: store.md }} sx={{mx: 'auto'}}>
                    <Card className='store-card' 
                        sx={{
                            gap: 2,
                            flexDirection: { xs: 'column', md: 'row'}, 
                            justifyContent: { xs: 'center', md: 'start'}, 
                            alignItems: { xs: 'center', md: 'start'}, 
                            textAlign: { xs: 'center', md: 'start'} 
                        }}>
                        <CardMedia className='store-card-img' component="img" image={store.img} alt="Store" />
                        <Box sx={{ my: 'auto' }}>
                            <CardContent>
                                <Typography className='store-title' component="div" variant="h5">{store.title}</Typography>
                                <Typography className='store-subtitle1' variant="subtitle1" component="div">{store.subtitle1}</Typography>
                                <Typography className='store-subtitle1' variant="subtitle2" component="div">{store.subtitle2}</Typography>
                                <NavLink className='store-direction-btn' to="/store">Get Direction <TrendingFlatIcon className='rightArrow-icon' /></NavLink>
                            </CardContent>
                        </Box>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </>
  );
}







