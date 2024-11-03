import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { MdPeopleOutline,MdOutlineContactPage } from "react-icons/md";





const ReadList = ({book}) => {
    const {rating,tags,bookName,author,image,review,totalPages,publisher,category,yearOfPublishing,bookId}=book
    return (
        <div key={bookId} className='flex  flex-col lg:flex-row  mb-6 border p-5 space-x-4'>
        <div>
        <img className='bg-[#1313130D]   rounded-xl  ' src={image} alt="" />  
        </div>
        <div className='space-y-4 grow'>
          <h1 className=' text-xl font-semibold lg:text-2xl text-black'>{bookName}</h1>
        
          <p className='text-[#131313CC] text-lg font-bold'>By:{author}</p>
          <p></p>
        
          <div className='flex space-x-3 items-center '>
            <p className='font-bold text-black'>Tags:</p>
            <p className='space-x-4 bg-[#23BE0A0D] text-[#23BE0A] p-1 font-semibold rounded-lg'>#{tags}</p>
            <p className='bg-[#23BE0A0D] text-[#23BE0A] font-semibold rounded-lg p-1'>#Identity</p>
            <CiLocationOn />
            <p className='font-semibold '>Pablish of years:{yearOfPublishing}</p>
            

          </div>
          <div className='flex space-x-3 border-b pb-6 items-center'>
          <MdPeopleOutline />

            <p className='text-[#13131399] font-semibold'>Publisher:{publisher}</p>
            <MdOutlineContactPage />

            <p className='text-[#13131399] font-semibold'> Pages:{totalPages}</p>
          </div>
          <div className='flex space-x-3 pt-4 '>
            <h5 className='px-3 font-bold py-2 text-center bg-[#328EFF26] text-[#328EFF] bg-slate-300 rounded-3xl'>Category:{category}</h5>
            <h5 className='px-3 font-semibold bg-[#FFAC3326] text-[#FFAC33] py-2 items-center bg-slate-300 rounded-3xl'>Rating:{rating}</h5>
            <button className='btn rounded-3xl'>View Details</button>
          </div>
          
        </div>
    
       
      </div>
    );
};

export default ReadList;