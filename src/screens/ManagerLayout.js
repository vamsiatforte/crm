import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNavBar from '../components/NavBar';
import SideNavBar from '../components/SideNavBar';
import './ManagerLayout.css';  // Import the CSS file

const ManagerLayout = () => {
  return (
    <div className="manager-layout">
      {/* SVG wave at top */}
      <div className="svg-wrapper">
        <svg
          id="wave"
          style={{ transform: 'rotate(180deg)', transition: '0.3s', width: '100%', height: '741px', display: 'block' }}
          viewBox="0 0 1440 490"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgba(30, 43, 62, 1)" offset="0%" />
              <stop stopColor="rgba(17, 155, 213, 1)" offset="100%" />
            </linearGradient>
          </defs>
          <path
            style={{ transform: 'translate(0, 0px)', opacity: 1 }}
            fill="url(#sw-gradient-0)"
            d="M0,294L80,310.3C160,327,320,359,480,326.7C640,294,800,196,960,130.7C1120,65,1280,33,1440,89.8C1600,147,1760,294,1920,326.7C2080,359,2240,278,2400,269.5C2560,261,2720,327,2880,326.7C3040,327,3200,261,3360,204.2C3520,147,3680,98,3840,89.8C4000,82,4160,114,4320,155.2C4480,196,4640,245,4800,220.5C4960,196,5120,98,5280,89.8C5440,82,5600,163,5760,220.5C5920,278,6080,310,6240,326.7C6400,343,6560,343,6720,351.2C6880,359,7040,376,7200,392C7360,408,7520,425,7680,367.5C7840,310,8000,180,8160,122.5C8320,65,8480,82,8640,89.8C8800,98,8960,98,9120,122.5C9280,147,9440,196,9600,236.8C9760,278,9920,310,10080,302.2C10240,294,10400,245,10560,220.5C10720,196,10880,196,11040,204.2C11200,212,11360,229,11440,236.8L11520,245L11520,490L11440,490C11360,490,11200,490,11040,490C10880,490,10720,490,10560,490C10400,490,10240,490,10080,490C9920,490,9760,490,9600,490C9440,490,9280,490,9120,490C8960,490,8800,490,8640,490C8480,490,8320,490,8160,490C8000,490,7840,490,7680,490C7520,490,7360,490,7200,490C7040,490,6880,490,6720,490C6560,490,6400,490,6240,490C6080,490,5920,490,5760,490C5600,490,5440,490,5280,490C5120,490,4960,490,4800,490C4640,490,4480,490,4320,490C4160,490,4000,490,3840,490C3680,490,3520,490,3360,490C3200,490,3040,490,2880,490C2720,490,2560,490,2400,490C2240,490,2080,490,1920,490C1760,490,1600,490,1440,490C1280,490,1120,490,960,490C800,490,640,490,480,490C320,490,160,490,80,490L0,490Z"
          />
        </svg>
      </div>

      {/* Navbar */}
      <TopNavBar />

      {/* Side + Main content */}
      <div className="content-wrapper">
        <SideNavBar />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ManagerLayout;
