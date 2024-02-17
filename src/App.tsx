import { useState } from "react";
import "./index.css";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import BannerAd from "./components/bannerAd/BannerAd";
import LandingPageContentBody from "./views/contentBody/LandingPageContentBody";

function App() {
  return (
    <div id="App">
      <Navigation />
      <div id="content-center">
        <LandingPageContentBody />
      </div>
      <BannerAd style={{ backgroundColor: "transparent" }} />
      <Footer />
    </div>
  );
}

export default App;
