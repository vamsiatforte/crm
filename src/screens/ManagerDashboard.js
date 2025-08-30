import React, { useEffect, useState } from 'react';
import styles from './ManagerDashboard.module.css';
const ManagerDashboard = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const berlinTime = new Date().toLocaleString('de-DE', {
        timeZone: 'Europe/Berlin',
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });

      setCurrentTime(berlinTime);
    };

    updateTime(); 
    const interval = setInterval(updateTime, 1000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="container">
      <h1 className="text-white">Manager Dashboard</h1>
      <p className="text-white">{currentTime}</p>
      <div className={`bg-white pl-1 d-flex  justify-content-start ${styles.welcomeNamediv}`}>
        <p>hello</p>
      </div>
      <p className="text-white">© 2023 Sales People GmbH. Alle Rechte vorbehalten.</p>
    </div>
  );
};

export default ManagerDashboard;
