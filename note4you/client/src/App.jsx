import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Toaster } from "react-hot-toast";
import CreateNotes from "./pages/CreateNotes";

export default function App() {
  console.log(
    " Hi there :) Find me Here \n GitHub: 👉https://github.com/itss0urav",
    " \n LinkedIn: 👉https://www.linkedin.com/in/itssourav/",
    " \n Instagram: 👉https://www.instagram.com/itssourav.dev/",
    " \n Medium: 👉https://itss0urav.medium.com/"
  );

  return (
    <div>
      <div>
        <Toaster />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Introduction />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/createnote" element={<CreateNotes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
