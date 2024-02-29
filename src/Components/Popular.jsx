import { useNavigate } from "react-router-dom"
import TopNav from "./templetes/TopNav"
import DropDown from "./templetes/DropDown"
import { useEffect, useState } from "react"
import Cart from "./templetes/Cart"
import InfiniteScroll from "react-infinite-scroll-component"
import axios from "../utils/axios"
import { CardShimmer } from "./Shimmer/CardShimmer"

function Popular() {
    const navigate = useNavigate()
    const [popular , setPopular] = useState([])
    const [category,setCategory] =useState("movie")
    const [page,setPage] = useState(1)
    const [hasMore,setHasMore] = useState(true)

    const getPopular = async ()=>{
        try{
       const {data} = await axios.get(`${category}/popular?page=${page}`)
      if(data.results.length > 0){
        setPopular((prev)=>[...prev, ...data.results]);
        setPage(page + 1);
       
      }else{
        setHasMore(false)
      }
              
        }catch(err){
            console.error("Error : ",err);
        }
    }
const refreshHandler=()=>{
    if(popular.length === 0){
        getPopular();
    }
    else{
        setPage(1);
        setPopular([]);
        getPopular();
    }
}



useEffect(()=>{
   refreshHandler();
},[category])


  return popular.length > 0 ? (
   <>
    <div className="w-screen h-screen bg-[#1F1E24]">
        <div className="w-full h-[7.2vw]  py-2  px-16 flex items-center justify-start">
            <div className="flex items-center text-center gap-1">
            <i
              onClick={() => navigate(-1)}
              className="text-white cursor-pointer ri-arrow-left-line pt-1 text-base"
            ></i>
             <h1 className="text-white text-xl">Popular</h1>
            </div>
           <TopNav/>
           <DropDown
              title="category"
              options={["tv","movie"]}
              func={(e)=>setCategory(e.target.value)}
           />
        </div>
         <InfiniteScroll
          dataLength={popular.length}
          next={getPopular}
          hasMore={hasMore}
         >
            <Cart data={popular} title={category} />
         </InfiniteScroll>

       
    </div>
   </>
  ): (<CardShimmer/>)
}

export default Popular