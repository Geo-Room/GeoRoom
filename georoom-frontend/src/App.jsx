import { useEffect, useState } from "react";
<<<<<<< HEAD
import { Outlet } from "react-router-dom";
import "./App.css";

// Import Navbar
import Navbar from "./components/Navbar";

import Landing from "./Pages/Landing"
=======
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Import your pages
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
>>>>>>> dea825d3a2d1311ba5a2ba334883878b2db8d6ac

function App() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Call your backend API
    fetch("http://localhost:5000/api/test")
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching from backend:", err);
        setMessage("⚠ Could not connect to backend");
        setLoading(false);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <h1>GeoRoom Frontend</h1>
        <p>Welcome to the project 🚀</p>

<<<<<<< HEAD
      {loading ? (
        <p>Loading backend response...</p>
      ) : (
        <p>
          Backend says: <strong>{message}</strong>
        </p>
      )}

      {/* Navbar is always visible */}
      <Navbar />

      {/* Child routes (Home, Login, Dashboard) will render here */}
      <Outlet />
    </div>
=======
        {loading ? (
          <p>Loading backend response...</p>
        ) : (
          <p>
            Backend says: <strong>{message}</strong>
          </p>
        )}

        {/* Navigation */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
>>>>>>> dea825d3a2d1311ba5a2ba334883878b2db8d6ac
  );
}

export default App;