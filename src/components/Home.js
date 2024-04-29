import React from "react";
import img from "./../assets/pic.jpeg";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaArrowRightToBracket } from "react-icons/fa6";
function Home() {
  return (
    <>
      <div
        name="home"
        className="w-full text-center bg-gradient-to-b from-black via-black to-gray-800"
      >
        <div className="max-w-screen-lg mx-auto h-screen flex flex-col items-center justify-center px-4 md:flex-row">
          {/* left side start */}
          <div className="flex flex-col justify-center w-[80%]">
            <p className="text-2xl text-white">Hello Everyone, I'm</p>
            <h3 className="text-4xl sm:text-6xl font-bold text-cyan-600">Shehbaz Ali</h3>
            <h2 className="text-2xl sm:text-5xl text-white font-bold py-4">
              Front End Developer
            </h2>
            <div>
              <a href="/resume.pdf" download={true} rel="noreferrer" target="_blank"
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md
                 bg-gradient-to-r from-cyan-500 to-blue-500 hover:cursor-pointer"
              >
            
                Resume
                <span className="group-hover:rotate-90 duration-500">
                
                  <FaArrowRightToBracket size={15} className="ml-2" />
                </span>
              </a>
              {/* <Link to="portfolio" smooth duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md
                 bg-gradient-to-r from-cyan-500 to-blue-500 hover:cursor-pointer"
              >
            
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                
                  <MdOutlineKeyboardArrowRight size={20} className="ml-1" />
                </span>
              </Link> */}
            </div>
          </div>

          {/* left end */}

          {/* right start */}
          <div className="pb-2">
            <img
              src={img}
              alt="my profile"
              className="rounded-2xl mx-auto w-2/3 md:w-[40%]"
            ></img>
          </div>
          {/* right side end */}
        </div>
      </div>
    </>
  );
}

export default Home;
