import { Link, useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate()
  return (
    <>
      <div className="bg-white py-5"> 
      <Link className="">
            <i
              onClick={() => navigate(-1)}
              className="text-[black] hover:text-[#FF671F] text-3xl cursor-pointer ml-5 ri-arrow-left-line "
            ></i>
          </Link>

      <Link to="/movie/details/:id/trailer/error">
    
        <div
          className="bg-white"
          style={{
            backgroundImage: `URL('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')`,
            height: "400px",
            width: "100vw",
            marginTop: "10vw",
            backgroundColor: "white",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="text-white absolute top-[6%] flex justify-center items-center left-[50%] -translate-x-[50%] translate-y-[50%]">
          <h1 className="text-[5vw]  font-semibold text-[#444444] ">404 : </h1>
          <h1 className="text-[5vw] font-semibold text-[#444444] ml-2"> ERROR</h1>
        </div>
      </Link>
      </div>
    
    </>
  );
};

export default ErrorPage;
