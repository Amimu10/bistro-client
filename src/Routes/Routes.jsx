import {
    createBrowserRouter, 
  } from "react-router-dom";

import Home from "../Pages/Home/Home"; 
import LayOut from "../LayOut/LayOut";  
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order"; 
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
// import Menu from "../Pages/Menu";

  
export  const router = createBrowserRouter([ 
    {
      path: "/",
      element: <LayOut></LayOut>,   
      children : [
        {
            path: "/",  
            element : <Home></Home>   
        },
        {
            path: "/menu",   
            element : <Menu></Menu> 
        },
        {
            path: "/order/:category",   
            element : <Order></Order>  
        },
        {
            path: "/login",   
            element : <Login></Login> 
        },
        {
            path: "/register",   
            element : <Register></Register> 
        },
      ]
    },
  ]);