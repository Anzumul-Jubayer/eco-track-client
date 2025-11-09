import React from 'react';
import { createBrowserRouter } from 'react-router';
import App from '../App';
import MainLayout from '../Layouts/MainLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    children:[
        
    ]
  },
]);


export default router;