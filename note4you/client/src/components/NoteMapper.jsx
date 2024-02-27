import React, { useState, useEffect } from "react";
import axios from "../config/axios";

export default function NoteMapper() {
  const [notes, setNotes] = useState([]);
  const user = JSON.parse(sessionStorage.getItem("user"));

  useEffect(() => {
    fetchNotes();
    const refreshInterval = setInterval(fetchNotes, 2000);

    // Clean up interval on component unmount
    return () => clearInterval(refreshInterval);
  }, []);
  const fetchNotes = async () => {
    try {
      const response = await axios.get("/note/view");
      console.log("Response data:", response.data); // Debugging
      if (response.data.passed === true && Array.isArray(response.data.notes)) {
        const filteredNotes = response.data.notes.filter(
          (notes) => notes.author === user.username
        );
        setNotes(filteredNotes);
      } else {
        console.error("Invalid response data structure:", response.data);
      }
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">NoteMapper</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map((note, index) => (
          <div key={index} className="bg-white shadow-md p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">{note.title}</h2>
            <p className="text-gray-700">{note.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
