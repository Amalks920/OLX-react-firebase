import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PostContext from '../../utils/PostContext'
import Header from '../components/Header'
import useFetchUserDetails from '../../utils/useFetchUserDetails'
import UserContext from '../../utils/UserContext'
import Loader from '../components/Loader'

const SingleAdd = ({setAuthData,isAuthenticated}) => {
  const index=useParams()
  const posts=useContext(PostContext)
  const user=useContext(UserContext)
  const uid=posts?.posts[index?.addIndex]?.uid
  
 

  const navigate=useNavigate()

  if(isAuthenticated===false) {
    navigate('/')
    window.location.reload(true)
 } 

 if(posts?.posts?.length===0){
  return <Loader/>
 }
  return (
    <>
    <Header/>

<div class="grid grid-cols-3 gap-4 mt-[300px] px-64 mb-[300px]">
  <div className='shadow-2xl p-14 min-w-[300px] col-span-2 row-span-3 h-[700px]'>
  <img className=' h-full w-full object-scale-down' src={posts?.posts[index?.addIndex]?.imgUrl} alt="" />
  </div>

  <div className='shadow-2xl min-w-[300px] p-5'>
    
    <h1 className='font-semibold text-5xl m-4'>₹{posts?.posts[index?.addIndex]?.price}</h1>
    <h1 className='m-4'>{posts?.posts[index?.addIndex]?.title}</h1>
    <h1 className='m-4'>{posts?.posts[index?.addIndex]?.email}</h1>
    <button className='border-4 border-black px-9 py-3 hover:border-none hover:bg-black hover:text-white'>Chat With Seller</button>

  </div>
  <div className='border-2 border-black min-w-[300px] hidden'>09</div>
  <div className='border-2 border-black min-w-[300px] row-span-2 hidden'>09</div>

  <div className='shadow-2xl min-w-[300px] col-span-2 row-span-2 py-11'>
    <div className='border-2  mt-5 pb-4'>
    <h1 className='ms-[555px] font-bold text-3xl my-4'>Details</h1>
    <span className='ms-[530px]  text-2xl'>Brand :  </span><span className=' text-2xl'>{posts?.posts[index?.addIndex]?.brand}</span>
    </div>

    <div className='border-2  mt-5 pb-4'>
    <h1 className='ms-[555px] font-bold text-3xl my-4'>Description</h1>
    <p className='  text-2xl text-center'>{posts?.posts[index?.addIndex]?.description}</p>
    </div>

  </div>
</div>
    </>
  )
}

export default SingleAdd