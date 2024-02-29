import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useLocation, useNavigate,Link } from "react-router-dom";
import ErrorPage from "./ErrorPage";

const Trailer = () => {
    const navigate = useNavigate()
    const {pathname} = useLocation();
    const category = pathname.includes("movie") ? "movie" : "tv";
   const trailerVideo = useSelector(state => state[category].info.videos)
  return  (
    <div className="absolute top-0 left-0 w-screen h-screen flex justify-center  items-center bg-[rgba(0,0,0,0.8)]">
           <Link className="absolute top-10 right-16">
            <i
              onClick={() => navigate(-1)}
              className="text-white hover:text-[#FF671F] text-4xl cursor-pointer ri-close-fill pt-1"
            ></i>
          </Link>
        
    {
        trailerVideo ? (   <ReactPlayer
        controls
            width={1280}
            height={520}
           url={`https://www.youtube.com/watch?v=${trailerVideo?.key}`} />):(<ErrorPage/>)
    }

    </div>
  )
};

export default Trailer;
