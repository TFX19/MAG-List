// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'; 
import Movies from './pages/Movies'; 

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Movies />} />
    </Routes>
  );
};

export default App;
