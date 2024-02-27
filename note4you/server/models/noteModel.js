const mongoose = require("mongoose");
const noteSchema = new mongoose.Schema(
  {
    title: String,
    message: String,
    author: String,
  },
  { strict: true }
);
const Note = mongoose.models.notes || mongoose.model("notes", noteSchema);
module.exports = Note;
