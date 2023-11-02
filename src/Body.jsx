import React from 'react'
import Login from './pages/Login'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


const Body = () => {

  const router=createBrowserRouter([
    {
        path:'/',
        element:<Login/>
    }
  ]) 

  return (
    <div>
       <RouterProvider router={router}></RouterProvider>
    </div>
  )
}



export default Body