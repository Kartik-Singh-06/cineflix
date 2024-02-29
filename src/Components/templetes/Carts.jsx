import { Link } from "react-router-dom";
import noimage from "/noimage.png"

function Carts({ data, func,scroll}) {

  return (
    <>
    {/* Homepage Carts Trending */}
      <div className="flex gap-4 ml-2 px-7 overflow-x-auto" ref={scroll}>
        {data.length >0 ? data.map((item, index) => (
          <Link 
          to={`/${item.media_type }/details/${ item.id}`}
            key={index}
            className="w-[18vw] cursor-pointer mb-5 h-[38vh] flex-shrink-0 rounded-lg bg-black/50 backdrop-blur-lg "
          >
            <div className="w-full h-[25vh] ">
              <img
                className="object-cover object-[center_20%] w-full h-[25vh] rounded-t-lg "
                src={ item.poster_path || item.backdrop_path || item.profile_path ?  (`https://image.tmdb.org/t/p/original/${
                  item.poster_path || item.backdrop_path || item.profile_path
                }`): (noimage)}
              />
              <h1 className="text-zinc-200 truncate text-2xl font-semibold p-2 ">
                {item.name || item.title || item.name || item.original_title}
              </h1>
              <p className="text-zinc-400 text-xs  px-2">
                {item.overview.slice(0, 50)}...more
              </p>
            </div>
          </Link>
        )): null
      }
      </div>
    </>
  );
}

export default Carts;
