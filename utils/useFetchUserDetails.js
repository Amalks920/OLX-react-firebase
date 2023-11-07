import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./firestore";


const useFetchUserDetails=(uid)=>{
    const [users,setUsers]=useState([])
    console.log(users)
    useEffect(()=>{


    },[])
}

export default useFetchUserDetails;