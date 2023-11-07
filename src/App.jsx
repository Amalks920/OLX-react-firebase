import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {  Outlet, createBrowserRouter, useActionData, useNavigate } from 'react-router-dom'
import Body from './Body'
import UserContext from '../utils/UserContext'
import { auth } from '../utils/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import PostContext from '../utils/PostContext'
import { db } from '../utils/firestore'
import { collection, getDocs } from 'firebase/firestore'



function App() {
 
 
 const [authData,setAuthData]=useState([]);
 const [isAuthenticated,setIsAuthenticated]=useState(null)
 const [posts,setPosts]=useState([])

  useEffect(()=>{
  
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthData(user)
        setIsAuthenticated(true)
        //window.location.href='/home'
      } else {
        setAuthData(null)
        setIsAuthenticated(false)
      }
    });
  })

  useEffect(()=>{
    const colRef=collection(db,'posts');
   
    getDocs(colRef).then((snapshot)=>{
      let posts=[]
      snapshot.docs.forEach((doc)=>{
        posts.push({...doc.data()})
      })
      setPosts(posts)
    })
  },[])
  return (
  <div>
  <UserContext.Provider value={{loggedInUser:authData}}>
    <PostContext.Provider value={{posts:posts}}>
    <Body setAuthData={setAuthData} isAuthenticated={isAuthenticated}/>
    </PostContext.Provider>
  </UserContext.Provider>
  </div>
  )
}


export default App;
