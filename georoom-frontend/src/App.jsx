import { Outlet } from "react-router-dom";
import "./App.css";

// Import Navbar
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Navbar is always visible */}
      <Navbar />

      {/* Child routes (Landing, Home, Login, Dashboard) will render here */}
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
