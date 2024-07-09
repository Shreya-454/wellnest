import "./App.css";
import Footer from "./components/Footer";
import Frequently from "./components/Frequently";
import Meet from "./components/Meet";
import WhatWhy from './components/WhatWhy';
import VisitProfile from './components/VisitProfile';
import Hero from "./components/Hero";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <Hero />
      <Meet />
      <Services/>
      <WhatWhy/>
      <Frequently />
      <VisitProfile />
      <Footer />
    </div>
  );
}

export default App;
