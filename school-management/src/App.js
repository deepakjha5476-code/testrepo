import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./.components/Navbar";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/teachers" element={<Teachers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;