import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ClockPage from './pages/ClockPage';
import TimerPage from './pages/TimerPage';
import WeatherPage from './pages/WeatherPage';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clock" element={<ClockPage />} />
          <Route path="/timer" element={<TimerPage />} />
          <Route path="/weather" element={<WeatherPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
