import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import api from "../services/api";

function CreateTicket() {

    const navigate = useNavigate();

    const [ticket, setTicket] = useState({
        title: "",
        description: "",
        priority: "LOW"
    });

    const handleChange = (e) => {
        setTicket({
            ...ticket,
            [e.target.name]: e.target.value
        });
    };

    const createTicket = async () => {

        try {

            const token = localStorage.getItem("token");

            await api.post("/tickets", ticket, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            alert("Ticket Created Successfully");

            navigate("/tickets");

        } catch (error) {

            console.log(error);

            alert("Failed to create ticket");

        }

    };

    return (

        <>

        <Navbar/>

        <div className="container mt-5">

            <div className="card shadow p-4">

                <h2 className="mb-4">
                    Create New Ticket
                </h2>

                <input
                    className="form-control mb-3"
                    placeholder="Ticket Title"
                    name="title"
                    onChange={handleChange}
                />

                <textarea
                    className="form-control mb-3"
                    rows="5"
                    placeholder="Ticket Description"
                    name="description"
                    onChange={handleChange}
                />

                <select
                    className="form-select mb-3"
                    name="priority"
                    onChange={handleChange}
                >

                    <option value="LOW">LOW</option>
                    <option value="MEDIUM">MEDIUM</option>
                    <option value="HIGH">HIGH</option>

                </select>

                <button
                    className="btn btn-success"
                    onClick={createTicket}
                >
                    Create Ticket
                </button>

            </div>

        </div>

        </>

    );

}

export default CreateTicket;