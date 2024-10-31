
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 
 export const getStoredBooks= () => {
    let book=[];
    const storedBooks=localStorage.getItem('store-books')
    console.log(storedBooks)
    if(storedBooks){


      book=JSON.parse(storedBooks)

    }
   
        return book;
   
}

export const  saveBooks =(bookId,type) => {
    const storedBooks=getStoredBooks()
    const isReadExist = storedBooks.find(book => book.id === bookId && book.type === "read");
    console.log(isReadExist)
   if(isReadExist && type === "wish"){
    // return toast.warning(`Already added to ${type === 'read' ? 'Read List' : 'Wish List'}!`)
    return toast.warning("You have already added this book to the read list.");

   }
   const isExist = storedBooks.find(book => book.id === bookId && book.type === type);

   if(isExist){ 
    return toast.warning(`This book is already in the ${type} list!`);
   }

   else {
    // If the book is not already added, add it to the list
    storedBooks.push({ id: bookId, type });
    localStorage.setItem("store-books", JSON.stringify(storedBooks));
    
    return toast.success(`The book has been successfully added to the ${type} list!`);
}
    

    
   

}