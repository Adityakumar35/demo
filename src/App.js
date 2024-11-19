
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Profile from "./components/profile";
import Leaderboard from "./components/leaderboards";
import Tournament from "./components/tournaments";

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Profile</Link></li>
          <li><Link to="/leaderboard">Leaderboard</Link></li>
          <li><Link to="/tournament">Tournament</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/tournament" element={<Tournament />} />
      </Routes>
    </Router>
  );
};

export default App;

