import "./App.css";
import Services from "./components/Services";
import Frequently from "./components/Frequently";
import Meet from "./components/Meet";
import WhatWhy from './components/WhatWhy';
import VisitProfile from './components/VisitProfile';

function App() {
  return (
    <div>
      <Hero />
      <Meet />
      <Services/>
      <WhatWhy/>
      <Frequently />
      <VisitProfile />
    </div>
  );
}

export default App;
