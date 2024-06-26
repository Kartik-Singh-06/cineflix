import { signOut } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom"
import { auth } from "../../utils/Firebase";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


function SideNav() {
  const user = useSelector(state => state.user)
  const navigate = useNavigate()
  const handleLogout = ()=>{
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
     navigate("*")
    });
  }
  return (
    <>
      <div className="w-[20%] h-full px-10 py-6 border-r-[1.5px] border-zinc-400">
        <h1 className="text-2xl font-black text-white "> <i style={{color:"#FF671F"}} className="ri-clapperboard-fill mr-2"></i> <span>Cine</span><span className="text-[#ff661fdd] ">Flix</span></h1>
        
         <nav className="flex flex-col text-xl mb-5 font-semibold text-zinc-300">
         <h1 className="text-white mt-8 mb-2 text-xl font-semibold">New Feeds</h1>
             <NavLink to='/trending' className="duration-100  hover:bg-[#ff661f97]  hover:text-white p-5 rounded-xl"> <i className="ri-fire-fill mr-1"></i> Trending</NavLink>
             <NavLink to="/popular" className="duration-100 hover:bg-[#ff661f97]  hover:text-white p-5 rounded-xl"> <i className="mr-1 ri-bard-fill"></i> Popular</NavLink>
             <NavLink to='/movie' className="duration-100 hover:bg-[#ff661f97]  hover:text-white p-5 rounded-xl"> <i className="mr-1 ri-movie-2-line"></i> Movies</NavLink>
             <NavLink to='/tv' className="duration-100  hover:bg-[#ff661f97]  hover:text-white p-5 rounded-xl"> <i className="mr-1 ri-tv-2-line"></i> Tv Shows</NavLink>
             <NavLink to='/person' className="duration-100  hover:bg-[#ff661f97]  hover:text-white p-5 rounded-xl"> <i className="mr-1 ri-team-fill"></i> People</NavLink>
         </nav>
         <hr className="border-zinc-500"/>
          <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-zinc-200 my-2 ">Website Info.</h1>
           
           <NavLink to="/about" className="text-lg p-4 text-zinc-300 font-medium duration-100  hover:bg-[#e8e4e23d]  hover:text-white rounded-xl"> <i className="mr-1 ri-book-line"></i> About</NavLink>
           <NavLink  className="text-lg p-4 text-zinc-300 font-medium duration-100  hover:bg-[#e8e4e23d]  hover:text-white rounded-xl"> <i className=" mr-1 ri-phone-line"></i> Contact Us</NavLink>
           <button onClick={handleLogout} className="text-lg p-4 text-zinc-300 font-medium duration-100 text-left  hover:bg-[#e8e4e23d]  hover:text-white rounded-xl"><i className="mr-3 ri-logout-box-line truncate"></i>log out {user?.displayName}</button>
          </div>

      </div>
    </>
  )
}

export default SideNav