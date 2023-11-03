import React from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'

const Home = ({setAuthData,isAuthenticated}) => {

  const navigate=useNavigate()
  console.log(isAuthenticated,'isAuthenticated')
  if(isAuthenticated===false) {
    navigate('/')
    window.location.reload(true)
 } 

  return (
    
    <div>
      <Header/>
      Home
    </div>
  )
}

export default Home