import React from "react";
// import todoApp from "./../assets/todo.png";
import weatherApp from "./../assets/weatherapp.png";
import stopWatch from "./../assets/stopwatch.png";
import eCommerce from "./../assets/e-commerce.png";
import ageCalculator from "./../assets/ageCalculator.png";
import salt from "./../assets/salt.jpeg";
import social from "./../assets/49-social.jpeg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: social,
      demoLink: "https://49socialpound.netlify.app/",
      codeLink: "https://github.com/shehbazale/49socialpounds",
    },

    {
      id: 2,
      src: eCommerce,
      demoLink: "https://shehbazale.github.io/shopping-Cart/",
      codeLink: "https://github.com/shehbazale/shopping-Cart",
    },
    {
      id: 3,
      src: salt,
      demoLink: "https://shehbazale.github.io/salt-n-pepper/",
      codeLink: "https://github.com/shehbazale/salt-n-pepper",
    },

    {
      id: 4,
      src: weatherApp,
      demoLink: "https://shehbazale.github.io/Weather-App/",
      codeLink: "https://github.com/shehbazale/Weather-App",
    },
    {
      id: 5,
      src: stopWatch,
      demoLink: "https://shehbazale.github.io/Stop-Watch/",
      codeLink: "https://github.com/shehbazale/Stop-Watch",
    },

    {
      id: 6,
      src: ageCalculator,
      demoLink: "https://shehbazale.github.io/Age-Calculator/",
      codeLink: "https://github.com/shehbazale/Age-Calculator",
    },
  ];
  return (
    <>
      <div
        name="portfolio"
        className="bg-gradient-to-b from-black to bg-gray-800
    w-full text-white"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline hover:border-b-4 border-cyan-600 duration-300 hover:text-cyan-600 cursor-pointer">
              Portfolio
            </p>
            <p className="py-6">Check out some of my work right here </p>
          </div>
          {/* card section start */}
          <div
            className={`grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0
           overflow-x-auto sm:overflow-x-visible`}
          >
            {portfolios.map(({ id, src, demoLink, codeLink }) => {
              return (
                <div
                  key={id}
                  className="shadow-md shadow-gray-600 rounded-lg duration-500 hover:scale-105 hover:rotate-1"
                >
                  <img
                    src={src}
                    alt="img"
                    className="w-[100%] h-48 rounded-md"
                  ></img>
                  <div className="flex items-center justify-center">
                    <a
                      href={demoLink}
                      className="w-1/2 px-6 py-4 m-4 hover:scale-105 duration-500 hover:text-cyan-600"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Demo
                    </a>
                    <a
                      href={codeLink}
                      className="w-1/2 px-6 py-4 m-4 hover:scale-105 duration-500 hover:text-cyan-600"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Code
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          {/* card section end */}
        </div>
      </div>
    </>
  );
};
export default Portfolio;
