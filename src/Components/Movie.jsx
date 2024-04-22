import { useNavigate } from "react-router-dom";
import TopNav from "./templetes/TopNav";
import { useEffect, useState } from "react";
import DropDown from "./templetes/DropDown";
import InfiniteScroll from "react-infinite-scroll-component";
import Cart from "./templetes/Cart";
import axios from "../utils/axios";
import { CardShimmer } from "./Shimmer/CardShimmer";
function Movie() {
  document.title = "Cineflex | movie";
    const navigate = useNavigate()
    const [category, setCategory] = useState("now_playing")
    const [movie,setMovie] = useState([])
    const [page,setPage] = useState(1)
    const [hasMore,setHasMore] = useState(true)


    const getMovie = async ()=>{
      try{
          const {data} = await axios.get(`/movie/${category}?page=${page}`)
       if(data.results.length >0){
        setMovie((prev)=>[...prev, ...data.results])
        setPage(page + 1);
        console.log(data);
       }else{
         setHasMore(false);
       }
      }catch(e){
        console.error("Error :",e)
    }}

    const refreshHandler = ()=>{
        if(movie.length === 0){
            getMovie()
        }
        else{
            setPage(1)
            setMovie([])
            getMovie()
        }
    }

   useEffect(()=>{
     refreshHandler();
   },[category])

  return movie.length >0 ? (
    <>
     <div className="w-screen h-screen">
     <div className="w-full h-[7.2vw] pb-5 py-2  px-16 flex items-center justify-start">
            <div className="flex items-center  text-center gap-1">
            <i
              onClick={() => navigate(-1)}
              className="text-white cursor-pointer ri-arrow-left-line pt-1 text-base"
            ></i>
             <h1 className="text-white text-xl">Movie</h1>
            </div>
           <TopNav/>
           <DropDown
              title="Category"
              options={["popular","top_rated","upcoming","now_playing"]}
              func={(e)=>setCategory(e.target.value)}
           />
        </div>
     <InfiniteScroll
        dataLength={movie.length}
        next={getMovie}
        hasMore={hasMore}
     >
        <Cart data={movie} title="movie"/>
     </InfiniteScroll>
        
     </div>
    </>
  ):(<CardShimmer/>)
}

export default Movie;