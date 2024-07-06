import React from "react";
import heroimg from "../assets/heroimg.png";
import logo from "../assets/logo.png";
import money from "../assets/money.png";

const HeroSection = ({ handleReferNow }) => {
  return (
    <div>
      <div className="Topnav bg-[#1A73E826] w-full h-[60px] flex justify-center items-center gap-[12px] px-[16px 648.04px ] py-[16px 648.05px]">
        <p className="text-gray-800 ">
          Navigate your ideal career path with tailored expert advice
        </p>
        <button className="text-blue-600 underline">Contact Expert</button>
      </div>

      <div className=" middlenav w-full h-[79px] top-[60px] px-[9.6px 280px] py-[9.6px 280px] flex items-center justify-center p-5 ">
        <div className="flex gap-5  ">
          <img src={logo} alt="Accredian Logo" className="h-10" />
          <button className="ml-4  bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-400">
            Courses
          </button>
          <div className="flex gap-10 ml-60">
            <button className="text-gray-800 hover:text-blue-500 mx-2">
              Refer & Earn
            </button>
            <button className="text-gray-800 hover:text-blue-500 mx-2">
              Resources
            </button>
            <button className="text-gray-800 hover:text-blue-500 mx-2">
              About Us
            </button>
            <button className="text-blue-600  hover:text-blue-500mx-2">
              Login
            </button>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-400">
              Try for free
            </button>
          </div>
        </div>
      </div>
      <div className="thirdnav flex justify-center items-center p-5">
        <div className="w-[797px] h-[63px] bg-blue-300   flex justify-evenly items-center py-2 rounded-full">
          <button className=" text-gray-800 hover:text-blue-500">Refer</button>
          <button className="text-gray-800 hover:text-blue-500">
            Benefits
          </button>
          <button className="text-gray-800 hover:text-blue-500">FAQs</button>
          <button className="text-gray-800 hover:text-blue-500">Support</button>
        </div>
      </div>

      <div className="hero  ">
        <div className="container mx-auto bg-[#EEF5FF] w-[1300px] h-[629px] rounded-xl shadow-lg flex p-8 m-10 items-center justify-between">
          <div className="flex flex-col items-start md:w-1/2">
            <h1 className=" text-8xl font-bold text-gray-800 ">
              Let's Learn & Earn
            </h1>
            <img src={money} className="absolute bottom-4 right-4"></img>
            <p className="text-4xl text-gray-600 mb-6">Get a chance to win </p>
            <p className="text-4xl text-gray-600 mb-6"></p>

            <button
              onClick={handleReferNow}
              className="bg-blue-500 text-white py-3 px-10 rounded-lg shadow-lg hover:bg-blue-400"
            >
              Refer Now
            </button>
          </div>
          <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center items-center relative">
            <img
              src={heroimg}
              alt="Refer & Earn"
              className=" w-full h-full object-cover"
            />

            <img src={money} className="absolute top-4 left-4 "></img>
            <img src={money} className="absolute bottom-4 right-4"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
