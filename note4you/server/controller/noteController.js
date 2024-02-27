const Note = require("../models/noteModel");

const createNote = async (req, res) => {
  try {
    const { title, message, author } = req.body;
    console.log("Received data for creating note:", req.body);
    await Note.create({ title, message, author });
    console.log("Note created successfully");
    res.json({ passed: true });
  } catch (error) {
    console.error("Error creating Note:", error);
    res.status(500).json({ passed: false, error: "Internal Server Error" });
  }
};

const getNote = async (req, res) => {
  try {
    const notes = await Note.find();
    console.log("Notes fetched:", notes);
    res.status(200).json({ passed: true, notes });
  } catch (error) {
    console.error("Error fetching notes:", error);
    res.status(500).json({ passed: false, error: "Internal Server Error" });
  }
};

module.exports = {
  createNote,
  getNote,
};
