import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar/Navbar";
import Home from "./components/Pages/Home/Home";
import Tasks from "./components/Pages/Tasks/Tasks";
import Stats from "./components/Pages/Stats/Stats";
import About from "./components/Pages/About/About";

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <main className="container mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </>
    </Router>
  );
};

export default App;
