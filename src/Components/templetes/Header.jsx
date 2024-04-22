import { Link } from "react-router-dom";

function Header({ data }) {
  // console.log(data);
  return (
    <>
      <div
        style={{
          background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.4),rgba(0,0,0,.9)),url(https://image.tmdb.org/t/p/original/${
            data.poster_path || data.backdrop_path
          })`,
          backgroundPosition: "50% 18%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full  h-[50vh] p-5"
      >
        <div className="w-full pl-5 h-[42vh] flex flex-col justify-end ">
          <h1 className="text-zinc-300 font-bold text-3xl">
            {data.title ||
              data.original_name ||
              data.original_title ||
              data.name}
          </h1>
          <p className="text-zinc-400 text-sm mt-2 w-2/4">
            {data.overview.slice(0, 200)}
            <Link to={`${data.media_type}/details/${data.id}`} className="text-[#ff661faa] cursor-pointer text-sm">
              ...more
            </Link>
          </p>
          <p className="text-zinc-400 text-sm mt-1">
            <i className="ri-disc-line text-[#ff661faa] mr-1"></i>
            {data.media_type}
          </p>

          <Link to={`/${data.media_type}/details/${data.id}/trailer`} className="w-fit py-2 px-4 mt-3 text-zinc-300 shadow-md font-semibold rounded-full bg-[#ff661faa] ">Watch Trailer</Link>
        </div>
      </div>
    </>
  );
}

export default Header;
