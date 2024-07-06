import React, { useState } from "react";
import speaker from "../assets/speaker.png";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("Eligibility");

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="text-center py-20">
      <div className="container p-6 mt-10 ">
        <div className="flex flex-col items-center w-[1281px] h-[341px]">
          <div className="flex  mb-2">
            <button
              className={`px-4 py-2 border border-black rounded-md ${
                activeTab === "Eligibility" ? "text-blue-500" : ""
              }`}
              onClick={() => setActiveTab("Eligibility")}
            >
              Eligibility
            </button>
            <span className="ml-4 mt-2 text-gray-700 text-center">
              Do I need to have prior Product Management and Project Management
              experience to enroll in the program?
            </span>
          </div>
          <div className="flex  mb-2">
            <button
              className={`px-4 py-2 border border-black rounded-md ${
                activeTab === "How To Use?" ? "text-blue-500" : ""
              }`}
              onClick={() => setActiveTab("How To Use?")}
            >
              How To Use?
            </button>
            <span className="ml-4 mt-2 text-gray-700 text-center">
              No, the program is designed to be inclusive of all levels of
              experience. All topics will be covered from the basics, making it
              suitable for individuals from any field of work.
            </span>
          </div>
          <div className="flex mb-2">
            <button
              className={`px-4 py-2 border border-black rounded-md ${
                activeTab === "Terms & Conditions" ? "text-blue-500" : ""
              }`}
              onClick={() => setActiveTab("Terms & Conditions")}
            >
              Terms & Conditions
            </button>
            <span className="ml-4 mt-2 text-gray-700 text-center">
              What is the minimum system configuration required?
            </span>
          </div>
        </div>
      </div>
      <div className="container bg-[#1A73E8] w-[1360px] h-[210px] rounded-xl shadow-lg flex items-center justify-between p-10 m-10 relative">
        <div className="flex items-center">
          <img className="mr-4" src={speaker} alt="Speaker" />
          <div className="text-left">
            <p className="text-white font-bold text-lg">
              Want to delve deeper into the program?
            </p>
            <p className="text-white">
              Share your details to receive expert insights from our program
              team!
            </p>
          </div>
        </div>
        <button className="bg-white text-blue-500 px-4 py-2 rounded-md">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default FAQ;
