import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect, ChangeEvent } from "react";
import Navbar from "./components/layout/Navbar/Navbar";
import Home from "./components/Pages/Home/Home";
import Tasks from "./components/Pages/Tasks/Tasks";
import Stats from "./components/Pages/Stats/Stats";
import About from "./components/Pages/About/About";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme")! : "emerald",
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html")?.setAttribute("data-theme", localTheme!);
  }, [theme]);

  const toggleTheme = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setTheme("night");
    } else {
      setTheme("emerald");
    }
  };

  return (
    <Router>
      <>
        <Navbar toggleTheme={toggleTheme} />
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
