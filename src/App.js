import './App.css';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Vision from './components/Vision';
import Frequently from "./components/Frequently";
import Meet from "./components/Meet";
import WhatWhy from './components/WhatWhy';
import VisitProfile from './components/VisitProfile';
import Unlock from './components/Unlock';
import Key from './components/Key';

function App() {
  return (
    <div>
      <Hero />
      <Meet />
      <Key/>
      <Vision/>
      <Frequently/>
      <VisitProfile />
      <Unlock/>
      <WhatWhy />
    </div>
  );
}

export default App;
