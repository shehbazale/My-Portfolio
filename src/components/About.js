import React from "react";

function About() {
  return (
    <>
      <div name='about' className="w-full py-[30px] bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline hover:border-b-4 border-cyan-600 duration-300 hover:text-cyan-600 cursor-pointer">About</p>
            </div> 
            <p className="text-xl mt-16">I am a Front End Developer having more than 1 year experience and have strong knowledge in HTML, CSS, Javascript, React, Bootstrap,Tailwind, PHP and Mysql. Skilled in creating user friendly websites.</p>
      <br/>
      <p className="text-xl"> I have 1 year experience in building and designing software
              Currently I am working as a MERN Stack Developer at Robx Ai. I love
              to work on web application using technologies like React,
              Javascript, Bootstrap, and Tailwind css.!</p>
         </div>
      </div>
    </>
  );
}

export default About;
