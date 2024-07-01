import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import ImageProcessing from "./components/ImageProcessing";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutUs />
      
      <ImageProcessing />
    </div>
  );
}

export default App;
