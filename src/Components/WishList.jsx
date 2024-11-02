import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredBooks } from '../localStorage/localStorage';
import WishListData from './WishListData';

const WishList = () => {
    const wishBooks=useLoaderData()
    const [storeBook , setStoreBook]=useState([])
    useEffect(() => {
        const  storedbooks=getStoredBooks()
        
    if(wishBooks.length>0){
        let storedbook=[]
    
      for(let {id, type} of storedbooks){
        
    
    
      if(type==='wish'){
    
        const book=wishBooks.find(singleBook => singleBook.bookId === id)
        
        if(book){
            storedbook.push(book)
       
        }
      }
      setStoreBook(storedbook)
    
    
      }
    
    }
    
    },[wishBooks])

    return (
        <div className='pt-10'>
          {
storeBook.map((wishBook,idx) => <WishListData key={idx} wishBook={wishBook}></WishListData>)

          }

        </div>
    );
};

export default WishList;











