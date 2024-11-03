import React from 'react';
import { Link } from 'react-router-dom';

    const BooksCarts = ({book}) => {

        const {bookId,bookName,image,category,author,rating}=book
    return (
        <Link to={`/book/${bookId}`} className="bg-base-100  mb-4 rounded-xl	p-5">
       <div>
        <img className='bg-[#F3F3F3] w-full mx-auto rounded-lg' src={image} alt="" />
       </div>
       <div className='flex space-x-2  items-center justify-start lg:mt-6'>
        <h4 className='text-[#23BE0A] bg-[#23BE0A0D] px-2 py-1 rounded-lg'>{category}</h4>
        <h4 className='text-[#23BE0A] bg-[#23BE0A0D] px-2 py-1  rounded-lg'> Identity</h4>
       </div>
       <div className=' text-left mt-4'>
        <h2  className='font-bold text-2xl text-black'>{bookName}</h2>
        <p className='border-b-2 pb-5 border-dashed text-[#131313CC] my-5 font-medium'>By:{author}</p>
       </div>
       <div className='flex justify-between my-5'>
        <h5 className='text-[#131313CC]'>Non-fiction </h5>
        <p className='text-[#131313CC]'>{rating}</p>
       </div>
       <div>
        <p></p>
        <p></p>
       </div>

      </Link>
    );
};

export default BooksCarts;