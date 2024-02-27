const express = require("express");
const router = express.Router();
const { createNote, getNote } = require("../controller/noteController");
const verifyToken = require("../middleware/authMiddleware"); // Import the middleware correctly

router.post("/api/note/create", verifyToken, createNote);
router.get("/api/note/view", verifyToken, getNote);

module.exports = router;
