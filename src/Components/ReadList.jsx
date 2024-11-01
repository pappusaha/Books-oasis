import React from 'react';

const ReadList = ({book}) => {
    const {tags,bookName,author,image,review,totalPages,category,yearOfPublishing,bookId}=book
    return (
        <div key={bookId} className='flex  flex-col lg:flex-row  space-y-3 mb-6 border p-5'>
        <div>
        <img className='bg-slate-400  ' src={image} alt="" />  
        </div>
        <div>
          <h1 className='text-center lg:font-bold text-3xl text-black'>{bookName}</h1>
        
          <p className='text-[#131313CC] font-bold'>By:{author}</p>
        
          <div>
            <p className='space-x-4'>#{tags}</p>
            <p></p>
          </div>
          
        </div>
    
       
      </div>
    );
};

export default ReadList;