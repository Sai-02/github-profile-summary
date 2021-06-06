import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Hero />
      </HashRouter>
    </>
  );
}

export default App;
