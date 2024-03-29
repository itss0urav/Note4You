import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname.toLowerCase();
  console.log(path);

  let user = JSON.parse(sessionStorage.getItem("user"));

  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
    navigate("/login");
  };

  if (path === "/" || path === "/login" || path === "/signup") {
    return null;
  }
  return (
    <nav className="">
      <div className=" backdrop-blur-md  bg-black rounded-md bg-opacity-30 container px-6 py-4 mx-auto">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-semibold text-white">
              <Link className="hover:text-cyan-400" to="/home">
                Note4You
              </Link>
            </div>
          </div>

          <div className="flex-1 md:flex md:items-center md:justify-between">
            <div className=" flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
             <Link
                className="hover:text-cyan-400 px-2 py-1 mx-2 mt-2 text-sm font-medium text-white md:mt-0"
                to="/createnote"
              >
                Create Notes
              </Link>
           {/*     <Link
                className="hover:text-cyan-400 px-2 py-1 mx-2 mt-2 text-sm font-medium text-white md:mt-0"
                to="/TaskManaging"
              >
                Manage
              </Link> */}
            </div>
          </div>
          {/* User info or login button */}
          {user ? (
            <div className="flex items-center">
              <div className="text-cyan-400 mr-4 font-bold">{user.username}</div>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
