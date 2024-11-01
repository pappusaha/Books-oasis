import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="navbar  bg-base-100 shadow-lg z-10 fixed  px-4   sm:px-8 ">
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
        : "text-gray-500 font-bold"             // Inactive style
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
          <NavLink to={'/'} className="btn btn-ghost text-xl ">Book Oasis</NavLink>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1  flex justify-center items-center space-x-3">
          <li > <NavLink to={'/'}   className={({ isActive }) =>
      isActive
        ? "text-[#23BE0A] font-bold border-2 border-solid border-[#23BE0A]" // Active style
        : "text-[#131313CC]"             // Inactive style
    } > Home</NavLink>  </li>
          <li> <NavLink to={'/listedbooks'} className={({ isActive }) =>
      isActive
        ? "text-[#23BE0A] font-bold border-2 border-solid border-[#23BE0A]" // Active style
        : "text-[#131313CC]" // Inactive style
    } > Listed book</NavLink> </li>
          <li> <NavLink to={'/pagestoread'} 
          className={({ isActive }) =>isActive ? 
          "text-[#23BE0A] font-bold border-2 border-solid border-[#23BE0A]" // Active style
        : "text-[#131313CC]" // Inactive style
    }> Pages to read</NavLink > </li>
                       
          </ul>
        </div>
        <div className="navbar-end space-x-4">
          <a className="btn">Sign in </a>
          <a href="" className="btn">Sign up </a>
        </div>
      </div>
    );
};

export default Nav;