import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Dashboard from './pages/Dashboard';
import Workout from './pages/Workout';
import Plan from './pages/Plan';
import Profile from './pages/Profile';

// sub-pages
import AddWorkout from './pages/workout/AddWorkout';
import EditWorkout from './pages/workout/EditWorkout';
import ViewWorkout from './pages/workout/ViewWorkout';
import AddPlan from './pages/plan/AddPlan';
import EditPlan from './pages/plan/EditPlan';
import ViewPlan from './pages/plan/ViewPlan';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/workout/*' element={<WorkoutRoutes />} />
        <Route path='/plan/*' element={<PlanRoutes />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

const WorkoutRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Workout />} />
      <Route path='/add' element={<AddWorkout />} />
      <Route path='/view' element={<ViewWorkout />} />
      <Route path='/edit' element={<EditWorkout />} />
    </Routes>
  );
};

const PlanRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Plan />} />
      <Route path='/add' element={<AddPlan />} />
      <Route path='/view' element={<ViewPlan />} />
      <Route path='/edit' element={<EditPlan />} />
    </Routes>
  );
};

export default App;
