import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <Link className="navbar-brand" to="/dashboard">
          Enterprise HelpDesk
        </Link>

        <div className="navbar-nav ms-auto">

          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>

          <Link className="nav-link" to="/tickets">
            Tickets
          </Link>

          <Link className="nav-link" to="/create-ticket">
            Create Ticket
          </Link>

          <Link className="nav-link" to="/profile">
            Profile
          </Link>

          <button
            className="btn btn-danger ms-3"
            onClick={logout}
          >
            Logout
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;