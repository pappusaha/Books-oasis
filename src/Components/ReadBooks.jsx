import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredBooks } from '../localStorage/localStorage';
import ReadList from './readlist';
import PagesToRead from '../pages/PagesToRead';

const ReadBooks = () => {
    const books=useLoaderData()
    const [storeBook , setStoreBook]=useState([])
   useEffect(() => {
    const  storedbooks=getStoredBooks()
    
if(books.length>0){
    let storedbook=[]

  for(let {id, type} of storedbooks){
    


  if(type==='read'){

    const book=books.find(singleBook => singleBook.bookId === id)
    
    if(book){
        storedbook.push(book)
        console.log(storeBook)
    }
  }
  setStoreBook(storedbook)


  }

}

},[books])
    return (
        <div>

  
            {
            storeBook.map(book => <ReadList key={book.bookId} book={book}></ReadList> )
               
            }
        </div>
    );
};

export default ReadBooks;























// {storeBook.length > 0 ? (
//   storeBook.map(({tags,bookName,author,image,review,totalPages,category,yearOfPublishing,bookId }) =>    (
  

//       <div key={bookId} className='flex  flex-col lg:flex-row  space-y-3 mb-6 border p-5'>
//         <div>
//         <img className='bg-slate-400  ' src={image} alt="" />  
//         </div>
//         <div>
//           <h1 className='text-center lg:font-bold text-3xl text-black'>{bookName}</h1>
        
//           <p className='text-[#131313CC] font-bold'>By:{author}</p>
        
//           <div>
//             <p className='space-x-4'>#{tags}</p>
//             <p></p>
//           </div>
          
//         </div>
    
       
//       </div>
    
//   ))
// ) : (
//   <p>No books in your read list.</p>
// )}