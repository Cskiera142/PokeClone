import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import LandingPage from "./pages/landingPage/LandingPage";
import "./index.css";

function App() {
  return (
    <div id="App">
      <Navigation />
      <div id="content-center">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/news" element={<LandingPage />} />
          <Route path="/forums" element={<LandingPage />} />
          <Route path="/discord" element={<LandingPage />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
