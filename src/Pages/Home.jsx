import { Syringe } from 'lucide-react';
import React from 'react';
import { FaMicroscope, FaDna, FaPills, FaPrescriptionBottle } from 'react-icons/fa'; // Icons from react-icons
import { GiChemicalDrop, GiMedicines, GiPillDrop, GiMedicalPackAlt } from 'react-icons/gi';
import { GiSyringe, GiBrain, GiVial } from 'react-icons/gi';


const Home = () => {
  return (
    <div className="min-h-screen w-full pt-20 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-white">
      {/* Main Content */}
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        {/* Left Section */}
        <div className="w-full lg:w-3/5 space-y-8 py-16 lg:py-24 relative z-10">
          {/* Title Section */}
          <div className="space-y-4 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text ">
              International Conference on
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight relative z-10">
              <span className="inline-block animate-[textWave_1.5s_ease-in-out_infinite]">Pharmaceutical</span>
              <br />
              <span className="bg-gradient-to-r from-purple-500 to-red-500 text-transparent bg-clip-text">
                Innovations & Spirit
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              The Annual Techno-Pharma Conference
            </h2>
          </div>

          {/* Date Section */}
          <div className="text-xl md:text-2xl text-gray-600 opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards]">
            <span className="inline-block animate-[bounceIn_2s_ease-out]">
              March 21-22, 2025 | IIT BHU Varanasi
            </span>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards]">
            <a
              href="https://drive.google.com/file/d/1pYQbkwUnh6I-bSo8-yMyvb_eaDVUHijw/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="group relative px-8 py-3 text-lg md:text-xl overflow-hidden rounded-full border-2 border-blue-600 text-blue-600 transition-all duration-300 hover:text-white">
                <span className="relative z-10">View Schedule</span>
                <div className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
              </button>
            </a>
            <button className="group relative px-8 py-3 text-lg md:text-xl overflow-hidden rounded-full border-2 border-blue-400 text-blue-400 transition-all duration-300 hover:text-white">
              <span className="relative z-10">Register Now</span>
              <div className="absolute inset-0 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
            </button>
          </div>
        </div>

        <div className="relative w-full mt-12 h-[40vh] opacity-0 animate-[fadeIn_1s_ease-out_1.5s_forwards]">
          {[
            { Icon: FaMicroscope, color: "bg-blue-100", textColor: "text-blue-600", top: "5%", left: "5%" },
            { Icon: GiBrain, color: "bg-blue-200", textColor: "text-blue-500", top: "10%", left: "70%" },
            { Icon: GiMedicines, color: "bg-blue-300", textColor: "text-blue-700", top: "20%", left: "20%" },
            { Icon: FaPills, color: "bg-blue-100", textColor: "text-blue-400", bottom: "15%", left: "45%" },
            { Icon: GiChemicalDrop, color: "bg-blue-200", textColor: "text-blue-600", top: "30%", left: "55%" },
            { Icon: FaPrescriptionBottle, color: "bg-blue-300", textColor: "text-blue-500", top: "50%", left: "10%" },
            { Icon: FaDna, color: "bg-blue-100", textColor: "text-blue-700", bottom: "10%", left: "60%" },
            { Icon: GiSyringe, color: "bg-blue-200", textColor: "text-blue-600", top: "40%", left: "70%" },
            { Icon: FaMicroscope, color: "bg-blue-100", textColor: "text-blue-600", top: "60%", left: "80%" },
            { Icon: GiPillDrop, color: "bg-blue-200", textColor: "text-blue-400", top: "70%", left: "30%" },
          ].map((item, index) => (
            <div
              key={index}
              className={`absolute w-16 h-16 md:w-20 md:h-20 flex items-center justify-center ${item.color} rounded-full shadow-lg animate-[float_6s_ease-in-out_infinite]`}
              style={{
                top: item.top || "auto",
                bottom: item.bottom || "auto",
                left: item.left || "auto",
                right: item.right || "auto",
                opacity: 0.5 - index * 0.05,
              }}
            >
              <item.Icon className={`text-3xl md:text-4xl ${item.textColor}`} />
            </div>
          ))}
        </div>

        {/* Right Section - Spread-Out Pharma Icons */}
        <div className="hidden lg:flex w-full lg:w-2/5 h-[80vh] relative">
          <div className="absolute inset-0">
            {/* Icon 1 */}
            <div className="absolute top-10 left-10 w-12 h-12 bg-blue-100 rounded-full flex justify-center items-center shadow-lg animate-[float_6s_ease-in-out_infinite]">
              <FaMicroscope className="text-blue-600 text-2xl" />
            </div>

            {/* Icon 2 */}
            <div className="absolute top-1/4 right-8 w-16 h-16 bg-blue-200 rounded-full flex justify-center items-center shadow-lg animate-[float_5s_ease-in-out_infinite]">
              <GiBrain className="text-blue-500 text-3xl" />
            </div>

            {/* Icon 3 */}
            <div className="absolute top-1/2 left-10 w-14 h-14 bg-blue-300 rounded-full flex justify-center items-center shadow-lg animate-[float_4s_ease-in-out_infinite]">
              <GiMedicines className="text-blue-700 text-2xl" />
            </div>

            {/* Icon 4 */}
            <div className="absolute bottom-10 right-14 w-10 h-10 bg-blue-100 rounded-full flex justify-center items-center shadow-lg animate-[float_7s_ease-in-out_infinite]">
              <FaPills className="text-blue-400 text-xl" />
            </div>

            <div className="absolute bottom-10 right-14 w-10 h-10 bg-blue-100 rounded-full flex justify-center items-center shadow-lg animate-[float_7s_ease-in-out_infinite]">
              <FaPills className="text-blue-400 text-xl" />
            </div>

            {/* Icon 5 */}
            <div className="absolute top-3/4 left-20 w-14 h-14 bg-blue-200 rounded-full flex justify-center items-center shadow-lg animate-[float_6.5s_ease-in-out_infinite]">
              <GiChemicalDrop className="text-blue-600 text-2xl" />
            </div>

            {/* Icon 6 */}
            <div className="absolute bottom-1/4 right-24 w-12 h-12 bg-blue-300 rounded-full flex justify-center items-center shadow-lg animate-[float_4.5s_ease-in-out_infinite]">
              <FaMicroscope className="text-blue-500 text-2xl" />
            </div>

            {/* Icon 7 */}
            <div className="absolute top-16 right-1/4 w-10 h-10 bg-blue-100 rounded-full flex justify-center items-center shadow-lg animate-[float_5.5s_ease-in-out_infinite]">
              <FaDna className="text-blue-400 text-xl" />
            </div>

            {/* Additional Icons */}
            <div className="absolute top-20 right-1/3 w-12 h-12 bg-blue-200 rounded-full flex justify-center items-center shadow-lg animate-[float_6.2s_ease-in-out_infinite]">
              <FaPrescriptionBottle className="text-blue-500 text-2xl" />
            </div>

            <div className="absolute bottom-1/3 left-1/4 w-14 h-14 bg-blue-300 rounded-full flex justify-center items-center shadow-lg animate-[float_5.8s_ease-in-out_infinite]">
              <GiPillDrop className="text-blue-700 text-2xl" />
            </div>

            <div className="absolute top-1/4 left-1/3 w-16 h-16 bg-blue-100 rounded-full flex justify-center items-center shadow-lg animate-[float_6.3s_ease-in-out_infinite]">
              <Syringe className="text-blue-600 text-3xl" />
            </div>

            <div className="absolute top-1/2 left-2/3 w-16 h-16 bg-blue-100 rounded-full flex justify-center items-center shadow-lg animate-[float_6.3s_ease-in-out_infinite]">
              <GiSyringe className="text-blue-600 text-3xl" />
            </div>


            <div className="absolute bottom-16 right-1/5 w-12 h-12 bg-blue-200 rounded-full flex justify-center items-center shadow-lg animate-[float_5.4s_ease-in-out_infinite]">
              <FaPrescriptionBottle className="text-blue-400 text-xl" />
            </div>
          </div>
        </div>
        {/* Icons for mobile view */}
      <div className="absolute inset-0 lg:hidden z-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-12 h-12 bg-blue-100 rounded-full flex justify-center items-center animate-[float_6s_ease-in-out_infinite]">
          <FaMicroscope className="text-blue-600 text-2xl" />
        </div>
        <div className="absolute top-1/4 right-8 w-16 h-16 bg-blue-200 rounded-full flex justify-center items-center animate-[float_5s_ease-in-out_infinite]">
          <GiBrain className="text-blue-500 text-3xl" />
        </div>
        <div className="absolute bottom-20 right-2 w-14 h-14 bg-blue-300 rounded-full flex justify-center items-center animate-[float_4s_ease-in-out_infinite]">
          <FaPills className="text-blue-700 text-2xl" />
        </div>
        <div className="absolute top-1/2 right-16 w-12 h-12 bg-blue-100 rounded-full flex justify-center items-center animate-[float_6.5s_ease-in-out_infinite]">
          <FaPrescriptionBottle className="text-blue-400 text-xl" />
        </div>
        <div className="absolute top-1/2 right-16 w-12 h-12 bg-blue-100 rounded-full flex justify-center items-center animate-[float_6.5s_ease-in-out_infinite]">
          <FaMicroscope className="text-blue-400 text-xl" />
        </div>
        <div className="absolute bottom-2/4 left-20 w-14 h-14 bg-blue-200 rounded-full flex justify-center items-center animate-[float_6s_ease-in-out_infinite]">
          <GiChemicalDrop className="text-blue-600 text-2xl" />
          </div>
        <div className="absolute top-3/4 left-10 w-14 h-14 bg-blue-200 rounded-full flex justify-center items-center animate-[float_6s_ease-in-out_infinite]">
          <Syringe className="text-blue-600 text-2xl" />
          </div>
          <div className="absolute top-1/4 left-10 w-14 h-14 bg-blue-200 rounded-full flex justify-center items-center animate-[float_6s_ease-in-out_infinite]">
          <FaDna className="text-blue-600 text-2xl" />
          </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
