import { NavLink } from "react-router-dom"


function SideNav() {
  return (
    <>
      <div className="w-[20%] h-full p-10 border-r-[1.5px] border-zinc-400">
        <h1 className="text-2xl font-black text-white "> <i style={{color:"#FF671F"}} className="ri-clapperboard-fill mr-2"></i> <span>Cine</span><span className="text-[#ff661fdd] ">Flix</span></h1>
         <nav className="flex flex-col text-xl mb-5 font-semibold text-zinc-300">
         <h1 className="text-white mt-8 mb-3 text-xl font-semibold">New Feeds</h1>
             <NavLink to='/trending' className="duration-100  hover:bg-[#ff661f97]  hover:text-white p-5 rounded-xl"> <i className="ri-fire-fill mr-1"></i> Trending</NavLink>
             <NavLink to="/popular" className="duration-100 hover:bg-[#ff661f97]  hover:text-white p-5 rounded-xl"> <i className="mr-1 ri-bard-fill"></i> Popular</NavLink>
             <NavLink to='/movie' className="duration-100 hover:bg-[#ff661f97]  hover:text-white p-5 rounded-xl"> <i className="mr-1 ri-movie-2-line"></i> Movies</NavLink>
             <NavLink to='/tv' className="duration-100  hover:bg-[#ff661f97]  hover:text-white p-5 rounded-xl"> <i className="mr-1 ri-tv-2-line"></i> Tv Shows</NavLink>
             <NavLink to='/person' className="duration-100  hover:bg-[#ff661f97]  hover:text-white p-5 rounded-xl"> <i className="mr-1 ri-team-fill"></i> People</NavLink>
         </nav>
         <hr className="border-zinc-500"/>
          <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-zinc-200 my-3 ">Website Info.</h1>
           
           <NavLink to="/about" className="text-lg p-4 text-zinc-300 font-medium duration-100  hover:bg-[#e8e4e23d]  hover:text-white rounded-xl"> <i className="mr-1 ri-book-line"></i> About Cine<span className="text-[#ff661fdd] ">Flix</span></NavLink>
           <NavLink  className="text-lg p-4 text-zinc-300 font-medium duration-100  hover:bg-[#e8e4e23d]  hover:text-white rounded-xl"> <i className=" mr-1 ri-phone-line"></i> Contact Us</NavLink>
          </div>

      </div>
    </>
  )
}

export default SideNav