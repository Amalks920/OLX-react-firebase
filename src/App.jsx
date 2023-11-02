import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet, createBrowserRouter } from 'react-router-dom'
import Body from './Body'
import UserContext from '../utils/UserContext'


function App() {
 
  return (
  <div>
  <UserContext.Provider value={{loggedInUser:'amalks'}}>
    <Body/>
  </UserContext.Provider>
  </div>
  )
}


export default App;
