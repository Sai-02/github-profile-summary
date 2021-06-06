import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Router from "react-router-dom";
import { HashRouter } from "react-router-dom";
// import { createHashHistory } from "history";
function App() {
  return (
    <>
      {/* <Router>
        <Navbar />
        <Hero />
      </Router> */}
      <HashRouter>
        <Navbar />
        <Hero />
      </HashRouter>
    </>
  );
}

export default App;
