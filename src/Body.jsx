import React from 'react'
import Login from './pages/Login'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'


const Body = ({setAuthData,isAuthenticated}) => {
  console.log(isAuthenticated)
  const router=createBrowserRouter([
    {
        path:'/',
        element:<Login setAuthData={setAuthData} isAuthenticated={isAuthenticated}/>
    },
    {
      path:'/home',
      element:<Home setAuthData={setAuthData} isAuthenticated={isAuthenticated}/>
    }
  ]) 

  return (
    <div>
       <RouterProvider router={router}></RouterProvider>
    </div>
  )
}



export default Body