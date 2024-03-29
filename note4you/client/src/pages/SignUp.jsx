import React, { useState } from "react";
import axios from "../config/axios";
import v3 from "../assets/v3.mp4";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Note4You.png";

import { toast } from "react-hot-toast";

export default function SignUp() {
  const nav = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Make sure to validate the user input and passwords match
    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match");
    } else if (user.password.length < 8) {
      alert("Password too short");
    } else {
      try {
        const response = await axios.post("/usersignup", user);
        console.log(response.data);
        toast.success("Signup Success");
        setTimeout(() => {
          nav("/login");
        }, 1000);
      } catch (error) {
        console.error(error);
        toast.error("SIgnup failed ! Make sure username and email are unique");
      }
    }
  };

  return (
    <section className="">
      <video
        autoPlay
        muted
        loop
        src={v3}
        className="   absolute inset-0 w-full h-full object-cover z-[-1]"
      ></video>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className=" backdrop-blur-md p-2 rounded-md flex items-center mb-6 text-2xl font-semibold text-white ">
          <img src={logo} className="w-8 h-8 mr-2" alt="logo" />
          Note4You
        </div>
        <div className="w-full   shadow backdrop-blur-md rounded-md md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-sky-300 md:text-2xl ">
              Create your account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  for="username"
                  className="block mb-2 text-sm font-medium text-sky-300 "
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className=" bg-transparent border-cyan-400 border  text-cyan-300 sm:text-sm rounded-lg  block w-full p-2.5  placeholder-cyan-100 "
                  placeholder="Username"
                  required=""
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-sky-300 "
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className=" bg-transparent border-cyan-400 border  text-cyan-300 sm:text-sm rounded-lg  block w-full p-2.5  placeholder-cyan-100 "
                  placeholder="name@company.com"
                  required=""
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-sky-300"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className=" bg-transparent border-cyan-400 border  text-cyan-300 sm:text-sm rounded-lg  block w-full p-2.5  placeholder-cyan-100 "
                  required=""
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  for="confirmPassword"
                  className="block mb-2 text-sm font-medium text-sky-300"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="••••••••"
                  className=" bg-transparent border-cyan-400 border  text-cyan-300 sm:text-sm rounded-lg  block w-full p-2.5  placeholder-cyan-100 "
                  required=""
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className=" bg-black hover:bg-slate-400 hover:bg-opacity-25 bg-opacity-25 w-full text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Sign in
              </button>
              <p className="text-sm font-light text-sky-300">
                Already have an account ?
                <Link
                  to="/Login"
                  className="px-2 text-sky-600 font-medium  hover:underline "
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
