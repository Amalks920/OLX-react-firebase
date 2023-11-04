import React, { useContext, useRef } from 'react'
import Header from '../components/Header'
import { db } from '../../utils/firestore'
import { collection, addDoc } from "firebase/firestore";
import { storage } from '../../utils/firestore';
import { getDownloadURL, ref,uploadBytes } from 'firebase/storage';
import UserContext from '../../utils/UserContext';



const addPostToDb=async (category,brand,title,description,price,images,uid)=>{
  const storageRef = ref(storage, `images/${images[0]?.name}`);

  try {
   
   

    const snapshot=await uploadBytes(storageRef,images[0])
    const imgUrl=await getDownloadURL(ref(storage,`images/${images[0]?.name}`))

    
    const docRef = await addDoc(collection(db, "posts"), {
      uid:uid,
      category: category,
      brand:brand,
      title: title,
      description:description,
      price:price,
      imgUrl:imgUrl
    });
    
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}




const AddAdd = () => {
  const user=useContext(UserContext)
  const uid=user.loggedInUser.uid
  const category=useRef(null)
  const brand=useRef(null)
  const title=useRef(null)
  const description=useRef(null)
  const price=useRef(null)
  const images=useRef([])

  const handleSubmit=()=>{
    addPostToDb(
      category?.current?.value,
      brand?.current?.value,
      title?.current?.value,
      description?.current?.value,
      price?.current?.value,
      images?.current?.files,
      uid
      )
    console.log(images?.current?.files)
  }
  return (
    <>
    <Header/>
    <div className='m-44 '>
        <h1 className='text-center text-4xl uppercase m-14'>Post Your Add</h1>
        <div className='border-2 border-black mx-96 p-10 h-full'>
          <form onSubmit={(e)=>e.preventDefault()} className='flex flex-col h-fit'>

            <div className='border-2 p-14'>
            <h1 className='uppercase text-3xl font-semibold pb-3'>INCLUDE SOME DETAILS</h1>
           
           <div className='flex flex-col '>
            <label htmlFor="" className='text-xl pb-3'>Category</label>
            <select ref={category} name="category" id="" className='w-[100%] h-[70px] text-xl bg-white focus:border-2 focus :border-black border-2 border-black'>
              <option value="" selected disabled>choose category</option>
              <option value="mobiles">Mobile Phones</option>
              <option value="laptops">Laptops</option>
            </select>
            </div>

            <div className='flex flex-col'>
            <label htmlFor="" className='text-xl  py-3'>Brand</label>
            <input ref={brand} className='h-[70px] w-[100%] focus:border-2 focus :border-black border-2 border-black' type="text" name="brand" id="" />
            </div>

     

            <div className='flex flex-col'>
            <label htmlFor="" className='text-xl  py-3'>Add Title</label>
            <input ref={title} className='h-[70px] w-[100%] focus:border-2 focus :border-black border-2 border-black' type="text" name="title" id="" />
            </div>

            <div className='flex flex-col'>
            <label htmlFor="" className='text-xl py-3'>Description</label>
            <textarea ref={description} className='h-[200px] w-[100%] focus:border-2 focus :border-black border-2 border-black' type="text" name="description" id="" />
            </div>
    </div>

    <div className='border-2 p-14 pt-3'>
            <div className='flex flex-col'>
            <label htmlFor="" className='text-xl py-3'>Set a Price</label>
            <input ref={price} className='h-[70px] w-[100%] focus:border-2 focus :border-black border-2 border-black' type="number" name="price" id="" />
            </div>

            <div className='flex flex-col'>
            <label htmlFor="" className='text-xl py-3 '>Upload upto 20 images</label>
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