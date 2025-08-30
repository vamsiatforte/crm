import React from 'react';
import { Route } from 'react-router-dom';
import ManagerLayout from '../screens/ManagerLayout';
import Dashboard from '../screens/ManagerDashboard';
import Projects from '../screens/Projects';
import Performance from '../screens/Performance';
import Companies from '../screens/Companies';
import Setup from '../screens/SetUp';
import WebPortal from '../screens/WebPortal';

const ManagerRoutes = (
  <Route path="/manager" element={<ManagerLayout />}>
    <Route path="dashboard" element={<Dashboard />} />
    
    <Route path="projects" element={<Projects />}>
      <Route path="companies" element={<Companies />} />
      <Route path="setup" element={<Setup />} />
      <Route path="WebPortal" element={<WebPortal/>} />
    </Route>

    <Route path="performance" element={<Performance />} />
  </Route>
);

export default ManagerRoutes;
