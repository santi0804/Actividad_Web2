import React from "react";
import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from "./auth/login";
import Dashboard from "./Dashboard";



const router = createBrowserRouter([  // Este es el constructor y el enrutador//
    
    {
        path: '/login',
        element: <Login />,  //esto es un elemento para que la ruta lo detecte //

    },
    {
        path: '/dashboard',
        element: <Dashboard />,  //esto es un elemento para que la ruta lo detecte //

    },

]);

const Home = () => {

    return (
        <RouterProvider router={router}/>


    );
};

export default Home;
