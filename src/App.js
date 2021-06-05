import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Hero />
      </Router>
    </>
  );
}

export default App;
