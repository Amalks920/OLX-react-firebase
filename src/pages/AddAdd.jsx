import React, { useContext, useRef, useState } from 'react'
import Header from '../components/Header'
import { db } from '../../utils/firestore'
import { collection, addDoc } from "firebase/firestore";
import { storage } from '../../utils/firestore';
import { getDownloadURL, ref,uploadBytes } from 'firebase/storage';
import UserContext from '../../utils/UserContext';
import { validateAdd } from '../../utils/validateAdd';
import { useNavigate } from 'react-router-dom';


const addPostToDb=async (category,brand,title,description,price,images,email)=>{
  const storageRef = ref(storage, `images/${images[0]?.name}`);

  try {
   
   

    const snapshot=await uploadBytes(storageRef,images[0])
    const imgUrl=await getDownloadURL(ref(storage,`images/${images[0]?.name}`))

    
    const docRef = await addDoc(collection(db, "posts"), {
      email:email,
      category: category,
      brand:brand,
      title: title,
      description:description,
      price:price,
      imgUrl:imgUrl
    });
    console.log("Document written with ID: ", docRef.id);
     return true
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}




const AddAdd = ({setAuthData,isAuthenticated}) => {
  const user=useContext(UserContext)
  const email=user?.loggedInUser?.email
  const category=useRef(null)
  const brand=useRef(null)
  const title=useRef(null)
  const description=useRef(null)
  const price=useRef(null)
  const images=useRef([])
  const [isValidatedArr,setIsValidatedArr]=useState([])
  const navigate=useNavigate()
console.log(email)
  if(isAuthenticated===false) {
    navigate('/')
    window.location.reload(true)
 } 

  const handleSubmit=async ()=>{

   const validationArr= validateAdd(
      category?.current?.value,
      brand?.current?.value,
      title?.current?.value,
      description?.current?.value,
      price?.current?.value,
      images?.current?.files,
    )

    setIsValidatedArr(validationArr)

    console.log(validationArr)
    const isFormValid=validationArr.find(function(el){
      return el===false
    })

    if(isFormValid===false){
      console.log('form is invalid')
      return 
    }
    console.log('form will be submitted')
    const isSubmitted=await addPostToDb(
      category?.current?.value,
      brand?.current?.value,
      title?.current?.value,
      description?.current?.value,
      price?.current?.value,
      images?.current?.files,
      email
      )

      if(isSubmitted===true){
        navigate('/home')
      window.location.reload(true);
      } 
    console.log(images?.current?.files)
  }
  return (
    <>
    <Header/>
    <div className='m-44 '>
        <h1 className='text-center text-4xl uppercase m-14'>Post Your Add</h1>
        <div className='border-2 border-black mx-96 p-10 h-full min-w-[500px]'>
          <form onSubmit={(e)=>e.preventDefault()} className='flex flex-col h-fit '>

            <div className='border-2 p-14'>
            <h1 className='uppercase text-3xl font-semibold pb-3'>INCLUDE SOME DETAILS</h1>
           <div className='flex flex-col '>
            {isValidatedArr[0]===false && <p className='text-red-500'>Category cannot be empty</p>}
            <label htmlFor="" className='text-xl pb-3'>Category</label>
            <select ref={category} name="category" id="" className='w-[100%] h-[70px] text-xl bg-white focus:border-2 focus :border-black border-2 border-black'>
              <option value="" selected disabled>choose category</option>
              <option value="mobiles">Mobile Phones</option>
              <option value="laptops">Laptops</option>
            </select>
            </div>

            <div className='flex flex-col'>
            {isValidatedArr[1]===false && <p className='text-red-500'>Brand is invalid</p>}
            <label htmlFor="" className='text-xl  py-3'>Brand</label>
            <input ref={brand} className='h-[70px] w-[100%] focus:border-2 focus :border-black border-2 border-black' type="text" name="brand" id="" />
            </div>

     

            <div className='flex flex-col'>
            {isValidatedArr[2]===false && <p className='text-red-500'>Title is invalid</p>}
            <label htmlFor="" className='text-xl  py-3'>Add Title</label>
            <input ref={title} className='h-[70px] w-[100%] focus:border-2 focus :border-black border-2 border-black' type="text" name="title" id="" />
            </div>

            <div className='flex flex-col'>
            {isValidatedArr[3]===false && <p className='text-red-500'>Description is invalid</p>}
            <label htmlFor="" className='text-xl py-3'>Description</label>
            <textarea ref={description} className='h-[200px] w-[100%] focus:border-2 focus :border-black border-2 border-black' type="text" name="description" id="" />
            </div>
    </div>

    <div className='border-2 p-14 pt-3'>
            <div className='flex flex-col'>
            {isValidatedArr[4]===false && <p className='text-red-500'>Price is invalid</p>}
            <label htmlFor="" className='text-xl py-3'>Set a Price</label>
            <input ref={price} className='h-[70px] w-[100%] focus:border-2 focus :border-black border-2 border-black' type="number" name="price" id="" />
            </div>

            <div className='flex flex-col'>
            {isValidatedArr[5]===false && <p className='text-red-500'>image is invalid</p>}
            <label htmlFor="" className='text-xl py-3 '></label>
            <input ref={images} className='h-[300px] w-[300px] focus:border-2 focus :border-black border-2 border-black' type="file" name="images" id="" multiple />
            </div>
       </div>

             <button onClick={()=>{
              handleSubmit()
             }} className='p-3 m-auto bg-gray-400 text-black w-1/4'>Post Now</button>

    
          </form>



        </div>
    </div>
    </>
  )
}

export default AddAdd