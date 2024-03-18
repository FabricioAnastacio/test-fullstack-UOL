import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './styles/App.css';

function App() {
  return (
    <Routes>
      <Route exact path="/user" Component={ () => (<h1>USER</h1>) } />
    </Routes>
  );
}

export default App;
