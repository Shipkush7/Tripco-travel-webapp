/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Packages from "./components/Packages";
import Popular from "./components/Popular";
import Discover from "./components/Discover";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
 return (
    <div>
      <Navbar />
      <Hero />
      <Featured />
      <Packages />
      <Popular />
      <Discover />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
