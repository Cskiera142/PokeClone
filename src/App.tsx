import { useState } from "react";
import "./index.css";
import Navigation from "./components/navigation/Navigation";
import ContentBody from "./components/contentBody/ContentBody";

function App() {
  return (
    <>
      <Navigation />
      <ContentBody />
    </>
  );
}

export default App;
