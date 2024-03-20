import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './styles/App.css';
import Customers from './pages/Customers';
import RegisterCustomers from './pages/RegisterCustomers';

function App() {
  return (
    <Routes>
      <Route exact path="/" Component={ Customers } />
      <Route exact path="/adduser" Component={ RegisterCustomers } />
    </Routes>
  );
}

export default App;
