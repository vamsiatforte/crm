import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import navLinks from '../data/navLinks'; 
import './side.css';

const Side = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [openSubmenu, setOpenSubmenu] = React.useState(null);

  const toggleDrawer = (open) => (event) => {
    if (event?.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setOpenDrawer(open);
  };

  const toggleSubmenu = (label) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  const drawerList = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {navLinks.map((link) => (
          <div key={link.label}>
            {link.children ? (
              <>
                <ListItemButton onClick={() => toggleSubmenu(link.label)}>
                  <ListItemIcon>{link.icon}</ListItemIcon>
                  <ListItemText primary={link.label} />
                  {openSubmenu === link.label ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </ListItemButton>

                <Collapse in={openSubmenu === link.label} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding sx={{ pl: 4 }}>
                    {link.children.map((child) => (
                      <NavLink
                        key={child.label}
                        to={child.path}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                        onClick={toggleDrawer(false)}
                      >
                        <ListItemButton>
                          <ListItemIcon>{child.icon}</ListItemIcon>
                          <ListItemText primary={child.label} />
                        </ListItemButton>
                      </NavLink>
                    ))}
                  </List>
                </Collapse>
              </>
            ) : (
              <NavLink
                to={link.path}
                key={link.label}
                style={{ textDecoration: 'none', color: 'inherit' }}
                onClick={toggleDrawer(false)}
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{link.icon}</ListItemIcon>
                    <ListItemText primary={link.label} />
                  </ListItemButton>
                </ListItem>
              </NavLink>
            )}
          </div>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="Navbar">
      <MenuIcon onClick={toggleDrawer(true)} sx={{ cursor: 'pointer' }} />
      <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
        {drawerList()}
      </Drawer>
    </div>
  );
};

export default Side;
