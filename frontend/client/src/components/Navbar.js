import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, Button } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';

const NavigationBar = () => {
    return (
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            LOGO
          </Typography>
          <div style={{ flexGrow: 1 }} />
          <div>
            <SearchIcon />
            <InputBase placeholder="What are you looking for?" />
          </div>
          <Button variant="outlined" style={{ marginLeft: '10px' }}>Login</Button>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default NavigationBar;