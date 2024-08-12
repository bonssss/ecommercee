import React from 'react';
import { Button, Typography, Grid, Box } from '@mui/material';
import Images from '../images/1.jpg'

const HeroSection = () => {
  return (
    <Box sx={{ padding: '20px', background: '#f5f5f5', marginTop: '35px' }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <img
            src={Images}
            alt="Hero"
            style={{
              width: '100%',
              maxHeight: 300,
              objectFit: 'cover',
              borderRadius: '8px',
            }}
          />
        </Grid>
      
        <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
        <Typography variant="h6" sx={{ marginBottom: 1 }}>
            Rating: ★★★★☆
          </Typography>
          <Typography variant="" sx={{ marginBottom: 2 }}>
         Magna ex magna aliquip laboris quis id veniam magna in ullamco.
         Magna ex magna aliquip laboris quis id veniam magna in ullamco.

         
          </Typography>
       
          <Typography variant="h5" sx={{ marginBottom: 3 }}>
            $99.99
          </Typography>
          <Button 
  variant="contained" 
  size="large"
  sx={{
    backgroundColor: '#fff', 
    color: '#000', 
    borderRadius: '20px', 
    border: '1px solid #000',
    '&:hover': {
      backgroundColor: '#f0f0f0', // Optional: a slightly different color on hover
    },
  }}
>
  Shop This Item
</Button>

        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
