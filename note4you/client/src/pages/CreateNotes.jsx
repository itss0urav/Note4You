import React from "react";
import NoteForm from "../components/NoteForm";
import v3 from "../assets/v3.mp4";
import Navbar from "../components/Navbar";
export default function CreateNotes() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 to-black animate-fade-in-down">
      <video
        autoPlay
        muted
        loop
        src={v3}
        className=" absolute top-0 left-0 min-w-full min-h-full object-cover z-0"
      ></video>
      
      <div className="">
        <NoteForm />
      </div>
    </div>
  );
}
