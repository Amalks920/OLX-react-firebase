import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {  Outlet, createBrowserRouter, useActionData, useNavigate } from 'react-router-dom'
import Body from './Body'
import UserContext from '../utils/UserContext'
import { auth } from '../utils/firebase'
import { onAuthStateChanged } from 'firebase/auth'


function App() {
 const [authData,setAuthData]=useState([]);
 const [isAuthenticated,setIsAuthenticated]=useState(null)
  console.log('rerender')
  useEffect(()=>{
  
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthData(user)
        setIsAuthenticated(true)
        //window.location.href='/home'
      } else {
        console.log('hell')
        setAuthData(null)
        setIsAuthenticated(false)
      }
    });
  })
  return (
  <div>
  <UserContext.Provider value={{loggedInUser:authData}}>
    <Body setAuthData={setAuthData} isAuthenticated={isAuthenticated}/>
  </UserContext.Provider>
  </div>
  )
}


export default App;
