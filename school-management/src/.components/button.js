import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">School MS</Link>
        <div>
          <Link className="btn btn-outline-light me-2" to="/">Dashboard</Link>
          <Link className="btn btn-outline-light me-2" to="/students">Students</Link>
          <Link className="btn btn-outline-light" to="/teachers">Teachers</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;