import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";

function Tickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await api.get("/tickets", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTickets(response.data.tickets);
    } catch (error) {
      console.log(error);
      alert("Failed to fetch tickets");
    }
  };

  const deleteTicket = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await api.delete(`/tickets/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Ticket Deleted Successfully");

      fetchTickets();
    } catch (error) {
      console.log(error);
      alert("Failed to delete ticket");
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <h2 className="mb-4 text-center">
          My Tickets
        </h2>

       <table className="table table-hover">

          <thead className="table-dark">

            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Actions</th>
            </tr>

          </thead>

          <tbody>

            {tickets.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center">
                  No Tickets Found
                </td>
              </tr>
            ) : (
              tickets.map((ticket) => (
                <tr key={ticket.id}>
                  <td>{ticket.title}</td>
                  <td>{ticket.description}</td>
                  <td>{ticket.status}</td>
                  <td>{ticket.priority}</td>

                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteTicket(ticket.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}

          </tbody>

        </table>

      </div>
    </>
  );
}

export default Tickets;