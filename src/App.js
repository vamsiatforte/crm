import React from 'react';
import {  Routes, Route, Navigate } from 'react-router-dom';
import ManagerRoutes from './routes/ManagerRouter'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Example from './screens/Example'; 
import Companies from './screens/Companies';
import CompaniesInformation from './screens/CompaniesInformation';

function App() {
  return (
      // <Routes>
      //   <Route path="/" element={<Navigate to="/manager/dashboard" replace />} />
        
      //   {ManagerRoutes}
      // </Routes>
       <CompaniesInformation/>
  );
}

export default App;
