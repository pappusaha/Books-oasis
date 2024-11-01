import { createBrowserRouter } from "react-router-dom";


import ErrorPage from "./ErrorPage";
import Home from "../pages/Home";
import Mainlayout from "../Layout/Mainlayout/Mainlayout";
import ListedBooks from "../pages/ListedBooks";
import PagesToRead from "../pages/PagesToRead";
import BookDetails from "../Components/BookDetails";
import ReadBooks from "../Components/ReadBooks";
import WishList from "../Components/WishList";


export const router =createBrowserRouter([

    {
        path:'/',
        element: <Mainlayout></Mainlayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
          {
            path:'/',
            element:<Home></Home>
            
          }, 
          {
            path:'/listedbooks',
            element:<ListedBooks></ListedBooks>,
            loader: () => fetch('/books.json'), 
            children:[

              {
                index :true, 
                element:<ReadBooks></ReadBooks>,
                loader: () => fetch('/books.json'),
                  }, 

              {
                path:`/listedbooks/wishlist`, 
                element:<WishList></WishList>, 
                loader: () => fetch('/books.json')  
                        
              
              },
            ]
        
             
             
            
          },             
          {
            path:'/pagestoread', 
            element: <PagesToRead></PagesToRead>,
            loader: () => fetch('/books.json'),
         
          }, 
          {
            path:'/book/:id',
            element:<BookDetails></BookDetails>,
          loader: () => fetch('/books.json')
          }
        ]    
      }


])
