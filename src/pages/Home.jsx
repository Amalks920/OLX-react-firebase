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
    
    <div className='flex flex-wrap  items-center border-2 border-black m-[300px] h-fit gap-11'>
      <Header/>
      <div className='w-1/4 h-[500px] border-2 border-black  '>
         hello
      </div>
      <div className='w-1/4 h-[500px] border-2 border-black  '>
         hello
      </div>
      <div className='w-1/4 h-[500px] border-2 border-black '>
         hello
      </div>
      <div className='w-1/4 h-[500px] border-2 border-black '>
         hello
      </div>
      <div className='w-1/4 h-[500px] border-2 border-black '>
         hello
      </div>
      <div className='w-1/4 h-[500px]  border-2 border-black '>
         hello
      </div>
      <div className='w-1/4 h-[500px]  border-2 border-black '>
         hello
      </div>
      
    </div>
  )
}

export default Home