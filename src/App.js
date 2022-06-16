import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h2>Te toca esperar...</h2>}>
        <Router>
          <Link to="/">
            <button>Home</button>{" "}
          </Link>
          <Link to="/About">
            <button>About</button>{" "}
          </Link>
          <Link to="/Contact">
            <button>Contact</button>{" "}
          </Link>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
