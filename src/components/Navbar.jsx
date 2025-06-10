import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const menuItems = ['Home', 'About', 'Contact'];

  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Typography variant="h6" sx={{ flexGrow: 1, position: 'absolute', left: 20 }}>
            MyApp
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>

              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
              >
                <Box sx={{ width: 250 }} onClick={() => setDrawerOpen(false)}>
                  <List>
                    {menuItems.map((text) => (
                      <ListItem button key={text}>
                        <ListItemText primary={text} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <>
              {menuItems.map((text) => (
                <Button
                  key={text}
                  color="inherit"
                  component={Link}
                  to={text === 'Home' ? '/' : `/${text.toLowerCase()}`}
                >
                  {text}
                </Button>
              ))}
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;