import "./App.css";
import Footer from "./components/Footer";
import Meet from "./components/Meet";
import WhatWhy from "./components/WhatWhy";
import VisitProfile from "./components/VisitProfile";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Unlock from "./components/Unlock";
import Key from "./components/Key";
import Vision from "./components/Vision";
import BackToTop from "./components/BackToTop";
import Faq from "./components/Faq";

function App() {
  return (
    <>
      <Hero />
      <Meet />
      <Services />
      <Key />
      <Vision />
      <Unlock />
      <WhatWhy />
      <Faq />
      <VisitProfile />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
