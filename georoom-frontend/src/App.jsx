import { useEffect, useState } from "react";
import "./App.css";

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
        setMessage("⚠️ Could not connect to backend");
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>GeoRoom Frontend</h1>
      <p>Welcome to the project 🚀</p>

      {loading ? (
        <p>Loading backend response...</p>
      ) : (
        <p>Backend says: <strong>{message}</strong></p>
      )}
    </div>
  );
}

export default App;
