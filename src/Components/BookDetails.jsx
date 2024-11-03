import React from 'react';
import {   useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { saveBooks } from '../localStorage/localStorage';

const BookDetails = ({}) => {
    const booksData=useLoaderData()
    const {id} =useParams()
  const idint=parseInt(id)
  const bookData=booksData.find(book => book.bookId=== idint)
  console.log(bookData)

  const {bookName,author,category,tags, image,review,totalPages,rating,publisher,yearOfPublishing}=bookData


  const handleStoredBooks=(type)=> {
    saveBooks(idint,type)
   
}
    return (
        <div className='pt-20 h-screen flex-grow'>
    {/* main book details */}
   <div className='flex flex-col lg:flex-row w-full mx-auto gap-10 '>
    {/* image div */}
<div className=' bg-[#1313130D] lg:w-4/5 flex rounded-xl '> 
    <img className='  bg-[#1313130D]  grow ' src={image} alt="" />
    </div>
    {/* end img div */}

    {/* start book details */}
    <div className='space-y-3'>
<h2 className='font-bold lg:text-4xl text-black'>{bookName}</h2>
<p className='font-bold'>By: {author}</p>
<p></p>
<p className=' text-[#131313]'>Review:{review}</p>
<div className=' flex space-x-3'>
    <h5 className='font-bold  '>Tag: <span className='font-bold text-[#23BE0A] bg-[#23BE0A0D] rounded-xl'>{tags}</span></h5>
    <p className='text-[#23BE0A] bg-[#23BE0A0D] rounded-xl w-20 font-bold'>#Identity</p>
    
</div>
<div className=' flex space-x-12'>

  
    <div className=''>
        <p>Number of Pages:</p>
        <p>Publisher:</p>
        <p>Year of Publishing:</p>
          <p>Rating:</p>
       
    </div>
    <div className=' '>
    <p className='text-black font-medium'>{totalPages}</p>
    <p  className='text-black font-medium'>{publisher}</p>
        <p className='text-black font-medium'>{yearOfPublishing}</p>
        <p className='text-black font-medium'>{rating}</p>
    </div>

  </div>
    
    <div className='flex space-x-4 mt-2'>
<button type="button" onClick={() => handleStoredBooks('read')} className='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Read</button>


 <ToastContainer />
 <button onClick={() => handleStoredBooks('wish')} className='text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 p-3'>Wish List</button>
 <ToastContainer />
</div>
</div>

    </div>
   
        </div>
    );
};

export default BookDetails;