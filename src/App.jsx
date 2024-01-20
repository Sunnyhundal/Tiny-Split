import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingRoute from "./routes/LandingRoute";
import Header from "./components/header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
