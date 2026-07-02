const express = require("express");
const router = express.Router();

const { register, login } = require("../controllers/authController");
const verifyToken = require("../middleware/authMiddleware");

router.post("/register", register);
router.post("/login", login);

router.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Authentication Route Working"
    });
});

router.get("/profile", verifyToken, (req, res) => {
    res.json({
        success: true,
        user: req.user
    });
});

module.exports = router;