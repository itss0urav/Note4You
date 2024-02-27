import React from "react";
import v3 from "../assets/v3.mp4";
import Navbar from "../components/Navbar";
import NoteMapper from "../components/NoteMapper";
export default function Home() {
  return (
    <div>
      <div className="">
        <video
          autoPlay
          muted
          loop
          src={v3}
          className=" absolute top-0 left-0 min-w-full min-h-full object-cover z-[-1]"
        ></video>
        <div className="">
          <Navbar />
        </div>
        <div className="">
          <NoteMapper />
        </div>
      </div>
    </div>
  );
}
