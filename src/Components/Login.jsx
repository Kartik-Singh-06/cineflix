import { useState } from "react";

const Login = () => {
   const [isSignedIn,setIsSignedIn] =useState(true)
  const HandleForm = ()=>{
    setIsSignedIn(!isSignedIn)
  }
  return (
    <>
      
        <div
          style={{
            background: `linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.5),rgba(0,0,0,.8)),url(https://static.vecteezy.com/system/resources/previews/029/785/028/non_2x/director-s-chair-with-megaphone-and-clapboard-free-photo.jpg)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="w-screen h-screen relative overflow-hidden"
        >
          <div className=" flex justify-center mt-[13%]">
            <form className="w-3/12 h-[50vh] bg-black/40 backdrop-blur rounded-lg px-[2%]">
              <h1 className="font-black text-3xl text-[#dadada] my-5">{isSignedIn ? "Sign In" : "Sign Up"}</h1>
              {!isSignedIn && <input type="text" placeholder="Enter Full Name"  className="py-3 rounded-md w-full mb-4 px-3 bg-zinc-700 outline-none text-zinc-100" />}
               <input type="email" placeholder="Enter Email"  className="py-3 rounded-md w-full  px-3 bg-zinc-700 outline-none text-zinc-100 mb-4" />
               <input type="password" placeholder="Enter Password" className="py-3 rounded-md w-full  px-3 bg-zinc-700 outline-none text-zinc-100 mb-6" />
               <button onClick={(e)=>(
                e.preventDefault()
               )} className="py-2 px-3 w-full rounded-md bg-[#FF671F] text-white font-semibold" type="submit">{isSignedIn ? "Sign In" : "Sign Up"}</button>
               <p onClick={HandleForm} className="mt-3 cursor-pointer text-[#dadada] text-sm ml-1">{isSignedIn ? "If not Register? Please Sign Up" : "Already User? Please Sign In"}</p>
            </form>
          </div>
         
        </div>
    </>
  );
};

export default Login;
