import axios from "../../utils/axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import noimage from "/noimage.png"


function TopNav() {
    const[searchItem,setSearchItem] = useState("")
    const [search ,setSearch] = useState([])

     const getSearchItem = async ()=>{
      try{
        const {data} = await axios.get(`search/multi?query=${searchItem}`)

        setSearch(data?.results)
      }
      catch(err){
        console.log(err);
      }
     }
      useEffect(()=>{
        getSearchItem();
      },[searchItem])

  //  console.log(search);
  return (
    <>
      <div className="w-full h-[10vh] z-10 relative py-2">
     <div className="bg-zinc-800  w-2/4 mx-auto flex items-center justify-between  py-2 px-4 rounded-xl">
     <div className="flex w-full items-center gap-2">
     <i className="ri-search-line text-white text-xl"></i>
         <input type="text"
           onChange={(e)=>setSearchItem(e.target.value)}
           value={searchItem}
           className="w-full bg-transparent text-white border-none outline-none py-2 px-3  rounded-lg"
           placeholder="Search here...."

         />
     </div>
      {searchItem.length >0 && <i onClick={()=>(setSearchItem(""))} className="ri-close-line text-white cursor-pointer text-xl"></i>}
     </div>
 

    <div className="w-[50%] max-h-[50vh] absolute top-[97%]  rounded-lg right-[25%] bg-black/40  backdrop-blur-md  overflow-scroll  ">
      
    {search.map((item,index)=>(
   <Link to={`/${item.media_type}/details/${item.id}`} key={index} className="inline-block flex duration-200 justify-start gap-5 items-center border-b-[1px] border-zinc-700 p-10 w-full hover:bg-white/20"> 
     <img className="w-[15vh] h-[15vh] object-contain overflow-hidden rounded-xl hover:scale-125 " 
          src={item.poster_path || item.backdrop_path || item.profile_path ?
               (`https://image.tmdb.org/t/p/original/${item.poster_path || item.backdrop_path || item.profile_path}`) 
               : noimage
          }
     />
     <span className="text-white text-base font-semibold">
       {item.title || item.original_name || item.name || item.original_title}
     </span>
   </Link>
))}

    
     </div> 
      </div>
    </>
  )
}

export default TopNav


