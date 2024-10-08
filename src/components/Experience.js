import React from "react";
import html from "./../assets/experience/html.png";
import css from "./../assets/experience/css.png";
import bootstrap from "./../assets/experience/bootstrap.png";
import tailwind from "./../assets/experience/tailwind.png";
import javascript from "./../assets/experience/javascript.png";
import github from "./../assets/experience/github.png";
import react from "./../assets/experience/react.png";
import mysql from "./../assets/experience/mysql.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: bootstrap,
      title: "BootStrap",
      style: "shadow-indigo-500",
    },
    {
      id: 4,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-500",
    },
    {
      id: 5,
      src: javascript,
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 6,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 7,
      src: react,
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: 8,
      src: mysql,
      title: "Mysql",
      style: "shadow-slate-500",
    },
  ];
  return (
    <>
      <div
        name="experience"
        className="bg-gradient-to-b from-gray-800 to-black w-full pt-[50px]"
      >
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white">
          <div>
            <p className="text-4xl font-bold inline hover:border-b-4 border-cyan-600 duration-300 hover:text-cyan-600 cursor-pointer">
              Experience
            </p>
            <p className="py-6">
              These are the technologies I have worked with
            </p>
          </div>
          {/* Image section */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {techs.map(({ id, src, title, style }) => {
              return (
                <div
                  key={id}
                  className={`shadow-md rounded-lg duration-500 py-2 hover:scale-105 hover:rotate-1 ${style}`}
                >
                  <img src={src} alt="html" className="w-20 mx-auto"></img>
                  <p className="mt-4">{title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
