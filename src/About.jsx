import { Link, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <Link to="/about">
      <div className="w-screen h-[120vh] bg-[#1F1E24] px-[15%]">
        <div className="flex items-center text-center gap-5 my-5">
          <i
            onClick={() => navigate(-1)}
            className="text-zinc-400 cursor-pointer hover:text-[#FF671F] ri-arrow-left-line pt-1 text-lg"
          ></i>
          <h1 className="text-zinc-400 text-xl ">About</h1>
        </div>
        <div className="mt-5 px-4 ">
          <h1 className="font-bold text-zinc-400 text-[2vw] ">
            Welcome to Cineflix
          </h1>
          <p className="text-zinc-400 mt-3 ">
            Cineflix is your ultimate destination for all things movies and TV
            shows. Whether you're a film buff, a casual viewer, or just looking
            for some entertainment, Ciniflix has you covered. Dive into a world
            of trailers, posters, trending pages, IMDb ratings, actor profiles,
            and more, all in one convenient platform.
          </p>
          <div className="mt-5  ">
            <h1 className="font-bold text-zinc-400 text-[2vw] ">
            Our Technology Stack
            </h1>
            <h2 className="text-lg text-zinc-400">Ciniflix is built using cutting-edge technologies to provide you with a seamless and enjoyable experience:</h2>
            <ul className="ml-6">
              <li className="text-lg text-zinc-400 list-disc mt-3">
              React.js: We utilize React.js for our front-end development, ensuring a fast, responsive, and dynamic user interface.
              </li>
              <li className="text-lg text-zinc-400 list-disc mt-3">
              Tailwind CSS: Our sleek and modern UI is crafted with Tailwind CSS, offering a beautiful and intuitive design across all devices.
              </li>
              <li className="text-lg text-zinc-400 list-disc mt-3">
              Google Firebase Authentication: Sign up and log in securely with Google Firebase Authentication. Your personal information is safe with us.
              </li>
             
            </ul>
          </div>
          <div className="mt-5  ">
            <h1 className="font-bold text-zinc-400 text-[2vw] ">
              What We Offer
            </h1>
            <ul className="ml-6">
              <li className="text-lg text-zinc-400 list-disc mt-3">
                Movie Trailers and Posters: Stay up-to-date with the latest
                trailers and posters for upcoming movies. Get a sneak peek
                before they hit the theaters!
              </li>
              <li className="text-lg text-zinc-400 list-disc mt-3">
                TV Shows: Catch up on your favorite TV shows or discover new
                ones. From dramas to comedies, we have something for everyone.
              </li>
              <li className="text-lg text-zinc-400 list-disc mt-3">
                Actor Profiles: Learn more about your favorite actors and
                actresses. Explore their filmography and discover their most
                iconic roles.
              </li>
              <li className="text-lg text-zinc-400 list-disc mt-3">
                Trending Pages: See what's trending in the world of
                entertainment. Stay in the loop with what's hot and popular
                among viewers.
              </li>
              <li className="text-lg text-zinc-400 list-disc mt-3">
                IMDb Ratings: Get access to IMDb ratings for movies and TV
                shows. Make informed decisions about what to watch next.
              </li>
              <li className="text-lg text-zinc-400 list-disc mt-3">
                Wikipedia Integration: Dive deeper into movie and actor details
                with seamless integration with Wikipedia. Learn about the
                background, production, and trivia behind your favorite films.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default About;
