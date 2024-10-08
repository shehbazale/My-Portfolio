import React from "react";

const Contact = () => {
  return (
    <>
      <div
        name="contact"
        className="w-full bg-gradient-to-b from-black to-gray-800 p-4  text-white"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline hover:border-b-4 border-cyan-600 duration-300 hover:text-cyan-600 cursor-pointer">
              {" "}
              Contact
            </p>
            <p className="py-6"> Submit the form to get in touch with me</p>
          </div>
          {/* form section start */}

          <div className="flex justify-center items-center mb-4">
            <form
              action="https://getform.io/f/zaxdrgza"
              method="POST"
              className="flex flex-col rounded-lg w-full px-6 shadow-sm shadow-slate-300 md:w-1/2"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="mt-4 p-2 bg-transparent 
        border border-gray-600 rounded-md text-white focus:outline-none"
              ></input>
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="p-2 bg-transparent 
        border border-gray-600 rounded-md text-white my-4 focus:outline-none"
              ></input>
              <textarea
                name="message"
                rows="10"
                placeholder="Enter your message"
                className="p-2 bg-transparent 
        border border-gray-600 rounded-md text-white focus:outline-none"
              ></textarea>
              <button
                className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 
        px-6 py-3 my-4 mx-auto flex items-center rounded-md hover:scale-105 duration-300"
              >
                {" "}
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
