import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import svg1 from "../dashboard.svg";

const AdminLayout = () => {
//   const [open, setOpen] = useState(true);
  return (
    <div className=" flex max-w-screen-2xl md:h-screen space-x-0 ">
      <div className={`w-96 md:w-72 bg-[#242124] `}>
        <div className="flex flex-col w-full  mt-10 md:mr-5">
          <div className=" flex items-center">
            <button className=" ml-8 bg-gradient-to-r from-slate-400 to-slate-600 w-10 h-10 rounded-full"></button>
            <h1 className="text-white text-2xl ml-4 ">Admin</h1>
          </div>

          <div className="flex mt-8 ml-12  w-32 rounded-full">
            <img src={svg1} className="text-white w-6 rounded-full hover:text-gray-400 cursor-pointer "></img>
            <NavLink to="/admin"
           className={({ isActive }) =>
            ` ${
              isActive ? "lg:text-pink-500 " : "text-black "
            }  lg:hover:bg-transparent lg:border-0 hover:text-pink-500 lg:p-0 text-lg`
          }
             
            >
            <h1 className="text-white text-lg ml-3 cursor-pointer hover:text-gray-400 rounded full ">
              Dashboard
            </h1>
            </NavLink>
          </div>
          <div className="flex mt-4 ml-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 rounded-full text-white hover:text-gray-400 cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
              />
            </svg>

          <NavLink to="/admin/upload"
          className={({ isActive }) =>
            `block duration-200 ${
              isActive ? "text-gray-400" : "text-white "
            }  lg:hover:bg-transparent lg:border-0 hover:text-gray-400`
          }
          >
            <h1 className="text-white text-lg ml-4 hover:text-gray-400 cursor-pointer">
              Upload Books
            </h1>
            </NavLink>
          </div>
          <div className="flex mt-4 ml-12 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6  rounded-full text-white hover:text-gray-400 cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <NavLink to="/admin/manage"
          className={({ isActive }) =>
            `block duration-200 ${
              isActive ? "text-gray-400" : "text-white "
            }  lg:hover:bg-transparent lg:border-0 hover:text-gray-400`
          }
          >
            <h1 className="text-white text-lg ml-4 hover:text-gray-400 cursor-pointer">
              Manage Books
            </h1>
            </NavLink>
          </div>
          <div className="flex mt-4 ml-12 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 rounded-full text-white hover:text-gray-400 cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>

            <NavLink to="/admin/users"
          className={({ isActive }) =>
            `block duration-200 ${
              isActive ? "text-gray-400" : "text-white "
            }  lg:hover:bg-transparent lg:border-0 hover:text-gray-400`
          }
          >
            <h1 className="text-white text-lg ml-4 hover:text-gray-400 cursor-pointer">
              Users
            </h1>
            </NavLink>
          </div>
          <div className="flex mt-4 ml-12 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 rounded-full text-white hover:text-gray-400 cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
              />
            </svg>

            <NavLink to="/"
          className={({ isActive }) =>
            `block duration-200 ${
              isActive ? "text-gray-400" : "text-white "
            }  lg:hover:bg-transparent lg:border-0 hover:text-gray-400`
          }
          >
            <h1 className="text-white text-lg ml-4 hover:text-gray-400 cursor-pointer">
              Logout
            </h1>
            </NavLink>
          </div>
        </div>
      </div>
      <Outlet/>
     </div>
              
           
  );
};

export default AdminLayout;


