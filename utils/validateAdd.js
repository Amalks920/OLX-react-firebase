import { useState } from "react"

export const validateAdd=(
    category,
    brand,
    title,
    description,
    price,
    images,
)=>{
    const validateResult=[]
    const isBrandValid=/^[A-Za-z]+$/.test(brand)
    const isTitleValid=/^(.|\s)*[a-zA-Z]+(.|\s)*$/.test(title)
    const isDescriptionValid=/^(.|\s)*[a-zA-Z]+(.|\s)*$/.test(description)
    const isPriceValid=/^\d+(?:\.\d{1,2})?$/.test(price)

    if(category.length===0){
       validateResult.push(false)
    }else{
        validateResult.push(true)
    }
    
    validateResult.push(
        isBrandValid,
        isTitleValid,
        isDescriptionValid,
        isPriceValid
        )
     const d=images[0]?.type

    if(d?.startsWith('image')===true){
        validateResult.push(true)
    }else{
        validateResult.push(false)
    }

    console.log(validateResult)
    return validateResult
}