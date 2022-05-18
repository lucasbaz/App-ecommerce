import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ButtonGroup from '@mui/material/ButtonGroup';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const NavBar = () => {
    return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar className='NavColor'>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <div className='LogoStyle'>
                <img src='https://d3ugyf2ht6aenh.cloudfront.net/stores/932/712/themes/common/logo-1948825446-1549058125-829a1aa5e1198dd981db66f82719db0a1549058126-480-0.png?0' alt='nda'></img>
            </div>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align="center">
                <ButtonGroup color="inherit" variant="text" aria-label="text button group">
                    <Button>INICIO</Button>
                    <Button>COMPRAR WAPS</Button>
                    <Button>CÓMO COMPRAR</Button>
                </ButtonGroup>
            </Typography>
            <ShoppingBasketIcon></ShoppingBasketIcon>
          </Toolbar>
        </AppBar>
    </Box>
    )
}

export default NavBar