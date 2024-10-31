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
        <div className='pt-20'>
    {/* main book details */}
   <div className='flex flex-col lg:flex-row w-10/12 mx-auto gap-4 '>
    {/* image div */}
<div className='border-2 bg-slate-300 '> 
    <img className=' h-full bg-slate-300 ' src={image} alt="" />
    </div>
    {/* end img div */}

    {/* start book details */}
    <div>
<h2></h2>
<p></p>
<p></p>
<p>Review:</p>
<div className=''>
    <h5>Tag:</h5>
    <p></p>
    <p></p>
</div>
<div>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
</div>
<div className='flex space-x-2'>
<button onClick={() => handleStoredBooks('read')} className='button-2 bg-slate-500 text-black p-3'>Read</button>
 <ToastContainer />
 <button onClick={() => handleStoredBooks('wish')} className='button-2 bg-slate-500 text-black p-3'>Wish List</button>
 <ToastContainer />
</div>
    </div>
   </div>
        </div>
    );
};

export default BookDetails;