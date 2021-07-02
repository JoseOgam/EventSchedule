import HomePage from "./components/homepage/HomePage";
import NavBar from "./components/navBar/NavBar";
import About from "./components/about/About"
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  // Link
} from "react-router-dom";
import Speakers from "./components/speakers/Speakers";
import Schedule from "./components/createSchedule/Schedule";
import EventVenue from "./components/eventVenue/EventVenue";

function App() {
  return (
    <div className="App">
      <Router>
         <NavBar />
        <HomePage />
        <About />
        <Speakers />
        <Schedule />
        <EventVenue />
     </Router>
    </div>
  );
}

export default App;
