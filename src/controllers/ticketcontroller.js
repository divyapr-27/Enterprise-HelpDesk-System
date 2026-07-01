const prisma = require("../config/prisma");

// Create Ticket
const createTicket = async (req, res) => {
    try {
        const { title, description, priority } = req.body;

        const ticket = await prisma.ticket.create({
            data: {
                title,
                description,
                priority
            }
        });

        res.status(201).json({
            success: true,
            message: "Ticket Created Successfully",
            ticket
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

// Get All Tickets
const getAllTickets = async (req, res) => {
    try {
        const tickets = await prisma.ticket.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });

        res.json({
            success: true,
            count: tickets.length,
            tickets
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

// Get Single Ticket
const getTicketById = async (req, res) => {
    try {
        const ticket = await prisma.ticket.findUnique({
            where: {
                id: req.params.id
            }
        });

        if (!ticket) {
            return res.status(404).json({
                success: false,
                message: "Ticket Not Found"
            });
        }

        res.json({
            success: true,
            ticket
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

// Update Ticket
const updateTicket = async (req, res) => {
    try {
        const { title, description, status, priority } = req.body;

        const ticket = await prisma.ticket.update({
            where: {
                id: req.params.id
            },
            data: {
                title,
                description,
                status,
                priority
            }
        });

        res.json({
            success: true,
            message: "Ticket Updated Successfully",
            ticket
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

// Delete Ticket
const deleteTicket = async (req, res) => {
    try {
        await prisma.ticket.delete({
            where: {
                id: req.params.id
            }
        });

        res.json({
            success: true,
            message: "Ticket Deleted Successfully"
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

module.exports = {
    createTicket,
    getAllTickets,
    getTicketById,
    updateTicket,
    deleteTicket
};