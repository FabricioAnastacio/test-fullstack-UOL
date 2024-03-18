import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './styles/App.css';
import Customers from './pages/Customers';

function App() {
  return (
    <Routes>
      <Route exact path="/" Component={ Customers } />
    </Routes>
  );
}

export default App;
