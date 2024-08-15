import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './login/Login';

function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
