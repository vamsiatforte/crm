import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button, Collapse } from '@mui/material';
import navLinks from '../data/navLinks';
import manager from '../images/manager.png';
import styles from './sideNavBar.module.css'; 

const SideNavBar = () => {
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [showUserOptions, setShowUserOptions] = useState(false);
  const navigate = useNavigate();

  const toggleSubmenu = (label) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  const toggleUserOptions = () => {
    setShowUserOptions(!showUserOptions);
  };

  return (
   <div className={styles.sideNav} style={{ borderRadius: '0px 9px 0px 0px' }}>
      <div className='d-flex justify-content-center'>
        <img src={manager} alt="Manager" className={styles.managerLogo} />
      </div>

      <div className='d-flex justify-content-center align-items-center'>
        <p className={styles.managerTitle}>project manager</p>
        <span
          onClick={toggleUserOptions}
          style={{
            color: 'black',
            cursor: 'pointer',
            marginLeft: '6px',
            fontSize: '12px',
            lineHeight: '1',
            paddingBottom: '4px',
          }}
        >
          {showUserOptions ? '▲' : '▼'}
        </span>
      </div>

      {showUserOptions && (
        <Button fullWidth>Logout</Button>
      )}

      <p className={styles.managerEmail}>pm@sales-people.com</p>

      {navLinks.map((link) => (
        <div key={link.label}>
          {link.children ? (
            <>
              <Button
                fullWidth
                onClick={() => toggleSubmenu(link.label)}
                startIcon={link.icon}
                style={{
                  justifyContent: 'flex-start',
                  backgroundColor: 'transparent',
                  color: 'black',
                  display: 'flex',
                  gap: '8px',
                }}
              >
                {link.label}
              </Button>
              <Collapse in={openSubmenu === link.label} timeout="auto" unmountOnExit>
                <div className={styles.submenu}>
                  {link.children.map((child) => (
                    <NavLink
                      to={child.path}
                      key={child.label}
                      style={{ textDecoration: 'none' }}
                    >
                      {({ isActive }) => (
                        <Button
                          fullWidth
                          onClick={() => navigate(child.path)}
                          style={{
                            justifyContent: 'flex-start',
                            display: 'flex',
                            gap: '8px',
                            backgroundColor: isActive ? '#003366' : 'transparent',
                            color: isActive ? 'white' : 'black',
                          }}
                        >
                          <span style={{ marginRight: 8, fontSize: 10 }}>●</span>
                          {child.label}
                        </Button>
                      )}
                    </NavLink>
                  ))}
                </div>
              </Collapse>
            </>
          ) : (
            <NavLink to={link.path} style={{ textDecoration: 'none' }}>
              {({ isActive }) => (
                <Button
                  fullWidth
                  onClick={() => navigate(link.path)}
                  startIcon={link.icon}
                  style={{
                    justifyContent: 'flex-start',
                    backgroundColor: isActive ? '#003366' : 'transparent',
                    color: isActive ? 'white' : 'black',
                    display: 'flex',
                    gap: '8px',
                  }}
                >
                  {link.label}
                </Button>
              )}
            </NavLink>
          )}
        </div>
      ))}
    </div>
  );
};

export default SideNavBar;
