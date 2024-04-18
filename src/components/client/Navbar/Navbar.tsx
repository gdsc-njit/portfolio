'use client'

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import GitHub from "@mui/icons-material/GitHub";
import Google from "@mui/icons-material/Google";
import Instagram from "@mui/icons-material/Instagram";
import DiscordIcon from "@/assets/DiscordIcon";
import { useState } from "react";

const pages = ["About", "Resources", "Projects", "Events"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleSocialClick = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container
        maxWidth="xl"
        sx={{
          backgroundColor: "black",
        }}
      >
        <Toolbar disableGutters>

          {/* Desktop App Menu */}
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Typography
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ mx: 2, color: "white", display: "block" }}
              >
                {page}
              </Typography>
            ))}
          </Box>


          {/* Mobile Hamburger  */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 600,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            GDSC NJIT
          </Typography>


          {/* Social Media Links Desktop */}
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <Tooltip title="Google">
              <IconButton onClick={handleSocialClick} sx={{ p: 0, mx: 1.5, color: "white"}}>
                  <Google />
              </IconButton>
            </Tooltip>
            <Tooltip title="Instagram">
              <IconButton onClick={handleSocialClick} sx={{ p: 0, mx: 1.5, color: "white"}}>
                  <Instagram />
              </IconButton>
            </Tooltip>
            <Tooltip title="GitHub">
              <IconButton onClick={handleSocialClick} sx={{ p: 0, mx: 1.5, color: "white"}}>
                  <GitHub />
              </IconButton>
            </Tooltip>
            <Tooltip title="Discord">
              <IconButton onClick={handleSocialClick} sx={{ p: 0, mx: 1.5, color: "white"}}>
                <DiscordIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
        <Toolbar sx={{ flexGrow: 0, display: { xs: "flex", md: "none", justifyContent: "center" } }}>
        <Box>
            <Tooltip title="Google">
              <IconButton onClick={handleSocialClick} sx={{ p: 0, mx: 1.5, color: "white"}}>
                  <Google sx={{fontSize: 20}} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Instagram">
              <IconButton onClick={handleSocialClick} sx={{ p: 0, mx: 1.5, color: "white"}}>
                  <Instagram sx={{fontSize: 20}} />
              </IconButton>
            </Tooltip>
            <Tooltip title="GitHub">
              <IconButton onClick={handleSocialClick} sx={{ p: 0, mx: 1.5, color: "white"}}>
                  <GitHub sx={{fontSize: 20}} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Discord">
              <IconButton onClick={handleSocialClick} sx={{ p: 0, mx: 1.5, color: "white"}}>
                <DiscordIcon sx={{fontSize: 20}} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
