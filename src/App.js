import HomePage from "./components/homepage/HomePage";
import NavBar from "./components/navBar/NavBar";
import About from "./components/about/About"
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  // Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
         <NavBar />
        <HomePage />
        <About />
     </Router>
    </div>
  );
}

export default App;
