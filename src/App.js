import HomePage from "./components/homepage/HomePage";
import NavBar from "./components/navBar/NavBar";
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
     </Router>
    </div>
  );
}

export default App;
