import React from 'react';
import { Box, Typography, Link, Grid, useMediaQuery, useTheme, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.background.paper,
        padding: '40px 20px',
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: 'auto',
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={3} sx={{ textAlign: isSmallScreen ? 'center' : 'left' }}>
          <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 'bold' }}>About Us</Typography>
          <Typography variant="body2">
            <Link href="#" color="inherit" underline="hover">Our Story</Link><br />
            <Link href="#" color="inherit" underline="hover">Careers</Link><br />
            <Link href="#" color="inherit" underline="hover">Press</Link>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{ textAlign: isSmallScreen ? 'center' : 'left' }}>
          <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 'bold' }}>Contact</Typography>
          <Typography variant="body2">
            <Link href="#" color="inherit" underline="hover">Customer Service</Link><br />
            <Link href="#" color="inherit" underline="hover">Support</Link><br />
            <Link href="#" color="inherit" underline="hover">Feedback</Link>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{ textAlign: isSmallScreen ? 'center' : 'left' }}>
          <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 'bold' }}>Legal</Typography>
          <Typography variant="body2">
            <Link href="#" color="inherit" underline="hover">Privacy Policy</Link><br />
            <Link href="#" color="inherit" underline="hover">Terms of Service</Link><br />
            <Link href="#" color="inherit" underline="hover">Cookies Policy</Link>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{ textAlign: isSmallScreen ? 'center' : 'left' }}>
          <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 'bold' }}>Follow Us</Typography>
          <Box sx={{ display: 'flex', justifyContent: isSmallScreen ? 'center' : 'flex-start', gap: 2 }}>
            <IconButton component={Link} href="#" color="inherit">
              <Facebook />
            </IconButton>
            <IconButton component={Link} href="#" color="inherit">
              <Twitter />
            </IconButton>
            <IconButton component={Link} href="#" color="inherit">
              <Instagram />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <Typography variant="body2" color="textSecondary">
          © {new Date().getFullYear()} BONS. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
