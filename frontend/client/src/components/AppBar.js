import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar>
        {/* Add your logo and navigation items */}
        <Typography variant="h6" color="inherit" noWrap>
          YummyBites
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
