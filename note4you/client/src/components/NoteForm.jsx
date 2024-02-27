import React, { useState } from "react";
import axios from "../config/axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function NoteForm() {
  const nav = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("user"));

  const [note, setNote] = useState({
    title: "",
    message: "",
    author: user.username,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.title && note.message !== "") {
      axios
        .post("/note/create", note)
        .then((response) => {
          console.log("Note created:", response.data);
          toast.success("Note created");
          // Handle successful submission
          setTimeout(() => {
            nav("/home");
          }, 2000);
        })
        .catch((error) => {
          console.error("Error submitting note:", error);
          toast.error("Note creation failed!", error);
          // Handle error
        });
    } else {
      toast.error("All fields must be filled!");
    }
  };

  return (
    <div className="">
      <form className="rounded-md backdrop-blur-md w-sm md:scale-[2] mx-auto">
        <div className="m-6">
          <label
            htmlFor="title"
            className="block py-2 text-sm font-medium text-cyan-300"
          >
            Note Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={note.title}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 md:p-1 w-full"
            placeholder="Title here..."
            required
          />
        </div>
        <div className="m-5">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-cyan-300"
          >
            Your Note
          </label>
          <textarea
            id="message"
            name="message"
            value={note.message}
            onChange={handleChange}
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Leave a Note..."
          />
        </div>
        <button
          onClick={handleSubmit}
          className="m-5 bg-cyan-400 text-cyan-300 hover:text-black hover:bg-cyan-300 hover:bg-opacity-50 backdrop-blur-md inline rounded-md bg-opacity-30 px-2 py-1 text-sm"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
