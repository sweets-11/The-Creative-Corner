import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { shades } from "../../theme";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Container,
  Avatar,
  Button,
  Tooltip,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

import {
  Search,
  StyledInputBase,
  SearchIconWrapper,
  pages,
} from "./Search";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store";
import { useNavigate } from "react-router-dom";

const Navbar = (theme) => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();

  const {
    palette: { neutral },
  } = useTheme();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigate = useNavigate();
  //logout
  const signUserOut = () => {
    signOut(auth).then(() => {
      dispatch(logout());
      navigate("/");
    });
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "neutral.light" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h3"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              textDecoration: "none",
              color: shades.secondary[500],
            }}
          >
            The Creative Corner
          </Typography>

          <Box
            sx={{
              flexGrow: { xs: 1, sm: 0.2 },
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: shades.primary[500] }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={
                      page === "Home"
                        ? "/home"
                        : `/${page.replace(/\s+/g, "").toLowerCase()}`
                    }
                  >
                    <Typography textAlign="center" color={"black"}>
                      {page}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              textDecoration: "none",
              color: shades.secondary[500],
            }}
          >
            The Creative Corner
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  display: "block",
                  color: shades.primary[900],
                }}
              >
                <Link
                  style={{ textDecoration: "none" }}
                  to={
                    page === "Home"
                      ? "/home"
                      : `/${page.replace(/\s+/g, "").toLowerCase()}`
                  }
                >
                  <Typography textAlign="center" color={"black"}>
                    {page}
                  </Typography>
                </Link>
              </Button>
            ))}
          </Box>

          <Toolbar
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
            }}
          >
            <Search sx={{ color: shades.primary[900] }}>
              <SearchIconWrapper sx={{ borderRadius: "100px" }}>
                <SearchIcon
                  sx={{
                    color: shades.primary[200],
                    zIndex: 1,
                    fontSize: "30px",
                  }}
                />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                sx={{
                  backgroundColor: shades.neutral[200],
                  pl: 3,
                  borderRadius: "20px",
                }}
              />
            </Search>
          </Toolbar>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>    
              <Avatar aria-label="recipe">
                <img
                  style={{ width: "100%" }}
                  src={localStorage.getItem("pic")}
                  alt=""
                />
              </Avatar>
        
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Link style={{ textDecoration: "none" }} to="/createBlog">
                  <Typography textAlign="center" color={"black"}>
                    Create Blog
                  </Typography>
                </Link>
              </MenuItem>

              <MenuItem onClick={signUserOut}>
                <Typography textAlign="center" color={"black"}>
                  Logout
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
