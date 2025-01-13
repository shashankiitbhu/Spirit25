import React from "react";
import Abstract from "../Components/Abstract";
import { FaBrain, FaLightbulb, FaMicroscope, FaQuestionCircle, FaTools } from "react-icons/fa";

const getIcon = (eventName) => {
  switch (eventName) {
    case "Poster Presentation":
      return <FaMicroscope className="text-blue-600 opacity-10 group-hover:opacity-20 text-[10rem]" />;
    case "AI Biohackathon":
      return <FaBrain className="text-purple-600 opacity-10 group-hover:opacity-20 text-[10rem]" />;
    case "Pharm Innovate Case Study":
      return <FaLightbulb className="text-yellow-600 opacity-10 group-hover:opacity-20 text-[10rem]" />;
    case "RxQuest: Quiz":
      return <FaQuestionCircle className="text-green-600 opacity-10 group-hover:opacity-20 text-[10rem]" />;
    case "Fabrica: Model Making":
      return <FaTools className="text-red-600 opacity-10 group-hover:opacity-20 text-[10rem]" />;
    default:
      return null;
  }
};

const Card = ({ item }) => {
  return (
    <div className="relative flex flex-col items-center justify-center w-[calc(33%-2rem)] h-[350px] bg-white/50 backdrop-blur-lg rounded-lg shadow-lg transition-transform transform hover:translate-y-[-10px] hover:shadow-2xl group overflow-hidden">
      {/* Icon Background */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        {getIcon(item.eventName)}
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
        {/* Top Style Indicator */}
        <div className="absolute top-0 left-0 w-full h-[4px] bg-blue-200 rounded-t-lg"></div>

        {/* Event Name */}
        <div className="text-center text-lg font-semibold text-gray-800 px-4 mb-2">
          {item.eventName}
        </div>

        {/* Button Section */}
        <div className="w-full flex flex-col items-center space-y-2">
          {item.buttontext && (
            <a
              href={item.buttonlink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[70%]"
            >
              <button className="w-full px-4 py-2 text-sm font-medium text-blue-400 border border-blue-300 rounded-full hover:bg-blue-300 hover:text-white transition-all">
                {item.buttontext}
              </button>
            </a>
          )}
          {item.targettext && (
            <a
              href={item.targetlink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-blue-300 hover:underline"
            >
              {item.targettext}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};


const Events = () => {
  const eventsDB = [
    {
      eventName: "Poster Presentation",
      buttontext: "Submit Abstract",
      buttonlink:
        "https://docs.google.com/forms/d/e/1FAIpQLSe0pqvjp54J4QdtnqMqnuDJiJW7KBfkS6Kq6o9x3RCVJl2B-g/viewform",
      targettext: "View Guidelines",
      targetlink: "",
    },
    {
      eventName: "AI Biohackathon",
      buttontext: "Coming Soon",
      buttonlink: "",
      targettext: "",
      targetlink: "",
    },
    {
      eventName: "Pharm Innovate Case Study",
      buttontext: "Register",
      buttonlink: "https://forms.gle/peHFswNGD3m6BVcd8",
      targettext: "",
      targetlink: "",
    },
    {
      eventName: "RxQuest: Quiz",
      buttontext: "Prelims - 20 Mar",
      buttonlink: "",
      targettext: "Pharmacy India App",
      targetlink:
        "https://play.google.com/store/apps/details?id=co.april2019.pindia&hl=en_US&pli=1",
    },
    {
      eventName: "Fabrica: Model Making",
      buttontext: "Register",
      buttonlink:
        "https://docs.google.com/forms/d/e/1FAIpQLScIxhwD3TAbjcgy6QvDfedgKuA0QwvVdy71nKYPoWOWM7s_zA/viewform?usp=sf_link",
      targettext: "",
      targetlink: "",
    },
  ];

  return (
    <div id="events" className="py-16 bg-gradient-to-br from-gray-50 to-white">
      {/* Abstract Section */}
      <div className="container mx-auto mb-8">
        <Abstract />
      </div>

      {/* Events Section */}
      <div className="container mx-auto px-6 lg:px-12">
        <h1 className="text-center text-4xl font-bold text-gray-800 mb-12">
          Events
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
          {eventsDB.map((item, index) => (
            <Card item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
