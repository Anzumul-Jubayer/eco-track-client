import React from 'react';
import { createBrowserRouter } from 'react-router';
import App from '../App';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    children:[
        {
            index:true,
            element:<Home/>
        }
    ]
  },
]);


export default router;