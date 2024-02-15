import { useState } from "react";
import "./index.css";
import Navigation from "./components/navigation/Navigation";
import ContentBody from "./components/contentBody/ContentBody";

function App() {
  return (
    <div id="App">
      <Navigation />
      <div id="content-center">
        <ContentBody />
      </div>
    </div>
  );
}

export default App;
