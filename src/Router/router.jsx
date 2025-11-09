import React from 'react';
import { createBrowserRouter } from 'react-router';
import App from '../App';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import ErrorPage from '../Pages/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
   errorElement:<ErrorPage/>,
    children:[
        {
            index:true,
            element:<Home/>
        },
        {
            path:'/login',
            element:<LoginPage></LoginPage>
        },
        {
            path:'/register',
            element:<RegisterPage/>
        }
    ]
  },
]);


export default router;