import React from "react";
import { DarkModeProvider } from "./Components/DarkModeContext";
import Header from "./Components/Header";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import PopularAreas from "./Sections/PopularAreas";
import Properties from "./Sections/Properties";
import Services from "./Sections/Services";
import Clients from "./Sections/Clients";
import Contact from "./Sections/Contact";
import Footer from "./Components/Footer"

const App = () => {
  return (
    <>
      <DarkModeProvider>
        <Header />
        <Hero />
        <About />
        <PopularAreas />
        <Properties />
        <Services />
        <Clients />
        <Contact />
        <Footer />
      </DarkModeProvider>
    </>
  );
};

export default App;
