import React from 'react';
import { Route } from 'react-router-dom';
import ManagerLayout from '../screens/ManagerLayout';
import Dashboard from '../screens/ManagerDashboard';
import Projects from '../screens/Projects';
import Performance from '../screens/Performance';
import Companies from '../screens/Companies';

const ManagerRoutes = (
  <Route path="/manager" element={<ManagerLayout />}>
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="projects" element={<Companies />}>
      <Route path="companies" element={<Companies />} />
    </Route>
    <Route path="performance" element={<Performance />} />
  </Route>
);

export default ManagerRoutes;
