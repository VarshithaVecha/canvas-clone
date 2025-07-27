import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetail";
import CalendarPage from "./pages/Calendar";
import Inbox from "./pages/Inbox";
import Help from "./pages/Help";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  const handleMenuClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleNavigate = () => {
    setShowWelcome(false);
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setSidebarOpen(true);
    }
  }, []);

  return (
    <Router>
      <div className="app-container d-flex">
        <button
          className="menu-button d-md-none position-absolute top-0 start-0 m-3 z-3  border-0 p-2"
          onClick={handleMenuClick}
        >
          <img
            src="/hamburger-icon.png"
            alt="menu"
            className="menu-icon"
            style={{ width: "30px", height: "30px" }}
          />
        </button>
        <Sidebar isOpen={sidebarOpen} onNavigate={handleNavigate} />
        <div className="main-content flex-grow-1">
          {showWelcome ? (
            <div className="welcome-screen d-flex justify-content-center align-items-center vh-100">
              <div className="text-center">
                <h1 className="mb-4">Welcome back, student!</h1>
                <button
                  className="btn fs-5 px-4 py-2"
                  onClick={() => setShowWelcome(false)}
                >
                  Enter →
                </button>
              </div>
            </div>
          ) : (
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:id" element={<CourseDetails />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/inbox" element={<Inbox />} />
              <Route path="/help" element={<Help />} />
            </Routes>
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
