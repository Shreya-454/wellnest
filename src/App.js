import "./App.css";
import Services from "./components/Services";
import Frequently from "./components/Frequently";
import Hero from "./components/Hero";
import Meet from "./components/Meet";
import VisitProfile from "./components/VisitProfile";

function App() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Meet />
      <Services/>
      <Frequently />
      <VisitProfile />
    </div>
  );
}

export default App;
