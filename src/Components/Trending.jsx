import { useNavigate } from "react-router-dom";
import TopNav from "../Components/templetes/TopNav";
import DropDown from "../Components/templetes/DropDown";
import { useEffect, useState } from "react";
import axios from "../utils/axios";
import Cart from "../Components/templetes/Cart";
import InfiniteScroll from 'react-infinite-scroll-component'
import { CardShimmer } from "./Shimmer/CardShimmer";

function Trending() {
  const [category, setcategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  const navigate = useNavigate();

  const getTrending = async () => {
   try{
    const { data } = await axios.get(
      `trending/${category}/${duration}?page=${page}`
    );
    if (data.results.length > 0) {
      setTrending((prev) => [...prev, ...data.results]);
      setPage(page + 1);
      console.log(data);
    }else{
      sethasMore(false)
    }
   }catch(err){
    console.error("error: " + err);
   }
  };

  const refreshHandler = async () => {
  if(trending.length === 0 ){
    getTrending();
  }else{
    setPage(1)
    setTrending([])
    getTrending();
  }
  }

  useEffect(() => {
    refreshHandler();
    // getTrending();
  }, [category, duration]);

  return trending.length > 0 ? (
    <>
      <div className="w-screen h-screen bg-[#1F1E24]">
        <div className="w-full py-4 pb-10 px-16 flex items-center">
          <div className="flex items-center text-center gap-1">
            <i
              onClick={() => navigate(-1)}
              className="text-white cursor-pointer ri-arrow-left-line pt-1 text-base"
            ></i>
            <h1 className="text-white text-xl">Trending</h1>
          </div>

          <TopNav />
          <div className="flex gap-2">
            <DropDown
              title="Category"
              options={["movie", "tv", "all"]}
              func={(e) => setcategory(e.target.value)}
            />
            <DropDown
              title="Duration"
              options={["week", "day"]}
              func={(e) => setDuration(e.target.value)}
            />
          </div>
        </div>

        <InfiniteScroll
          dataLength={trending.length}
          next={getTrending}
          hasMore={hasMore}
          // loader={<h2>Loading..</h2>}
        >
          <Cart data={trending} title={category} />
        </InfiniteScroll>
      </div>
    </>
  ): (<CardShimmer/>)
}

export default Trending;
