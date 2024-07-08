import "./App.css";
import Frequently from "./components/Frequently";
import Hero from "./components/Hero";
import Meet from "./components/Meet";
import VisitProfile from "./components/VisitProfile";

function App() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Meet />
      <Frequently />
      <VisitProfile />
    </div>
  );
}

export default App;
