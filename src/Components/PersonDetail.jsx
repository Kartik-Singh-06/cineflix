import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Carts from "../Components/templetes/Carts";
import { asyncLoadperson, removeDetail } from "../store/actions/personActions";
import {
  useNavigate,
  useParams,
  Link,
  useLocation,
 
} from "react-router-dom";
import { ComponentShimmer } from "./Shimmer/ComponentShimmer";

const PersonDetail = () => {
  const { pathname } = useLocation();
  const { info } = useSelector((state) => state.person);
  const navigate = useNavigate();
  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch( asyncLoadperson(id));
    return () => {
      dispatch(removeDetail());
    };
  },[id]);


  return info ?  (
    <>
      <div className="px-[10%] bg-[#1F1E24] w-screen  h-[140vh] flex pt-2">
      <Link>
            <i
              onClick={() => navigate(-1)}
              className="text-white hover:text-[#FF671F] text-2xl cursor-pointer ri-arrow-left-line pt-1"
            ></i>
          </Link>

            <div className="w-[30%] ">
            <div className="w-full flex flex-col mt-[5vw]">
           {/* poster  */}
           <div className="w-[80%] pb-6 border-b-[1px] border-zinc-400">
           <img
            className="object-cover  h-[50vh] rounded-md shadow-[9px_13px_10px_2px_rgb(0,0,0,.7)] "
            src={`https://image.tmdb.org/t/p/original/${
              info.detail.profile_path
            }`}
          />
          </div>
           <div className="flex w-[50%] gap-7 justify-between ml-10 mt-2 text-xl">
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
           <a
            target="_blank"
            href={`https://www.facebook.com/${info.externalid.instagram_id}/?hl=en`}
          >
            <i className=" text-zinc-300 ri-facebook-circle-fill"></i>
          </a>
           <a
            target="_blank"
            href={`https://www.twitter.com/${info.externalid.instagram_id}/?hl=en`}
          >
            <i className=" text-zinc-300 ri-twitter-x-fill"></i>
          </a>
           </div>
            </div>
         
           {/* personal Information */}
           <div>
             <h1 className="text-2xl text-zinc-400 font-semibold my-4">
              Personal Information
             </h1>
             <h1 className="text-lg text-zinc-400 font-semibold">
              Profession
             </h1>

             <h1 className="text-zinc-400">
              {info.detail.known_for_department}
             </h1>
             <h1 className="text-lg text-zinc-400 font-semibold">
              Gender
             </h1>

             <h1 className="text-zinc-400">
              {info.detail.gender ? "Male" : "Female"}
             </h1>
             <h1 className="text-lg text-zinc-400 font-semibold">
              Birthday
             </h1>

             <h1 className="text-zinc-400">
              {info.detail.birthday}
             </h1>
             <h1 className="text-lg text-zinc-400 font-semibold">
              Death on 
             </h1>

             <h1 className="text-zinc-400">
              {info.detail.deathday ? (info.detail.deathday) : "Still alive "}
             </h1>
             <h1 className="text-lg text-zinc-400 font-semibold">
              Also Known as  
             </h1>

             <h1 className="text-zinc-400">
              {info.detail.also_known_as.join(', ')}
             </h1>
           </div>

          </div>
        {/* Right side Section */}
        <div className="w-[70%]">
           <div className="my-16">
           <h1 className="text-[2.6vw] text-zinc-400 font-black my-4">
             {info.detail.name}
             </h1>
             <h1 className="text-2xl text-zinc-400 font-bold">
              Biography
             </h1>
             <p className="text-sm text-zinc-400 my-2">{info.detail.biography}</p>
            
             <h1 className="text-2xl text-zinc-400 my-6 font-bold">
              Featured
             </h1>
             <Carts data={info.combinedCredits.cast} />
           </div>
        </div>
      </div>
    </>
  ):(<ComponentShimmer/>)
}

export default PersonDetail