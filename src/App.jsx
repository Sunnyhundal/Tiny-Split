import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingRoute from "./routes/LandingRoute";
<<<<<<< Updated upstream
=======
import Header from "./components/header";
import Dashboard from "./routes/dashboard";
>>>>>>> Stashed changes

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/" element={<LandingRoute />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
