
import React from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import Side from './Side';
import logo from '../images/logo.png';

const TopNavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ height: '60px' }} 
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
       
        <div className="navbar-brand fw-bold fs-4">
          <img src={logo} width={'200px'} alt="logo" />
        </div>

        <div><Side /></div>

      
        <div className="d-flex align-items-center">
          <IconButton sx={{ color: 'white' }}>
            <NotificationsNoneIcon />
          </IconButton>

          <IconButton sx={{ color: 'white' }}>
            <AccountCircleIcon />
          </IconButton>
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
