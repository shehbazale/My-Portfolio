import React from "react";

function About() {
  return (
    <>
      <div
        name="about"
        className="w-full py-[30px] bg-gradient-to-b from-gray-800 to-black text-white"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline hover:border-b-4 border-cyan-600 duration-300 hover:text-cyan-600 cursor-pointer">
              About
            </p>
          </div>
          <p className="text-xl mt-4">
            Detail-oriented and innovative Front End Developer with nearly 8
            months of hands-on experience in web development. Adept at
            leveraging HTML, CSS, JavaScript, and modern library React.js and
            Next.js framework to create responsive, user-focused web
            applications. Proven expertise in implementing responsive designs
            using Bootstrap and Tailwind CSS. Skilled in building interactive
            user interfaces and single-page applications, as well as integrating
            frontend components with backend APIs. Proficient in version control
            using Git. Demonstrates excellent problem-solving abilities and a
            keen eye for detail, committed to delivering high-quality digital
            solutions
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
