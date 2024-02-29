import { useEffect, useState } from "react";
import axios from "../utils/axios";
import SideNav from "./templetes/SideNav";
import TopNav from "./templetes/TopNav";
import Header from "./templetes/Header";
import Carts from "./templetes/Carts";
import DropDown from "./templetes/DropDown";
import { HomeShimmer } from "./Shimmer/HomeShimmer";

const Home = () => {
  document.title = "Cineflex | Homepage";
  const [banner, setBanner] = useState(null);
  const [trending, setTrending] = useState(null);
  const [categories, setCategories] = useState("all");

  const getBanner = async () => {
    try {
      const { data } = await axios.get(`trending/all/day`);
     console.log(data);
      let random =
        data.results[Math.floor(Math.random() * data.results.length)];
      setBanner(random);
    } catch (err) {
      console.log(err);
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`trending/${categories}/day`);

      setTrending(data?.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTrending();
    !banner && getBanner();
  }, [categories]);
  // console.log(banner);
  return banner && trending ? (
    <>
      <SideNav />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden ">
        <TopNav />

        <Header data={banner} />
        <div className="flex justify-between mb-5 py-4 px-5 ">
          <h1 className="text-3xl font-bold mb-5 text-zinc-300">Trending</h1>
          <DropDown
            title="Filter"
            options={["tv", "movie", "all"]}
            func={(e) => setCategories(e.target.value)}
          />
        </div>
        <Carts data={trending} />
      </div>
    </>
  ) : (
    <HomeShimmer/>
  );
};
export default Home;
