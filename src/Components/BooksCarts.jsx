import React from 'react';

    const BooksCarts = ({book}) => {

        const {bookName,image}=book
    return (
        <div className=" bg-base-100 mb-4	p-5">
       <div>
        <img className='bg-[#F3F3F3] w-full mx-auto rounded-lg' src={image} alt="" />
       </div>
       <div>
        <h4></h4>
        <h4></h4>
       </div>
       <div>
        <h2></h2>
        <p></p>
       </div>
       <div>
        <p></p>
        <p></p>
       </div>

      </div>
    );
};

export default BooksCarts;