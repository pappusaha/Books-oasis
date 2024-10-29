import { createBrowserRouter } from "react-router-dom";


import ErrorPage from "./ErrorPage";
import Home from "../pages/Home";
import Mainlayout from "../Layout/Mainlayout/Mainlayout";
import ListedBooks from "../pages/ListedBooks";
import PagesToRead from "../pages/PagesToRead";
import BookDetails from "../Components/BookDetails";


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
            loader: () => fetch('../../public/books.json')
          }, 
          {
            path:'pagestoread', 
            element: <PagesToRead></PagesToRead>
          }, 
          {
            path:'/book/:id',
            element:<BookDetails></BookDetails>,
          loader: () => fetch('../../public/books.json')
          }
        ]    
      }


])
