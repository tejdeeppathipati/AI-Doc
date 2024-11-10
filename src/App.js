// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import AdditionalDetails from './pages/AdditionalDetails';
import Dashboard from './pages/Dashboard'; 
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  return (
    <Router>
      <LanguageSwitcher />
      <Routes>
        <Route path="/" element={<Login />} /> {/* Set Login as the default */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/additional-details" element={<AdditionalDetails />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Add Dashboard route */}
      </Routes>
    </Router>
  );
}
export default App;
