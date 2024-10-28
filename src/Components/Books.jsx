import React, { useEffect, useState } from 'react';
import BooksCarts from './BooksCarts';

const Books = () => {

    const [books, setBooks]=useState([])
    useEffect(() =>{ 
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    const [booksLenght, setBookLenght]=useState(6)
    const handleLoadAllBooks=() => {
setBookLenght(books)
    }


    return (
        <div className='mt-10 mb-5 md:mt-24 md:mb-16 text-center '>
          <h1 className='text-4xl font-bold'>Books:{books.length} </h1>  
          <div className='grid grid-cols-3 mt-20 drop-shadow-xl gap-6'>
          {
    books.slice(0,booksLenght).map(book => <BooksCarts key={book.id} book={book}></BooksCarts>)
}
          </div>

   <div onClick={handleLoadAllBooks}> Show all</div>


        </div>
    );
};

export default Books;