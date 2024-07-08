import './App.css';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Vision from './components/Vision';
import Frequently from "./components/Frequently";
import Meet from "./components/Meet";
import WhatWhy from './components/WhatWhy';

function App() {
  return (
    <div>
      <Nav/>
      <Hero />
      <Meet/>
      <Frequently />
      <Vision />
      <WhatWhy/>
    </div>
  );
}

export default App;
