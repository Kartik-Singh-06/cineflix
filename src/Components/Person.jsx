import { useState , useEffect } from "react";
import axios from "../utils/axios";
import {  useNavigate } from "react-router-dom";
import Cart from "./templetes/Cart";
import TopNav from "./templetes/TopNav";
import InfiniteScroll from "react-infinite-scroll-component";
import { CardShimmer } from "./Shimmer/CardShimmer";


function Person() {
    const[people,setPeople] = useState([])
    const [category,setCategory] = useState("popular");
    const[page,setPage] = useState(1)
    const [hasMore,setHasMore] = useState(true)
    const navigate = useNavigate();
    
    const getPeople = async ()=>{
        try{
            const {data} = await axios.get(`/person/${category}`);
        if(data.results.length > 0){
            setPeople((prev)=>[...prev, ...data.results]);
            setPage( page + 1);
            
        }else{
            setHasMore(false);
        }
        console.log(data);
        }catch(err){
        console.error("Error : ",err);
        }
    }
    const refreshHandler =()=>{
      if(people.length === 0 ){
        getPeople();
      }
      else{
        setPage(1)
        getPeople();
        setPeople([]);
      }
    }

    useEffect(()=>{
        refreshHandler();
    },[])

  return people.length > 0 ? (
      <>
        <div className="w-screen h-screen" >
        <div className="w-full h-[7.2vw] pb-5 py-2  px-16 flex items-center justify-start">
            <div className="flex items-center  text-center gap-1">
            <i
              onClick={() => navigate(-1)}
              className="text-white cursor-pointer ri-arrow-left-line pt-1 text-base"
            ></i>
             <h1 className="text-white text-xl">Person</h1>
            </div>
           <TopNav/>
        </div>
           <InfiniteScroll 
           dataLength={people.length}
           next={getPeople}
           hasMore={false}>
            <Cart title="person" data={people} />
           </InfiniteScroll>
        </div>
      </>
  ):(<CardShimmer/>)
}

export default Person