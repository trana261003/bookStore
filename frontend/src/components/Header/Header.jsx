import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import Swal from "sweetalert2";


const navlinks= [
  {
    title: "Home",
    link:"/",
  },
  {
    title:"Books",
    link:"/books"
  },
  {
    title:"Contact",
    link:"/contact"
  },
  {
    title:"About",
    link:"/about"
  }
]

export default function Header() {
  const navRef = useRef();

  let [open,setOpen]=useState(false)

  const showNavbar = () => {
    setOpen((prev)=>!prev)
    console.log(open);
  };
  
  const handleclick=()=>{
    Swal.fire({
      title:"Alert!",
      text:"You are not able to access. Please Login first!!"
    });
  }
 
  return (
    <header>
      <nav className="py-10 px-14">
        <div className="flex flex-wrap justify-start lg:justify-start items-start max-w-screen-xl ">
          <h1 className="text-black text-4xl font-semibold">
            BookPavilian
          </h1>
          <div className="-mr-2 flex md:hidden">
            <button type="button" onClick={showNavbar}
              className="ml-[250px] mt-[10px] text-lg">
              <span className="sr-only">Open Main Menu</span>
              {open==true ? <FaTimes/> : <FaBars/>}
            </button>
          </div>

          <div
            className={` hidden justify-center lg:justify-start lg:items-start items-center w-full lg:flex lg:w-auto lg:ml-52 `}
            id="mobile-menu-2"
           
          >
            <ul className="flex flex-col flex-wrap font-medium lg:flex-row lg:space-x-8 lg:mt-0 justify-between items-start lg:items-center lg:justify-center lg:bg-white ">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive
                        ? "lg:text-pink-500 "
                        : "text-black "
                    }  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-pink-500 lg:p-0 text-lg`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="text-lg cursor-pointer"
              onClick={handleclick}
              >
                {/* <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-pink-500" : "text-black"
                    }  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-pink-500 lg:p-0 text-lg`
                  }
                > */}
                  Books
                {/* </NavLink> */}
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
                  to="/about"
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
              <li className="mt-2 ml-2">
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

          <div className="flex flex-wrap lg:ml-16 ml-[19px] ">
            <Link
              to="/login"
              // className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 lg:py-2.5 mr-2 focus:outline-none"
            >
              <button className=" px-5 py-2 rounded-lg font-bold text-white bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] hover:opacity-75">
                Login
              </button>
            </Link>
          </div>
        </div>
      </nav>
      {open ? (
        <div className="lg:hidden">
          <div className="flex flex-wrap flex-col items-center justify-center ox-2 pt-2 pb-3 space-y-1 sm:px-3">
         
            {navlinks.map((link,index)=>(
              <a
              key={index}
              className="text-lg hover:text-pink-500 font-medium active:text-pink-500 hover:bg-gray-50"
              
              href={link.link}
              >
                {link.title}
              </a>
            ))}
          </div>
          {/* <ul className="flex flex-col flex-wrap font-medium lg:flex-row lg:space-x-8 lg:mt-0  justify-between lg:items-center lg:justify-center lg:bg-white ">
              <li>
                <NavLink
                  to="/"
                  className=  "hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-pink-500 lg:p-0 text-lg"
                  
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
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
                  to="/github"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-pink-500" : "text-black"
                    }  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-pink-500 lg:p-0 text-lg`
                  }
                >
                  About
                </NavLink>
              </li>
            </ul> */}

        </div>
      ): null}
    </header>
  );
}
