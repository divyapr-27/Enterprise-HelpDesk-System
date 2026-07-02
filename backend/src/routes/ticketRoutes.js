const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");

const {
    createTicket,
    getAllTickets,
    getTicketById,
    updateTicket,
    deleteTicket
} = require("../controllers/ticketController");

router.post("/", verifyToken, createTicket);
router.get("/", verifyToken, getAllTickets);
router.get("/:id", verifyToken, getTicketById);
router.put("/:id", verifyToken, updateTicket);
router.delete("/:id", verifyToken, deleteTicket);

module.exports = router;