import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<>Home page</>} />
            <Route path="about" element={<>page 1</>} />
        </Routes>
    </Router>
  );
}

export default App;
