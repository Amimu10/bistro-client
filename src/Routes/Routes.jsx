import {
    createBrowserRouter, 
  } from "react-router-dom";

import Home from "../Pages/Home"; 
import LayOut from "../LayOut/LayOut";  

  
export  const router = createBrowserRouter([ 
    {
      path: "/",
      element: <LayOut></LayOut>,   
      children : [
        {
            path: "/",  
            element : <Home></Home>   
        } 
      ]
    },
  ]);