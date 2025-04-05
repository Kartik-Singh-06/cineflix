import { Link } from "react-router-dom";

function Cart({data,title}) {
  return (
    <>
      <div className="max-w-screen-2xl justify-center  flex mx-auto gap-10 pb-[5vw] flex-wrap bg-[#1F1E24]">
        {data.map((item,index)=>(
         <Link to={`/${item.media_type || title }/details/${item.id}`} key={index} className="relative">
               <div  className="w-[16vw] flex-shrink-0  shadow-xl rounded-lg h-[20vw] bg-zinc-500">
               <img
                className="object-cover rounded-md object-[center] h-full w-full "
                src={`https://image.tmdb.org/t/p/original/${
                  item.poster_path || item.backdrop_path || item.profile_path
                }`}
              />
            </div>
             <h1 className="text-white w-[80%]  font-semibold text-sm pt-1 pl-1">{(item.name || item.title || item.original_name || item.original_title).slice(0,35)}</h1>

             {item.vote_average > 0 &&<div className="bg-[#ffad1ff6] absolute top-[50%] right-[-12%] text-center w-[4vw] h-[4vw] flex justify-center items-center text-white font-semibold rounded-full">
              {item.vote_average.toFixed() }<i className="ml-[1px] ri-star-s-fill"></i>
             </div>}
         </Link>

        ))}


      </div>
    </>
  );
}

export default Cart;
