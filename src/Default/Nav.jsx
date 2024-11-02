import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="navbar  bg-base-100 shadow-lg z-10 fixed  px-4   sm:px-12 ">
        <div className="navbar-start "> 
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li > <NavLink to={'/'}   
               className={({ isActive }) => isActive
        ? "text-[#23BE0A] font-bold" // Active style
        : "text-gray-900 font-bold"             // Inactive style
    }> Home</NavLink>  </li>
            
              <li> <NavLink to={'/listedbooks'} 
              className={({ isActive }) =>isActive
        ? "text-[#23BE0A] font-bold border-2 border-solid border-[#23BE0A]" // Active style
        : "text-[#131313CC] font-bold"             // Inactive style
    } > Listed book</NavLink> </li>
              <li> <NavLink to={'/pagestoread'} 
              className={({ isActive }) =>isActive
        ? "text-[#23BE0A] font-bold border-2 border-solid border-[#23BE0A]" // Active style
        : "text-[#131313CC] font-bold"  // Inactive style
    }> Pages to read</NavLink> </li>
            </ul>
          </div>
          <NavLink to={'/'} className="btn btn-ghost text-xl font-bold">Book Oasis</NavLink>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1  flex justify-center items-center space-x-3">
          <li > <NavLink to={'/'}   className={({ isActive }) =>
      isActive
        ? "text-[#23BE0A] font-bold border-2 border-solid border-[#23BE0A]" // Active style
        : "text-[#131313CC] font-bold"             // Inactive style
    } > Home</NavLink>  </li>
          <li> <NavLink to={'/listedbooks'} className={({ isActive }) =>
      isActive
        ? "text-[#23BE0A] font-bold border-2 border-solid border-[#23BE0A]" // Active style
        : "text-[#131313CC] font-bold" // Inactive style
    } > Listed book</NavLink> </li>
          <li> <NavLink to={'/pagestoread'} 
          className={({ isActive }) =>isActive ? 
          "text-[#23BE0A] font-bold border-2 border-solid border-[#23BE0A]" // Active style
        : "text-[#131313CC] font-bold" // Inactive style
    }> Pages to read</NavLink > </li>
                       
          </ul>
        </div>
        <div className="navbar-end space-x-4">
        
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Sign in
</span>
</button>
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Sign up 
</span>
</button>
        </div>
      </div>
    );
};

export default Nav;