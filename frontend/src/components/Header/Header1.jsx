import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";


const navlinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Books",
    link: "/books",
  },
  {
    title: "Contact",
    link: "/contact",
  },
  {
    title: "About",
    link: "/about",
  },
];

export default function Header1() {
  const navRef = useRef();

  let [open, setOpen] = useState(false);
  let [openProfile, setProfile] = useState(false);
 

  const showNavbar = () => {
    setOpen((prev) => !prev);
    console.log(open);
  };

 


  

  return (
    <>
    <header className=" border-white border-2">
      <nav className="py-10 px-16">
        <div className="flex flex-wrap justify-start lg:justify-start items-start max-w-screen ">
          <h1 className="text-black text-4xl font-semibold">BookPavilian</h1>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              onClick={showNavbar}
              className="ml-[250px] mt-[10px] text-lg"
            >
              <span className="sr-only">Open Main Menu</span>
              {open == true ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          <div
            className={` hidden justify-center lg:justify-start lg:items-start items-center w-full lg:flex lg:w-auto lg:ml-52 `}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col flex-wrap font-medium lg:flex-row lg:space-x-8 lg:mt-0 justify-between items-start lg:items-center lg:justify-center lg:bg-white ">
              <li>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "lg:text-pink-500 " : "text-black "
                    }  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-pink-500 lg:p-0 text-lg`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/books"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-pink-500" : "text-black"
                    }  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-pink-500 lg:p-0 text-lg`
                  }
                >
                  Books
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-pink-500" : "text-black"
                    }  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-pink-500 lg:p-0 text-lg`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about1"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-pink-500" : "text-black"
                    }  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-pink-500 lg:p-0 text-lg`
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="mt-1 ml-2">
                <input
                  type="text"
                  className="px-3 py-1 border-2 border-gray-300 rounded-lg"
                  placeholder="Search"
                ></input>
              </li>
              <li className="mt-2 ml-2 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </li>
            </ul>
          </div>

          <div className=" lg:ml-10 ml-[30px] w-16 lg:w-16 ">
            <button
              data-dropdown-toggle="dropdownhover"
              className=" px-6 py-5 rounded-[100%] font-bold  bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] hover:opacity-75 text-transparent  "
              onClick={() => setProfile((prev) => !prev)}
            ></button>
            {openProfile ? (
              <div className="flex flex-col border-2 w-32 h-auto p-2 rounded-lg text-base mt-2 border-gray-600 translate-y-1 transition-transform duration-300">
                <ul className="flex flex-col gap-2">
                  <li className=" flex w-full hover:bg-gray-100 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 mr-1 mt-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clip-rule="evenodd"
                      />
                    </svg>{" "}
                    Profile
                  </li>
                  <div className="border-2 border-gray-700 w-22 "></div>
                  <Link to="/">
                    <li className=" flex w-full hover:bg-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 mt-1 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                      Logout
                    </li>
                  </Link>
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </nav>
      {open ? (
        <div className="lg:hidden">
          <div className="flex flex-wrap flex-col items-center justify-center ox-2 pt-2 pb-3 space-y-1 sm:px-3 w-64 mx-auto ">
            {navlinks.map((link, index) => (
              <a
                key={index}
                className="text-lg hover:text-pink-500 font-medium active:text-pink-500 hover:bg-gray-50 "
                href={link.link}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      ) : null}

    </header>
    </>
);
}
