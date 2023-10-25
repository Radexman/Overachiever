import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect, ChangeEvent } from "react";
import Navbar from "./components/layout/Navbar/Navbar";
import MobileNavbar from "./components/layout/Navbar/MobileNavbar";
import Home from "./components/Pages/Home/Home";
import Tasks from "./components/Pages/Tasks/Tasks";
import Stats from "./components/Pages/Stats/Stats";
import About from "./components/Pages/About/About";
import { Task } from "./Types/Task";

const App = () => {
  const [taskList, setTaskList] = useState([
    {
      task: "Clean bathroom",
      important: true,
    },
    {
      task: "Clean Kitchen",
      important: true,
    },
    {
      task: "Buy groceries",
      important: false,
    },
  ]);
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

  const addTask = (newTask: Task) => {
    setTaskList([...taskList, newTask]);
  };

  return (
    <Router>
      <div className="min-h-screen">
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/tasks"
              element={<Tasks handleAdd={addTask} taskList={taskList} />}
            />
            <Route path="/stats" element={<Stats />} />
            <Route path="/about" element={<About />} />
            {/* @TODO Add Notfound Component */}
          </Routes>
        </main>
        <MobileNavbar />
      </div>
    </Router>
  );
};

export default App;
