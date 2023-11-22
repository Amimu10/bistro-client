import {
    createBrowserRouter, 
  } from "react-router-dom";

import Home from "../Pages/Home/Home"; 
import LayOut from "../LayOut/LayOut";  
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order"; 
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Secret from "../Shared/Secret/Secret";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Dashboard from "../LayOut/DashBoard/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoute from "../AdminRoute/AdminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
// import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";

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
        {
            path: "/secret",    
            element : <PrivateRoute><Secret></Secret></PrivateRoute>
        },
      ]
    },
    {
       path: "dashboard", 
       element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
       children: [ 
        // normal user routes
          {
              path: "cart",
              element : <Cart></Cart>  
          },
            //   admin only routes
          {
              path: "addItems",
              element : <AdminRoute><AddItems></AddItems></AdminRoute>
          }, 
          {
              path: "manageItems", 
              element : <AdminRoute><ManageItems></ManageItems></AdminRoute>
            
          },
          {
              path: "updateItem/:id",  
              element : <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
              loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`) 
          },

          {
              path: "users",
              element : <AdminRoute><AllUsers></AllUsers></AdminRoute>  
          }
       ]
    }
  ]);