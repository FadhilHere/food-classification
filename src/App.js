import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import ImageProcessing from "./components/ImageProcessing";
import DataDisplay from "./components/Card";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutUs />
      <DataDisplay />
      <ImageProcessing />
    </div>
  );
}

export default App;
