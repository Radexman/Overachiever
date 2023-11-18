import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar/Navbar";
import MobileNavbar from "./components/layout/MobileNavbar/MobileNavbar";
import Home from "./components/Pages/Home/Home";
import Tasks from "./components/Pages/Tasks/Tasks";
import Stats from "./components/Pages/Stats/Stats";
import About from "./components/Pages/About/About";
import { AppContextProvider } from "./Context/AppContext";

const App = () => {
  return (
    <AppContextProvider>
      <Router>
        <div className="min-h-screen">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/stats" element={<Stats />} />
              <Route path="/about" element={<About />} />
              {/* @TODO Add Notfound Component */}
            </Routes>
          </main>
          <MobileNavbar />
        </div>
      </Router>
    </AppContextProvider>
  );
};

export default App;
