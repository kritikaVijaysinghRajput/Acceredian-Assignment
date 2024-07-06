import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import HowItRefer from "./components/HowItRefer";
import Benefits from "./components/Benefits";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import ReferralForm from "./components/ReferralForm";
import "./App.css";

const App = () => {
  const [open, setOpen] = useState(false);

  const handleReferNow = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <HeroSection handleReferNow={handleReferNow} />
      <HowItRefer />
      <Benefits />
      <FAQ />
      <Footer />
      <ReferralForm open={open} handleClose={handleClose} />
    </div>
  );
};

export default App;
