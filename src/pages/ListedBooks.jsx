import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { Link, Outlet } from 'react-router-dom';
const ListedBooks = () => {
    const [tabindex, settabindex]=useState(0)
    return (
        <div className='pt-28'>
       <div className=''>
       <h1 className="text-3xl font-bold text-center bg-[#1313130D] w-full p-4 rounded-md">Books</h1>


<div className='text-center mt-8 '>
   <div className="dropdown dropdown-bottom">
<div tabIndex={0} role="button" className="btn m-1 text-center text-white bg-[#23BE0A]">Short by <IoIosArrowDown /></div>



<ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-2 shadow">
<li><a>Rating</a></li>
<li><a>Number of pages</a></li>
<li><a>publisher Year</a></li>
</ul>
</div>
</div>

       </div>
       
       <div className='mt-20'>
{/* this is tab section  */}
{/* bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800 */}
<div className="flex justify-center overflow-x-auto overflow-y-hidden  sm:justify-start flex-nowrap ">  
<Link  
to={''}
onClick={() => settabindex(0)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabindex ===0 ?'border border-b-0' :'border-b'} rounded-t-lg dark:border-gray-300 text-gray-400 dark:text-gray-600`}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
</svg>
<span>Read</span>
</Link>
<Link  
to={'/listedbooks/wishlist'}
onClick={() => settabindex(1)}  rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  dark:border-gray-300  dark:text-gray-600 ${tabindex===1 ? 'border border-b-0' :'border-b lg:w-11/12'} rounded-t-lg `}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
</svg>
<span>Wish list</span>
</Link>


</div>
</div>  
<div className='min-h-[calc(100vh-449px)]'>
<Outlet></Outlet>    
    </div>  
  
        </div>
    );
};



export default ListedBooks;