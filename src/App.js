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
import Hotels from "./components/hotels/Hotels";
import Gallery from "./components/gallery/Gallery";

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
        <Hotels />
        <Gallery />
        
        
     </Router>
    </div>
  );
}

export default App;
