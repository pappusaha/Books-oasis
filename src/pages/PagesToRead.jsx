import React, { useEffect, useState } from 'react';
import { getStoredBooks } from '../localStorage/localStorage';
import { useLoaderData } from 'react-router-dom';
import LineChart from '../Components/LineChart';


const PagesToRead = () => {
  const charts=useLoaderData()
  console.log(charts)
  const [storeBook , setStoreBook]=useState([])
 
  useEffect(() =>{
   
    const stortedData=getStoredBooks()
  
    if(stortedData.length> 0){
      let storedbook=[]
for( const {id, type} of stortedData){
  if(type==='read'){
    const bookData=charts.find(singleBook => singleBook.bookId === id)
    console.log(bookData)
    if(bookData){
      storedbook.push(bookData)
      console.log(storedbook)

    }
    
  }
  
   
}
 setStoreBook(storedbook)
    }
  },[])
    return (
        <div className='pt-20'>
     <LineChart bookDetail={storeBook}> </LineChart>
       
        </div>
    );
};

export default PagesToRead;