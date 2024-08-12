import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Box,
  Typography,
  MenuItem,
  Menu,
} from "@mui/material";
import {
  Search,
  ShoppingCart,
  Favorite,
  Menu as MenuIcon,
  Person,
  Category,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [categoriesAnchorEl, setCategoriesAnchorEl] = useState(null);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleCategoriesMenuOpen = (event) => {
    setCategoriesAnchorEl(event.currentTarget);
  };

  const handleCategoriesMenuClose = () => {
    setCategoriesAnchorEl(null);
  };

  const drawerList = () => (
    <Box
      sx={{ width: "100%" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button component={Link} to="/gift-mode">
          <ListItemText primary="Gift Mode" />
        </ListItem>
        <ListItem button component={Link} to="/back-to-saving">
          <ListItemText primary="Back to Saving" />
        </ListItem>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/favorites">
          <ListItemText primary="Favorites" />
        </ListItem>
        <ListItem button component={Link} to="/fashion-finds">
          <ListItemText primary="Fashion Finds" />
        </ListItem>
        <ListItem button component={Link} to="/registry">
          <ListItemText primary="Registry" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      color="transparent"
      sx={{
        padding: "0 8px", // Reduced padding
        zIndex: 1,
        backgroundColor: "#fff",
      }}
    >
      <Toolbar
        sx={{
          minHeight: "48px", // Reduced height of Toolbar
          padding: "0 8px", // Adjusted padding
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 1, // Reduced margin-bottom
            marginTop: 1, // Reduced margin-top
          }}
        >
          {isSmallScreen && (
            <IconButton
              color="inherit"
              onClick={toggleDrawer(true)}
              sx={{ marginRight: 1 }} // Reduced marginRight
            >
              <MenuIcon />
            </IconButton>
          )}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginRight: 1, // Reduced marginRight
            }}
          >
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                textDecoration: "none",
                color: "inherit",
                fontWeight: "bold",
                marginRight: 2, // Reduced marginRight
              }}
            >
              BONS
            </Typography>
            {!isSmallScreen && (
              <>
                <IconButton
                  color="inherit"
                  onClick={handleCategoriesMenuOpen}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: 1, // Reduced marginRight
                  }}
                >
                  <Category sx={{ marginRight: 0.5 }} />
                  <Typography variant="body2">Categories</Typography>
                </IconButton>
                <Menu
                  anchorEl={categoriesAnchorEl}
                  open={Boolean(categoriesAnchorEl)}
                  onClose={handleCategoriesMenuClose}
                >
                  <MenuItem onClick={handleCategoriesMenuClose}>
                    <Link to="/category-1" style={{ textDecoration: "none" }}>
                      Category 1
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleCategoriesMenuClose}>
                    <Link to="/category-2" style={{ textDecoration: "none" }}>
                      Category 2
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleCategoriesMenuClose}>
                    <Link to="/category-3" style={{ textDecoration: "none" }}>
                      Category 3
                    </Link>
                  </MenuItem>
                </Menu>
              </>
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
              marginRight: 1, // Reduced marginRight
            }}
          >
            <InputBase
              placeholder="Search…"
              sx={{
                flexGrow: 1,
                backgroundColor: "#f0f0f0",
                borderRadius: 4,
                padding: "2px 6px", // Reduced padding
                maxWidth: isSmallScreen ? "60%" : "600px", // Adjusted maxWidth
                marginLeft: 5, // Adjusted marginLeft
                position: "relative",
              }}
              endAdornment={
                <IconButton
                  sx={{
                    backgroundColor: "#FF8225",
                    color: "#fff",
                    borderRadius: "50%",
                    padding: "6px", // Reduced padding
                    position: "absolute",
                    right: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    "&:hover": {
                      backgroundColor: "#333",
                    },
                  }}
                >
                  <Search />
                </IconButton>
              }
            />
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton color="inherit" sx={{ marginRight: 2 }}> {/* Increased marginRight */}
              <Favorite />
            </IconButton>
            <IconButton color="inherit" sx={{ marginRight: 2 }}> {/* Increased marginRight */}
              <Badge badgeContent={4} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
            {isSmallScreen ? (
              <IconButton color="inherit">
                <Person />
              </IconButton>
            ) : (
              <Link
                to="/signin"
                style={{
                  marginRight: 2, // Increased marginRight
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                Sign In
              </Link>
            )}
          </Box>
        </Box>

        {!isSmallScreen && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              marginTop: 1, // Reduced margin-top
              marginBottom: 1, // Reduced margin-bottom
            }}
          >
            <Link
              to="/gift-mode"
              style={{ marginRight: 15, textDecoration: "none", color: "#000", fontWeight: "bold" }} // Increased marginRight
            >
              Gift Mode
            </Link>
            <Link
              to="/back-to-saving"
              style={{ marginRight: 15, textDecoration: "none", color: "#000", fontWeight: "bold" }} // Increased marginRight
            >
              Back to Saving
            </Link>
            <Link
              to="/"
              style={{ marginRight: 15, textDecoration: "none", color: "#000", fontWeight: "bold" }} // Increased marginRight
            >
              Home
            </Link>
            <Link
              to="/favorites"
              style={{ marginRight: 15, textDecoration: "none", color: "#000", fontWeight: "bold" }} // Increased marginRight
            >
              Favorites
            </Link>
            <Link
              to="/fashion-finds"
              style={{ marginRight: 15, textDecoration: "none", color: "#000", fontWeight: "bold" }} // Increased marginRight
            >
              Fashion Finds
            </Link>
            <Link
              to="/registry"
              style={{ textDecoration: "none", color: "#000", fontWeight: "bold" }}
            >
              Registry
            </Link>
          </Box>
        )}
      </Toolbar>
      <Drawer
        anchor="bottom"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          ".MuiDrawer-paper": {
            height: "50%",
            top: "auto",
            bottom: 0,
            transition: "transform 0.3s ease-in-out",
            transform: `translateY(${drawerOpen ? "0" : "100%"})`,
          },
        }}
      >
        {drawerList()}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
