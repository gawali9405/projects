import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileNavigation from "./components/MobileNavigation";

const App = () => {
  return (
    <div className="pb-14 lg:pb-0">
      <Header />
      <main className="pt-15">
        <Outlet />
      </main>

      <Footer />
      <MobileNavigation />
    </div>
  );
};

export default App;
