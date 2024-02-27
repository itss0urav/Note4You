import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div>
      <div>
        <Toaster />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Introduction />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
