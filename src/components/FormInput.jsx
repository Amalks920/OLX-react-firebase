
const FormInput = ({label,type,ref}) => {
  console.log(ref)
  return (
    
    <div className="flex flex-col m-5">
    <label className="text-base sm:text-lg
            md:text-xl lg:text-2xl xl:text-2xl mx-5" htmlFor="">{label}</label>
    <input onChange={(e)=>console.log(ref)} type={type} ref={ref} className="h-16 text-black max-[690px]:h-[50px] p-5 rounded-sm"/>
  </div>
  )
}

export default FormInput