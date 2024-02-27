import React from "react";
import v3 from "../assets/v3.mp4";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
function Introduction() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 to-black animate-fade-in-down">
      <video
        autoPlay
        muted
        loop
        src={v3}
        className=" absolute top-0 left-0 min-w-full min-h-full object-cover z-0"
      ></video>
      <div className="absolute inset-0 bg-gradient-to-center from-transparent via-black to-transparent opacity-50 z-20"></div>
      <div className="absolute top-0 right-0 p-6 space-x-4 z-30">
        <Link
          to="/Signup"
          className="bg-gradient-to-r from-cyan-300 to-sky-500 bg-clip-text text-transparent font-bold hover:text-cyan-300 transition duration-300 py-2 px-3 rounded-md text-lg shadow-white"
        >
          Signup
        </Link>
        <Link
          to="/Login"
          className="bg-gradient-to-r from-cyan-300 to-sky-500 bg-clip-text text-transparent font-bold hover:text-cyan-300 transition duration-300 py-2 px-3 rounded-md text-lg shadow-white"
        >
          Login
        </Link>
        <Link
          to="/Help"
          className="bg-gradient-to-r from-cyan-300 to-sky-500 bg-clip-text text-transparent font-bold hover:text-cyan-300 transition duration-300 py-2 px-3 rounded-md text-lg shadow-white"
        >
          Help
        </Link>
      </div>
      <div className="z-30 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="text-center w-full md:w-1/2 animate-fade-in-left">
          <div className="">
            <h1 className="font-roboto font-extrabold text-4xl md:text-6xl lg:text-8xl bg-gradient-to-r from-cyan-300 to-sky-500 bg-clip-text text-transparent  mb-4 tracking-wide neon-text shadow-white">
              Note4You
            </h1>
            <p className="[text-shadow:0px_0px_10px_var(--tw-shadow-color)] shadow-cyan-500 p-3 backdrop-blur-lg rounded-lg font-bold text-center hidden md:flex bg-gradient-to-r from-cyan-300 to-sky-500 bg-clip-text text-transparent  text-sm md:text-lg lg:text-xl  neon-text ">
              Hello there! We're thrilled to have you here. Note4You is your new
              digital companion designed to make note-taking easy, efficient,
              and enjoyable. Our platform offers a seamless experience for
              creating, managing, and accessing your notes from anywhere,
              anytime. Whether you're jotting down ideas, creating a to-do list,
              or keeping a diary, Note4You is here to simplify your life and
              keep your thoughts organized.
            </p>
          </div>
        </div>
      </div>
      <p className="[text-shadow:0px_0px_10px_var(--tw-shadow-color)] shadow-cyan-500 backdrop-blur-lg rounded-lg  font-bold text-center z-50 p-2 md:hidden flex bg-gradient-to-r from-cyan-300 to-sky-500 bg-clip-text text-transparent  text-sm md:text-lg lg:text-xl  neon-text ">
        Hello there! We're thrilled to have you here. Note4You is your new
        digital companion designed to make note-taking easy, efficient, and
        enjoyable. Our platform offers a seamless experience for creating,
        managing, and accessing your notes from anywhere, anytime. Whether
        you're jotting down ideas, creating a to-do list, or keeping a diary,
        Note4You is here to simplify your life and keep your thoughts organized.
      </p>

      <div className="absolute flex bottom-0 right-0 p-1 bg-gradient-to-r from-cyan-300 to-sky-500 bg-clip-text text-transparent font-bold text-sm md:text-lg neon-text  opacity-100">
        Created by @itss0urav <FaGithub className="mx-1 text-cyan-400" />
      </div>
    </div>
  );
}

export default Introduction;
