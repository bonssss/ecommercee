import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Grid, Card, CardMedia, Typography, Rating, Button, List, ListItem, ListItemText, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { getProductById, products } from '../data/Product'; // Import products for indexing

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id); // Get the product by its ID
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Get the theme object for responsive design
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md')); // Check if screen size is small
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg')); // Check if screen size is large

  if (!product) {
    return <Typography variant="h6">Product not found</Typography>;
  }

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : product.images.length - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex < product.images.length - 1 ? prevIndex + 1 : 0));
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const getProductIds = () => products.map(product => product.id);

  const productIds = getProductIds();
  const currentIndex = productIds.indexOf(parseInt(id));

  const handlePrevProduct = () => {
    const prevIndex = (currentIndex > 0) ? currentIndex - 1 : productIds.length - 1;
    navigate(`/product/${productIds[prevIndex]}`);
  };

  const handleNextProduct = () => {
    const nextIndex = (currentIndex < productIds.length - 1) ? currentIndex + 1 : 0;
    navigate(`/product/${productIds[nextIndex]}`);
  };

  const handleCircleClick = (index) => {
    navigate(`/product/${productIds[index]}`);
  };

  return (
    <Box sx={{ padding: 2,  marginTop:'30px'}}>
      <Grid container spacing={2}>
        {isLargeScreen && (
          <Grid item xs={12} lg={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ position: 'sticky', top: 0 }}>
              {products.slice(0, 6).map((p, index) => (
                <Card
                  key={p.id}
                  sx={{
                    width: '100%',
                    marginBottom: 2,
                    cursor: 'pointer',
                    border: p.id === parseInt(id) ? '2px solid black' : 'none',
                  }}
                  onClick={() => navigate(`/product/${p.id}`)}
                >
                  <CardMedia
                    component="img"
                    image={p.images} // Show the first image of each product
                    alt={p.name}
                    sx={{ height: 60, objectFit: 'cover', width: 60 }} // Minimize width of thumbnail images
                  />
                </Card>
              ))}
            </Box>
          </Grid>
        )}
        <Grid item xs={12} lg={9}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8} sx={{ position: 'relative' }}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  width='100%'
                  height="cover"
                  image={product.images} // Show the current image
                  alt={product.name}
                  sx={{ objectFit: 'cover' }}

                />
                {!isSmallScreen && (
                  <>
                    <IconButton
                      onClick={handlePrevProduct} // Navigate to previous product
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: 0,
                        transform: 'translateY(-50%)',
                        zIndex: 1,
                        bgcolor: '#fff',
                        color: '#000000',
                        borderRadius: '50%',
                        width: 40,
                        height: 40,
                        margin: '0 16px',
                        '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.7)' },
                      }}
                    >
                      &#8249; {/* Left arrow (Unicode) */}
                    </IconButton>
                    <IconButton
                      onClick={handleNextProduct} // Navigate to next product
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        right: 0,
                        transform: 'translateY(-50%)',
                        zIndex: 1,
                        bgcolor: '#fff',
                        color: '#000000',
                        borderRadius: '50%',
                        width: 40,
                        height: 40,
                        margin: '0 16px',
                        '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.7)' },
                      }}
                    >
                      &#8250; {/* Right arrow (Unicode) */}
                    </IconButton>
                  </>
                )}
                {isSmallScreen && (
                  <Box sx={{ display: 'flex', justifyContent: 'center', position: 'absolute', bottom: 0, width: '100%', bgcolor: 'rgba(255, 255, 255, 0.8)', padding: 1 }}>
                    {productIds.map((_, index) => (
                      <Box
                        key={index}
                        sx={{
                          width: 10,
                          height: 10,
                          borderRadius: '50%',
                          bgcolor: currentIndex === index ? 'black' : 'gray',
                          margin: 1,
                          cursor: 'pointer',
                        }}
                        onClick={() => handleCircleClick(index)}
                      />
                    ))}
                  </Box>
                )}
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ padding: 2 }}>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="">Fugiat dolor consequat enim Lorem qui pariatur.Fugiat dolor consequat enim Lorem qui pariatur. </Typography>

                <Typography variant="h5" sx={{ margin: '10px 0' }}>
                  USD {product.price.toFixed(2)}
                </Typography>
                <Rating value={product.rating} readOnly />
                <Button variant="contained" color="primary" fullWidth sx={{ marginTop: 2, backgroundColor:'#000'}}>
                  Add to Cart
                </Button>
                <List sx={{ marginTop:1 }}>
                  <ListItem>
                    <ListItemText primary="Materials" secondary={product.material}
                    
                    sx={{
                       // Align the text to the right
                        '& .MuiTypography-root': {
                          fontSize: '0.875rem', // Set the font size for both primary and secondary text
                        },
                      }}/>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Chain style" secondary={product.chainStyle} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Necklace length" secondary={product.length} />
                  </ListItem>
                </List>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h6">Item details</Typography>
        <Typography>{product.description}</Typography>
      </Box>
    </Box>
  );
};

export default ProductDetails;
