import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Import your pages
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";

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
  );
}

export default App;