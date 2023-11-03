import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";

const Header=()=>{

    function handleLogout () {
        signOut(auth).then(() => {
         console.log('logout')
        }).catch((error) => {
         console.log(error)
        });
    }
    return (
        <nav className="bg-slate-200 h-[80px] flex justify-center gap-5 items-center">
            <div className="flex justify-center items-center border-2 border-black">
            <svg  className="cursor-pointer w-[30%] h-[20%]"  viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-w4DG7" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
            </div>
            <div  className="w-[30%] h-full flex justify-center items-center">
                <input type="text" className="w-[100%] h-[70%] p-5 text-2xl" placeholder="Find Cars,Mobile Phones and more" />
                <button className="border-2 border-black h-[70%] text-white bg-black px-5">Search</button>
            </div>
            <div className="border-2 border-black flex gap-5 ">
               <span>
                <select name="" id="" className="p-3 w-28">
                    <option value="">English</option>
                    <option value="">Hindi</option>
                    <option value="">Malayalam</option>
                </select>
               </span>
               <span className="pt-2">message</span>
               <span className="pt-2">notification</span>
               <span>
               <button className="bg-black text-white  py-2 px-4" onClick={
                    ()=>{
                    handleLogout()
                    }
                }>Logout</button>
               </span>

            </div>
            <div className="border-2 border-black">

            </div>

            <div className="">
                <button className="bg-yellow-300 p-4 w-[200%] rounded-full">Sell</button>
            </div>
            
        </nav>
    )
}

export default Header