import React from "react";
import Abstract from "../Components/Abstract";
import { FaBrain, FaLightbulb, FaMicroscope, FaQuestionCircle, FaTools } from "react-icons/fa";

// CSS Animations
const styles = `
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.15;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.25;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.icon-animation {
  animation: pulse 3s infinite, float 5s infinite;
}

.card-gradient {
  background: linear-gradient(145deg, #e0f7ff, #b0e1ff);
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.1), -6px -6px 12px rgba(255, 255, 255, 0.5);
}

.card-gradient:hover {
  box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.6);
}

.icon-theme {
  color: #0284c7; /* sky-500 */
}

.icon-scale-hover {
  transform: scale(1);
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
}

.group:hover .icon-scale-hover {
  transform: scale(1.2);
  color: #0369a1; /* darker shade of sky-500 */
}

.text-enhanced {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}
`;

const getIcon = (eventName) => {
  switch (eventName) {
    case "Poster Presentation":
      return <FaMicroscope className="icon-animation icon-scale-hover icon-theme text-[8rem] opacity-80" />;
    case "AI Biohackathon":
      return <FaBrain className="icon-animation icon-scale-hover icon-theme text-[8rem] opacity-80" />;
    case "Synapse Strategy":
      return <FaLightbulb className="icon-animation icon-scale-hover icon-theme text-[8rem] opacity-80" />;
    // case "RxQuest: Quiz":
    //   return <FaQuestionCircle className="icon-animation icon-scale-hover icon-theme text-[8rem] opacity-80" />;
    default:
      return null;
  }
};

const Card = ({ item }) => {
  return (
    <div className="relative card-gradient flex flex-col items-center justify-center w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33%-2rem)] h-[350px] rounded-lg transition-transform transform hover:translate-y-[-10px] group overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center z-0">
        {getIcon(item.eventName)}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
        <div className="text-center text-lg font-semibold text-sky-800 px-4 mb-2 text-enhanced">
          {item.eventName}
        </div>

        <div className="w-full flex flex-col items-center space-y-2">
          {item.buttontext && (
            <a
              href={item.buttonlink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[70%]"
            >
              <button className="w-full px-4 py-2 text-sm font-medium text-sky-500 border border-sky-400 rounded-full hover:bg-sky-500 hover:text-white transition-all">
                {item.buttontext}
              </button>
            </a>
          )}
          {item.targettext && (
            <a
              href={item.targetlink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[70%]"
            >
              <button className="w-full px-4 py-2 text-sm font-medium text-sky-500 border border-sky-400 rounded-full hover:bg-sky-500 hover:text-white transition-all">
                {item.targettext}
              </button>

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
      buttontext: "View Opportunity",
      buttonlink: "https://unstop.com/events/canvas-of-innovation-spirit-25-iit-bhu-1384427",
      targettext: "View Brochure",
      targetlink: "https://drive.google.com/file/d/11-6sYFvJU1yBi6ZMhNuEntCE9f_4BJAA/view?usp=sharing",
    },
    {
      eventName: "Bio-Hackathon",
      buttontext: "View Opportunity",
      buttonlink: "https://unstop.com/hackathons/healthtech-and-ai-hackathon-spirit-25-iit-bhu-1384428",
      targettext: "",
      targetlink: "",
    },
    {
      eventName: "Synapse Strategy",
      buttontext: "View Opportunity",
      buttonlink: "https://unstop.com/competitions/synapse-strategy-spirit-25-indian-institute-of-technology-banaras-hindu-university-varanasi-1384936",
      // buttonlink: "https://forms.gle/peHFswNGD3m6BVcd8",
      targettext: "",
      targetlink: "",
    },
  ];

  return (
    <div id="events" className="py-16">
      <Abstract />
      <style>{styles}</style>

      <div className="container mx-auto px-6 lg:px-12">
        <h1 className="text-center text-4xl font-bold text-sky-600 mb-12">
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
