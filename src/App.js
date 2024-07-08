import './App.css';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Vision from './components/Vision';
import Frequently from "./components/Frequently";
import Meet from "./components/Meet";
import WhatWhy from './components/WhatWhy';
import VisitProfile from './components/VisitProfile';

function App() {
  return (
    <div>
      <Hero />
      <Meet/>
      <Vision/>
      <Frequently/>
      <VisitProfile/>
      <WhatWhy/>
    </div>
  );
}

export default App;
