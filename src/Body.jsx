import React, { Suspense, lazy, useContext } from 'react'
//import Login from './pages/Login'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
//import Home from './pages/Home'
//import AddAdd from './pages/AddAdd'
//import SingleAdd from './pages/SingleAdd'
import PostContext from '../utils/PostContext'
import Footer from './components/Footer'
import Header from './components/Header'

const SingleAdd=lazy(()=> import('./pages/SingleAdd'));
const AddAdd=lazy(()=> import('./pages/AddAdd'));
const Home=lazy(()=> import('./pages/Home'));
const Login=lazy(()=>import('./pages/Login'))

const Body = ({setAuthData,isAuthenticated}) => {

  const router=createBrowserRouter([
    {
        path:'/',
        element:<Suspense><Login setAuthData={setAuthData} isAuthenticated={isAuthenticated}/></Suspense>
    },
    {
      path:'/home',
      element:<Suspense><Home setAuthData={setAuthData} isAuthenticated={isAuthenticated}/></Suspense>
    },
    {
      path:'/add-post',
      element:<Suspense><AddAdd setAuthData={setAuthData} isAuthenticated={isAuthenticated}/></Suspense>
    },
    {
      path:'/single-add/:addIndex',
      element:<Suspense><SingleAdd setAuthData={setAuthData} isAuthenticated={isAuthenticated}/></Suspense>
    }
  ]) 

  return (
    <div>
       <RouterProvider router={router}></RouterProvider>

       <Footer/>
    </div>
  )
}



export default Body