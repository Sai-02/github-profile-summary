import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Hero />
      </Router>
    </>
  );
}

export default App;
