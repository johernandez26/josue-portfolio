import React from "react";
import { HeroSection } from "./components/HeroSection";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-all">
      <Navbar />
      <HeroSection />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
