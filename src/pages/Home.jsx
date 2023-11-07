import React, { useContext } from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import PostContext from '../../utils/PostContext'
import UserContext from '../../utils/UserContext'
import Footer from '../components/Footer'
import Loader from '../components/Loader'
 


const Home = ({setAuthData,isAuthenticated}) => {
   const user=useContext(UserContext)
   const posts=useContext(PostContext)
  console.log(user.loggedInUser.email)
  const navigate=useNavigate()
  console.log(isAuthenticated,'isAuthenticated')

  if(isAuthenticated===false) {
    navigate('/')
    window.location.reload(true)
 } 

if(posts?.posts.length===0){
  return <Loader/>
}

  return (
    
    <div  className='flex flex-wrap  items-center  md:justify-left after:md:justify-center m-[100px] mt-[300px]  h-fit gap-11'>
      <Header/>
   
      {
         posts.posts.map((el,index)=>{
         return (
         
         <div className='w-1/5 min-w-[300px] after:md:min-w-[200px] bg-white h-fit py-2   shadow-2xl ms-[60px]'>
             <Link to={`/single-add/${index}`}><div className=' px-4 '>
            <img  src={el?.imgUrl} alt=""  width="600"
            height="337"
            className="w-[600px] h-[337px] object-scale-down" />
            </div>
            <div className='border-l-8 border-l-yellow-400'>
              <h1 className='text-2xl font-bold ps-10 my-2'>${el?.price}</h1>
              <Link to={`/single-add/${index}`}> <h1 className='ps-10 my-2 font-bold text-xl'>{el?.title}</h1> </Link>
              <p className='ps-10 my-2 text-lg'>{el?.description}</p>
              </div></Link>
              
         </div>
    
                )
         })

      }

  
    </div>


  )
}

export default Home