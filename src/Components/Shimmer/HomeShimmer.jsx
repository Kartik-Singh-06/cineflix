

export const HomeShimmer = () => {
  return (
    <div className="w-full select-none flex overflow-hidden">
      <div className="w-[30%] pt-6 border-r-2 border-zinc-700">
        <div className="py-5 px-10">
          <h1 className="w-[30%] h-[2.5vw] bg-zinc-700 rounded-xl"></h1>
          <h1 className="w-[80%] mt-10 h-[4vw] bg-zinc-700 rounded-xl"></h1>
          <h1 className="w-[80%] mt-5 h-[4vw] bg-zinc-700 rounded-xl"></h1>
          <h1 className="w-[80%] mt-5 h-[4vw] bg-zinc-700 rounded-xl"></h1>
          <h1 className="w-[80%] mt-5 h-[4vw] bg-zinc-700 rounded-xl"></h1>
          <h1 className="w-[80%]  mt-5 h-[4vw] bg-zinc-700  rounded-xl"></h1>
          <hr className="my-5" />
          <h1 className="w-[70%]  mt-10 h-[4vw] bg-zinc-800  rounded-xl"></h1>
          <h1 className="w-[70%]  mt-10 h-[4vw] bg-zinc-800  rounded-xl"></h1>
        </div>
      </div>
      <div className="w-[70%] ">
        <div className="bg-zinc-700 max-w-screen-sm mx-auto mt-8 rounded-lg h-[3vw]"></div>
        <div className="w-[100%] h-[45vh] bg-zinc-700 mt-6 rounded-md"></div>
        <div className="w-full justify-center flex flex-wrap my-10  gap-5">
          <div className="w-[20%] bg-zinc-700 h-[40vh] flex-shrink-0 rounded-md " ></div>
          <div className="w-[20%] bg-zinc-700 h-[40vh] flex-shrink-0 rounded-md " ></div>
          <div className="w-[20%] bg-zinc-700 h-[40vh] flex-shrink-0 rounded-md " ></div>
          <div className="w-[20%] bg-zinc-700 h-[40vh] flex-shrink-0 rounded-md " ></div>
        </div>
      </div>
      
    </div>
  )
}
