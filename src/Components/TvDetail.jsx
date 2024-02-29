import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carts from "../Components/templetes/Carts";
import { asyncLoadtv, removeDetail } from "../store/actions/tvActions";
import {
  useNavigate,
  useParams,
  Link,
  useLocation,
  Outlet,
} from "react-router-dom";
import noimage from "/noimage.png"
import { ComponentShimmer } from "./Shimmer/ComponentShimmer";

function TvDetail() {

  const { pathname } = useLocation();
  const { info } = useSelector((state) => state.tv);
  const navigate = useNavigate();
  const { id } = useParams();
  const scroll = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncLoadtv(id));
    return () => {
      dispatch(removeDetail());
    };
  }, [id]);

  const scrollLeft = () => {
    if (scroll.current) {
      scroll.current.scrollLeft -= 1100;
    }
  };

  const scrollRight = () => {
    if (scroll.current) {
      scroll.current.scrollLeft += 1100;
    }
  };


  return  info ? (
    <>
      {/* Part 1 links Nav */}
      <div
        style={{
          background: `linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7),rgba(0,0,0,.4)),url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
          backgroundPosition: "50% 0%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="w-screen min-h-[200vh] px-[10%] relative"
      >
        <nav className="w-full h-[10vh] items-center flex gap-16 mb-5 text-xl text-zinc-300">
          <Link>
            <i
              onClick={() => navigate(-1)}
              className="text-white hover:text-[#FF671F] text-2xl cursor-pointer ri-arrow-left-line pt-1"
            ></i>
          </Link>
          <a
            target="_blank"
            href={`https://www.instagram.com/${info.externalid.instagram_id}/?hl=en`}
          >
            <i className=" text-zinc-300 ri-instagram-line"></i>
          </a>
          <a
            target="_blank"
            href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
          >
            <i className="text-zinc-300 ri-global-line"></i>{" "}
          </a>
          <a target="_blank" href={info.detail.homepage}>
            <i className="text-zinc-300 ri-link"></i>{" "}
          </a>
          <a
            target="_blank"
            href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
          >
            <i className="text-zinc-300 ri-external-link-line"></i>{" "}
          </a>
        </nav>

        {/* part-2 Poster and Descriptions*/}
        <div className="w-full flex items-start gap-20">
          <img
            className="object-cover h-[50vh] rounded-md shadow-[9px_13px_10px_2px_rgb(0,0,0,.7)] "
            src={`https://image.tmdb.org/t/p/original/${
              info.detail.poster_path ||
              info.detail.backdrop_path ||
              info.detail.profile_path
            }`}
          />
          {/* text-section */}
          <div className=" ml-5">
            <h1 className="text-white font-semibold text-[4vw] -mt-[1.5vw]">
              {info.detail.name ||
                info.detail.title ||
                info.detail.original_name ||
                info.detail.original_title}
            </h1>
            <div className="flex gap-5">
              {info.detail.vote_average > 0 && (
                <div className="text-center  flex  items-center text-[#ffad1ff6] font-semibold ">
                  <div className=" text-[1vw] flex text-zinc-300">
                    Rating : {info.detail.vote_average.toFixed()}{" "}
                    <i className="mr-[3px] ml-[3px] text-[#ffad1ff6] ri-star-s-fill"></i>
                    / 10
                  </div>
                </div>
              )}
              <h2 className=" text-[1vw]  text-zinc-300 font-semibold">
                {" "}
                Released on : {info.detail.first_air_date}
              </h2>
            </div>
            <div className="flex text-[1vw]  font-semibold text-zinc-300 ">
              {" "}
              Genres :
              {info?.detail?.genres.map((item, index) => (
                <h2 className="text-zinc-300   mr-1 ml-1" key={index}>
                  {item.name}
                </h2>
              ))}
            </div>
            <h2 className=" text-[1vw]  text-zinc-300 font-semibold">
              {" "}
              Run Time : {info.detail.runtime} min
            </h2>
            <h2 className=" text-zinc-200 font-bold italic text-[1.2vw]">
              {info.detail.tagline}
            </h2>
            <h2
              className=" text-zinc-300 mt-2 mb-5
             text-[1.2vw]"
            >
              <span className="font-semibold text-[1.5vw] border-b-[1.4px] border-zinc-500">
                Overview
              </span>{" "}
              <br />
              {info.detail.overview}
            </h2>

            <Link
              to={`${pathname}/trailer`}
              className="py-2 px-4 rounded-lg cursor-pointer text-[white] font-semibold bg-[#FF671F]"
            >
              <i className=" text-[white] ri-play-fill"></i>Play Trailer
            </Link>
          </div>
        </div>

        {/* part 3 buys & platforms */}
        <div className="mt-5">
          {info.watchproviders && info.watchproviders.flatrate && (
            <div className="flex items-center gap-5">
              <h1 className="font-semibold text-white pt-4">
                Available on Platform :{" "}
              </h1>
              {info.watchproviders.flatrate.map((item, index) => (
                <img
                  key={index}
                  className="w-[4.8vh] cursor-pointer mt-5 h-[4.8vh] object-cover rounded-md"
                  src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
                />
              ))}
            </div>
          )}

          {info.watchproviders && info.watchproviders.rent && (
            <div className="flex items-center gap-5">
              <h1 className="font-semibold text-white pt-4">
                Available on rent :{" "}
              </h1>
              {info.watchproviders.rent.map((item, index) => (
                <img
                  key={index}
                  className="w-[4.8vh] cursor-pointer mt-5 h-[4.8vh] object-cover rounded-md "
                  src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
                />
              ))}
            </div>
          )}
          {info.watchproviders && info.watchproviders.buy && (
            <div className="flex items-center gap-5">
              <h1 className="font-semibold text-white pt-4">
                Available to Buy :{" "}
              </h1>
              {info.watchproviders.buy.map((item, index) => (
                <img
                  key={index}
                  className="w-[4.8vh] cursor-pointer mt-5 h-[4.8vh] object-cover rounded-md "
                  src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
                />
              ))}
            </div>
          )}
        </div>
        {/* 3.5 seasons */}
        {info.recommendations.length > 0 ? (
          <div  className="w-full mt-10 cursor-pointer mb-5  flex-shrink-0 rounded-lg ">
            <h2 className="font-bold text-[white] text-[2vw] mb-4">
              Seasons
            </h2>
            <div className="flex gap-5 overflow-x-auto  ">
             {info.detail.seasons.map((item,index)=>(
              <div className="flex-shrink-0 w-[15%]" key={index}>
                   <img 
                className="object-cover object-[center_20%] w-full  rounded-t-lg brightness-90 "
                src={ item.poster_path || item.backdrop_path || item.profile_path ?  (`https://image.tmdb.org/t/p/original/${
                  item.poster_path || item.backdrop_path || item.profile_path
                }`): (noimage)}
              />
               <h2 className="text-white font-semibold mt-2">{item.name}</h2>
              </div>

             ))}
            </div>
            
          </div>
        ) : null}



        {/* Part 4 recommendations */}
        {info.recommendations.length > 0 ? (
          <div className="pt-5 mt-[1vh] relative ">
            <h2 className="font-bold text-[white] text-[2vw] mb-4">
              Recommendations
            </h2>
            <div>
              <Carts
                scroll={scroll}
                data={
                  info.recommendations.length > 0
                    ? info.recommendations
                    : info.similar
                }
              />
            </div>
            <button
              onClick={scrollRight}
              className="p-2 w-[3vw] h-[3vw] rounded-full bg-[#FF671F] absolute top-[52%] -right-[2vw]"
            >
              <i className=" text-white ri-arrow-right-wide-line"></i>
            </button>
            <button
              onClick={scrollLeft}
              className="p-2 w-[3vw] h-[3vw] rounded-full bg-[#FF671F] absolute top-[52%] -left-[1vw]"
            >
              <i className=" text-white ri-arrow-left-wide-line"></i>
            </button>
          </div>
        ) : null}
        <Outlet />
      </div>
    </>
  ) : (
    (<ComponentShimmer/>)
  );
}

export default TvDetail