import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./templetes/TopNav";
import DropDown from "./templetes/DropDown";
import InfiniteScroll from "react-infinite-scroll-component";
import Cart from "./templetes/Cart";
import axios from "../utils/axios";
import { CardShimmer } from "./Shimmer/CardShimmer";

const TvShow = () => {

  
  const navigate = useNavigate();
  const [tv, setTv] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [category, setCategory] = useState("top_rated");


  const getTvShow = async ()=>{
    const {data}=await axios.get(`/tv/${category}?page=${page}`)
    try{
        if( data.results.length > 0){
            setTv((prev)=>[...prev,...data.results])
            setPage(page+1);
        }
        else{
            setHasMore(false)
        }
    }
    catch(err){
       console.error("Error :",err);
    }
  }

  const refreshHandler =()=>{
    if(tv.length === 0){
        getTvShow()
    }else{
        setPage(1)
        setTv([]);
        getTvShow();
    }
  }

  useEffect(()=>{
    refreshHandler();
  },[category])


  return tv.length >0 ? (
    <>
      <div className="w-screen h-screen">
        <div className="w-full h-[7.2vw] pb-5 py-2  px-16 flex items-center justify-start">
          <div className="flex items-center  text-center gap-1">
            <i
              onClick={() => navigate(-1)}
              className="text-white cursor-pointer ri-arrow-left-line pt-1 text-base"
            ></i>
            <h1 className="text-white text-xl">Tv</h1>
          </div>
          <TopNav />
          <DropDown
            title="Category"
            options={["popular", "top_rated"]}
            func={(e) => setCategory(e.target.value)}
          />
        </div>
        <InfiniteScroll 
        dataLength={tv.length}
        next={getTvShow}
        hasMore={hasMore}>
            <Cart data={tv} title="tv" />
        </InfiniteScroll>
      </div>
    </>
  ): (<CardShimmer/>)
};
export default TvShow;
