import React from 'react';

// pages
import Dashboard from './pages/Dashboard';
import Workout from './pages/Workout';
import Plan from './pages/Plan';
import Profile from './pages/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/workout' element={<Workout />} />
        <Route path='/plan' element={<Plan />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
