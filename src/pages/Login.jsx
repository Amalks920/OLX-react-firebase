import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import FormInput from "../components/FormInput";
import React, { useContext, useEffect, useRef, useState } from "react";
import UserContext from "../../utils/UserContext";

const Login = ({setAuthData,isAuthenticated}) => {
  
  const navigate=useNavigate()
  const [isSignup,setIsSignUp]=useState(false)
  const [errors,setErrors]=useState([])
  const [serverErrors,setServerErrors]=useState('')
  const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null);  
  
  const context=useContext(UserContext)
  if(isAuthenticated){
    navigate('/home') 
    window.location.reload(true)
  }  


  function handleSignin(){
    setIsSignUp(!isSignup)
    setErrors([])
    setServerErrors('')

  }

  return (
    <div
      className="bg-white flex
     justify-center items-center h-[100vh] rounded-md">
      <div className="bg-gray-300 max-[690px]:w-[90%]">
        <h1 className="text-red-700 m-10 text-center">{serverErrors}</h1>
         <form onSubmit={(e)=>e.preventDefault()} action="" className="text-white  sm:m-8  text-3xl">
         <h1 className="font-bold ms-6 mt-6">{isSignup?"Signup":"Log in"}</h1>

          <div className="text-center mt-5">
          <button type="button" className="border-2 border-white 
           px-24 sm:py-3  w-[90%] text-base sm:text-lg
            md:text-xl lg:text-2xl xl:text-2xl mx-5">
            {isSignup?"Signup with Google":"Login With Google"}
          </button>
          </div>

          {isSignup && <div className="flex flex-col m-5">
          {(errors[0]===false) && <p className="text-red-500 text-sm">'Name is Invalid'</p>}
            <label className="text-base sm:text-lg
            md:text-xl lg:text-2xl xl:text-2xl mx-5" htmlFor="">{"Name"}</label>
            <input  type="text" ref={name}  className="h-16 text-black max-[690px]:h-[50px] p-5 rounded-sm"/>
            </div>}

            <div className="flex flex-col m-5">
            {errors[1]===false && <p className="text-red-500 text-sm">'Email is Invalid'</p>}
            <label className="text-base sm:text-lg
            md:text-xl lg:text-2xl xl:text-2xl mx-5" htmlFor="">{"Email"}</label>
            <input  type="email" ref={email}  className="h-16 text-black max-[690px]:h-[50px] p-5 rounded-sm"/>
            </div>

            <div className="flex flex-col m-5">
            {errors[2]===false && <p className="text-red-500 text-sm">'Password is Invalid'</p>}
            <label className="text-base sm:text-lg
            md:text-xl lg:text-2xl xl:text-2xl mx-5" htmlFor="">{"Password"}</label>
            <input  type="password" ref={password}  className="h-16 text-black max-[690px]:h-[50px] p-5 rounded-sm"/>
            </div>

         <div className="">
         <Button  border={'border-0'}
         marginTop={'mt-5'} width={'w-[92%]'}  marginX={'mx-5'}
         marginBottom={'mb-7'} paddingY={'py-2'} color={'bg-blue-400'}
         nameRef={name} emailRef={email} passwordRef={password}
         errors={errors} setErrors={setErrors} setAuthData={setAuthData}
         setServerErrors={setServerErrors}
          />
         </div>

         <p className="text-xl text-center">{isSignup?"Already have an account?":"Don't you have an Account?"}</p>
         <p onClick={()=>{
          handleSignin()
         }} className="text-xl  text-center text-blue-600 cursor-pointer">{isSignup?"Login":"Signup"}</p>
         </form>
      </div>
    </div>
  );
};

export default Login;
