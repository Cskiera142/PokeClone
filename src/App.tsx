import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import LandingPage from "./pages/landingPage/LandingPage";
import News from "./pages/news/News";
import { BASE_URL } from "./config";
import "./index.css";
import NationalPokedex from "./pages/nationalPokedex/NationalPokedex";

function App() {
  return (
    <div id="App">
      <Navigation />
      <div id="content-center">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/news" element={<News />} />
          <Route
            path="/List_of_Pokemon_by_National_Pokedex_number"
            element={<NationalPokedex />}
          />
          {/* <Route path="/forums" element={<LandingPage />} />
          <Route path="/discord" element={<LandingPage />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
