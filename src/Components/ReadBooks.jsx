import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredBooks } from '../localStorage/localStorage';

const ReadBooks = () => {
    const books=useLoaderData()
    const [storeBook , setStoreBook]=useState([])
   useEffect(() => {
    const  storedbooks=getStoredBooks()
    console.log('kakak',storedbooks)
if(books.length>0){
    let storedbook=[]

  for(let {id, type} of storedbooks){
    console.log(id)
    console.log('asdhfi',type,storedbooks)

  if(type==='read'){

    const book=books.filter(singleBook => singleBook.id === id)
    console.log('zasdfasfvsdrfan babu',books,book)
    if(book){
        storedbook.push(book)
        console.log(storeBook)
    }
  }
  setStoreBook(storedbook)
  console.log(storedbook)

  }

}
    
},[books])

    return (
        <div>
        
        <h1>ashdkfhu</h1>
        </div>
    );
};

export default ReadBooks;