// src/components/ProductList.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Rating,
  Box,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { products } from "../data/Product"; // Import the products array

const ProductList = () => {
  // State for selected filter criteria
  const [filterCategory, setFilterCategory] = useState("");
  const [filterPriceRange, setFilterPriceRange] = useState("");

  // Filter products based on category and price range
  const filteredProducts = products.filter((product) => {
    const matchesCategory = filterCategory
      ? product.category === filterCategory
      : true;
    const matchesPriceRange = filterPriceRange
      ? product.price >= filterPriceRange[0] &&
        product.price <= filterPriceRange[1]
      : true;
    return matchesCategory && matchesPriceRange;
  });

  return (
    <Box sx={{ p: 2 }}>
      {/* Filter options aligned to the right */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end", // Align items to the right
          mb: 2,
          gap: 2,
        }}
      >
        {/* Filter by Category */}
        <FormControl variant="outlined" sx={{ minWidth: 120 }}>
          <InputLabel>Category</InputLabel>
          <Select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            label="Category"
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Necklace">Necklace</MenuItem>
            {/* Add other categories as needed */}
          </Select>
        </FormControl>

        {/* Filter by Price Range */}
        <FormControl variant="outlined" sx={{ minWidth: 120 }}>
          <InputLabel>Price Range</InputLabel>
          <Select
            value={filterPriceRange}
            onChange={(e) => setFilterPriceRange(e.target.value)}
            label="Price Range"
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value={[0, 50]}>Under $50</MenuItem>
            <MenuItem value={[50, 100]}>$50 - $100</MenuItem>
            <MenuItem value={[100, Infinity]}>Over $100</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2, // Gap between items
        }}
      >
        {filteredProducts.map((product) => (
          <Box
            key={product.id}
            sx={{
              flex: "1 1 calc(50% - 16px)", // Two items per row with gap consideration
              maxWidth: "calc(50% - 16px)",
              boxSizing: "border-box",
              "@media (min-width:600px)": {
                flex: "1 1 calc(33.333% - 16px)", // Three items per row for larger screens
                maxWidth: "calc(33.333% - 16px)",
              },
              "@media (min-width:900px)": {
                flex: "1 1 calc(25% - 16px)", // Four items per row for even larger screens
                maxWidth: "calc(25% - 16px)",
              },
            }}
          >
            <Link
              to={`/product/${product.id}`}
              style={{ textDecoration: "none" }}
            >
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.images} // Display the first image from the images array
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography>
                    {" "}
                    <Rating value={product.rating} readOnly />
                  </Typography>
                  <Typography variant="">
                    ${product.price.toFixed(2)}
                  </Typography>
                  <Typography >{product. material}</Typography>

                  {/* <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                    Shop this item
                  </Button> */}
                </CardContent>
              </Card>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ProductList;
