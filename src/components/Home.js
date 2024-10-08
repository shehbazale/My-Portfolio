import React from "react";
import img from "./../assets/pic.jpeg";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
function Home() {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/shehbaz-ali/",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/shehbazale",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:shahmainaqpa@gmail.com",
    },
  ];
  return (
    <>
      <div
        name="home"
        className="w-full text-center bg-gradient-to-b from-black via-black to-gray-800"
      >
        <div className="max-w-screen-lg md:h-screen mx-auto flex flex-col items-center justify-center px-4 sm:flex-row h-[70vh]">
          {/* left side start */}
          <div className="flex flex-col justify-center w-3/5">
            <p className="text-xl text-white">Hello Everyone, I'm</p>
            <h2 className="text-2xl sm:text-4xl font-bold text-cyan-600">
              Shehbaz Ali
            </h2>
            <h2 className="text-xl sm:text-3xl font-bold text-white py-4">
              Front End Developer
            </h2>
            <div className="flex justify-center">
              <a
                href="/Shehbaz's_Resume.pdf"
                download={true}
                rel="noreferrer"
                target="_blank"
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md
                 bg-gradient-to-r from-cyan-500 to-blue-500 hover:cursor-pointer hover:text-cyan-200"
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

            {/* Social Links */}
            <div className="flex flex-row items-center justify-center mt-4">
              {links.map(({ id, href, child }) => {
                return (
                  <div key={id} className="flex items-center justify-center">
                    <a
                      href={href}
                      className="px-2 text-gray-400 hover:scale-105 duration-500 hover:text-cyan-600 w-full sm:block lg:hidden"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {child}
                    </a>
                  </div>
                );
              })}
            </div>
            {/* social links end */}
          </div>

          {/* left end */}

          {/* right start */}
          <div className="pb-2 w-1/2 hidden sm:block">
            <img
              src={img}
              alt="my profile"
              className="rounded-2xl mx-auto w-[40%]"
            ></img>
          </div>
          {/* right side end */}
        </div>
      </div>
    </>
  );
}

export default Home;
