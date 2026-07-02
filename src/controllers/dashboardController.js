const prisma = require("../config/prisma");

const getDashboard = async (req, res) => {
    try {
        const totalTickets = await prisma.ticket.count();

        const openTickets = await prisma.ticket.count({
            where: {
                status: "OPEN"
            }
        });

        const closedTickets = await prisma.ticket.count({
            where: {
                status: "CLOSED"
            }
        });

        const highPriority = await prisma.ticket.count({
            where: {
                priority: "HIGH"
            }
        });

        res.json({
            success: true,
            totalTickets,
            openTickets,
            closedTickets,
            highPriority
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

module.exports = { getDashboard };