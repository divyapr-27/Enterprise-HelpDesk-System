import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";

function Dashboard() {
  const [dashboard, setDashboard] = useState({
    totalTickets: 0,
    openTickets: 0,
    closedTickets: 0,
    highPriority: 0,
  });

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await api.get("/dashboard", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setDashboard(response.data);
    } catch (error) {
      console.log(error);
      alert("Failed to load dashboard");
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <h2 className="dashboard-title">
          Enterprise HelpDesk Dashboard
        </h2>

        <div className="row">

          <div className="col-md-3">
            <div className="card shadow text-center border-primary">
              <div className="card-body">
                <h5>Total Tickets</h5>
                <h1>{dashboard.totalTickets}</h1>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow text-center border-success">
              <div className="card-body">
                <h5>Open Tickets</h5>
                <h1>{dashboard.openTickets}</h1>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow text-center border-warning">
              <div className="card-body">
                <h5>Closed Tickets</h5>
                <h1>{dashboard.closedTickets}</h1>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow text-center border-danger">
              <div className="card-body">
                <h5>High Priority</h5>
                <h1>{dashboard.highPriority}</h1>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-5">

          <div className="card shadow">

            <div className="card-body">

              <h4>Welcome 👋</h4>

              <p>
                Welcome to the Enterprise HelpDesk System.
              </p>

              <p>
                Use the navigation bar above to:
              </p>

              <ul>
                <li>Create a new ticket</li>
                <li>View all tickets</li>
                <li>Update ticket status</li>
                <li>Delete tickets</li>
                <li>View your profile</li>
              </ul>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default Dashboard;