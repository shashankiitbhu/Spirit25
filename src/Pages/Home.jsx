import { Syringe } from 'lucide-react';
import React , { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaMicroscope, FaDna, FaPills, FaPrescriptionBottle } from 'react-icons/fa'; // Icons from react-icons
import { GiChemicalDrop, GiMedicines, GiPillDrop, GiMedicalPackAlt } from 'react-icons/gi';
import { GiSyringe, GiBrain, GiVial } from 'react-icons/gi';
import { useReferralVerification } from "../hooks/useReferralVerification";



const Home = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [referralCode, setReferralCode] = useState("");
  const { isCodeValid, checking, verifyReferralCode } = useReferralVerification();


  const handleClick = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000); // Reverts back after 2 sec
  };

  const handleVerify = () => {
    verifyReferralCode(referralCode);
  };

  return (
    <div className="min-h-screen w-full pt-20 relative ">
      {/* Main Content */}
      <div className="container mx-auto px-8 flex flex-col lg:flex-row items-center">
        {/* Left Section */}
        <div className="w-full lg:w-3/5 space-y-8 py-16 lg:py-24 relative z-10">
          {/* Title Section */}
          <div className="space-y-4 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-sky-500 to-purple-500 text-transparent bg-clip-text ">
            The Annual Techno-Pharma Conference
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight relative z-10">
              <span className="bg-gradient-to-r from-purple-500 to-red-500 text-transparent bg-clip-text">
                SPIRIT 2025
              </span>
            </h1>
            <h2 className="text-xl md:text-xl font-bold bg-gradient-to-r from-sky-500 to-purple-500 text-transparent bg-clip-text">
              Healthcare Synergy: Tradition and Innovation Aligned
            </h2>
          </div>

          {/* Date Section */}
          <div className="text-xl md:text-2xl text-gray-600 opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards]">
            <span className="inline-block animate-[bounceIn_2s_ease-out]">
              March 21-22, 2025 | IIT BHU Varanasi
            </span>
          </div>

          {/* Buttons */}
          {/* <a
            href="https://drive.google.com/file/d/1pYQbkwUnh6I-bSo8-yMyvb_eaDVUHijw/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="group relative px-8 py-3 text-lg md:text-xl overflow-hidden rounded-full border-2 border-sky-600 text-sky-600 transition-all duration-300 hover:text-white">
              <span className="relative z-10">View Schedule</span>
              <div className="absolute inset-0 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
            </button>
          </a> */}
          <div className="flex gap-4 opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards] ">
            <motion.a
              onClick={handleClick}
              target="_blank"
              className="group relative px-8 py-3 text-lg md:text-xl overflow-hidden rounded-full border-2 border-blue-400 text-blue-400 transition-all duration-300 hover:text-white hover:bg-blue-400"
            >
              {showMessage ? (
                <span className="text-red-500 font-bold">Coming Soon</span>
              ) : (
                "View Schedule"
              )}
            </motion.a>
            <button
            onClick={() => setShowDialog(true)}
            className="px-8 py-3 rounded-full border-2 border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white"
          >
            Register Now
          </button>
          </div>
        </div>
        {showDialog && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-sm"
    onClick={() => setShowDialog(false)}
  >
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-2xl w-96 relative"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={() => setShowDialog(false)}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
      >
        ✕
      </button>

      <div className="space-y-6">
        <div className="text-center space-y-2">
          <FaDna className="text-4xl text-blue-500 mx-auto mb-4 animate-bounce" />
          <h2 className="text-2xl font-bold text-gray-800">Referral Verification</h2>
          <p className="text-gray-600">Enter your referral code to continue</p>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <input
              type="text"
              value={referralCode}
              onChange={(e) => setReferralCode(e.target.value)}
              className={`w-full p-3 border-2 ${
                isCodeValid === false ? "border-red-500" : "border-blue-200"
              } rounded-lg focus:outline-none focus:border-blue-500 transition-all`}
              placeholder="Enter referral code"
            />
            {isCodeValid === true && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute right-3 top-3 text-green-500"
              >
                ✓
              </motion.div>
            )}
          </div>

          {isCodeValid === false && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm flex items-center gap-2"
            >
              <GiChemicalDrop className="flex-shrink-0" />
              <span>Invalid referral code. Please try again.</span>
            </motion.div>
          )}

          <button
            onClick={handleVerify}
            disabled={checking || !referralCode}
            className={`w-full py-3 rounded-lg font-semibold transition-all ${
              checking
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            } text-white`}
          >
            {checking ? (
              <div className="flex items-center justify-center gap-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
                Verifying...
              </div>
            ) : (
              "Verify Code"
            )}
          </button>

          <div className="space-y-3">
            <button
              onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSeLJH64UyqRWh59RX9tkMvlTdGHM-kU56PHKWUImnLLydSgtg/viewform", "_blank")}
              disabled={!isCodeValid}
              className={`w-full py-2.5 rounded-lg font-medium transition-all ${
                isCodeValid
                  ? "bg-green-500 hover:bg-green-600 text-white"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              Continue Registration
            </button>

            <button
              onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLScvA8sc-eosVlQm7BNMeidlB03mp5K9M4veIgCBRH2XRnqX-A/viewform?usp=header", "_blank")}
              className="w-full py-2.5 text-gray-600 hover:text-gray-800 underline transition-colors"
            >
              Continue without referral
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  </motion.div>
)}

        {/* Right Section - Spread-Out Pharma Icons */}
        <div className="hidden lg:flex w-full lg:w-2/5 h-[80vh] relative">
          <div className="absolute inset-0">
            {/* Icon 1 */}
            <div className="absolute top-10 left-10 w-12 h-12 bg-sky-100 rounded-full flex justify-center items-center shadow-lg animate-[float_6s_ease-in-out_infinite]">
              <FaMicroscope className="text-sky-600 text-2xl" />
            </div>

            {/* Icon 2 */}
            <div className="absolute top-1/4 right-8 w-16 h-16 bg-sky-200 rounded-full flex justify-center items-center shadow-lg animate-[float_5s_ease-in-out_infinite]">
              <GiBrain className="text-sky-500 text-3xl" />
            </div>

            {/* Icon 3 */}
            <div className="absolute top-1/2 left-10 w-14 h-14 bg-sky-300 rounded-full flex justify-center items-center shadow-lg animate-[float_4s_ease-in-out_infinite]">
              <GiMedicines className="text-sky-700 text-2xl" />
            </div>

            {/* Icon 4 */}
            <div className="absolute bottom-10 right-14 w-10 h-10 bg-sky-100 rounded-full flex justify-center items-center shadow-lg animate-[float_7s_ease-in-out_infinite]">
              <FaPills className="text-sky-400 text-xl" />
            </div>

            <div className="absolute bottom-10 right-14 w-10 h-10 bg-sky-100 rounded-full flex justify-center items-center shadow-lg animate-[float_7s_ease-in-out_infinite]">
              <FaPills className="text-sky-400 text-xl" />
            </div>

            {/* Icon 5 */}
            <div className="absolute top-3/4 left-20 w-14 h-14 bg-sky-200 rounded-full flex justify-center items-center shadow-lg animate-[float_6.5s_ease-in-out_infinite]">
              <GiChemicalDrop className="text-sky-600 text-2xl" />
            </div>

            {/* Icon 6 */}
            <div className="absolute bottom-1/4 right-24 w-12 h-12 bg-sky-300 rounded-full flex justify-center items-center shadow-lg animate-[float_4.5s_ease-in-out_infinite]">
              <FaMicroscope className="text-sky-500 text-2xl" />
            </div>

            {/* Icon 7 */}
            <div className="absolute top-16 right-1/4 w-10 h-10 bg-sky-100 rounded-full flex justify-center items-center shadow-lg animate-[float_5.5s_ease-in-out_infinite]">
              <FaDna className="text-sky-400 text-xl" />
            </div>

            {/* Additional Icons */}
            <div className="absolute top-20 right-1/3 w-12 h-12 bg-sky-200 rounded-full flex justify-center items-center shadow-lg animate-[float_6.2s_ease-in-out_infinite]">
              <FaPrescriptionBottle className="text-sky-500 text-2xl" />
            </div>

            <div className="absolute bottom-1/3 left-1/4 w-14 h-14 bg-sky-300 rounded-full flex justify-center items-center shadow-lg animate-[float_5.8s_ease-in-out_infinite]">
              <GiPillDrop className="text-sky-700 text-2xl" />
            </div>

            <div className="absolute top-1/4 left-1/3 w-16 h-16 bg-sky-100 rounded-full flex justify-center items-center shadow-lg animate-[float_6.3s_ease-in-out_infinite]">
              <Syringe className="text-sky-600 text-3xl" />
            </div>

            <div className="absolute top-1/2 left-2/3 w-16 h-16 bg-sky-100 rounded-full flex justify-center items-center shadow-lg animate-[float_6.3s_ease-in-out_infinite]">
              <GiSyringe className="text-sky-600 text-3xl" />
            </div>


            <div className="absolute bottom-16 right-1/5 w-12 h-12 bg-sky-200 rounded-full flex justify-center items-center shadow-lg animate-[float_5.4s_ease-in-out_infinite]">
              <FaPrescriptionBottle className="text-sky-400 text-xl" />
            </div>
          </div>
        </div>
        {/* Icons for mobile view */}
      <div className="absolute inset-0 lg:hidden z-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-12 h-12 bg-sky-100 rounded-full flex justify-center items-center animate-[float_6s_ease-in-out_infinite]">
          <FaMicroscope className="text-sky-600 text-2xl" />
        </div>
        <div className="absolute top-1/4 right-8 w-16 h-16 bg-sky-200 rounded-full flex justify-center items-center animate-[float_5s_ease-in-out_infinite]">
          <GiBrain className="text-sky-500 text-3xl" />
        </div>
        <div className="absolute bottom-20 right-2 w-14 h-14 bg-sky-300 rounded-full flex justify-center items-center animate-[float_4s_ease-in-out_infinite]">
          <FaPills className="text-sky-700 text-2xl" />
        </div>
        <div className="absolute top-1/2 right-16 w-12 h-12 bg-sky-100 rounded-full flex justify-center items-center animate-[float_6.5s_ease-in-out_infinite]">
          <FaPrescriptionBottle className="text-sky-400 text-xl" />
        </div>
        <div className="absolute top-1/2 right-16 w-12 h-12 bg-sky-100 rounded-full flex justify-center items-center animate-[float_6.5s_ease-in-out_infinite]">
          <FaMicroscope className="text-sky-400 text-xl" />
        </div>
        <div className="absolute bottom-2/4 left-20 w-14 h-14 bg-sky-200 rounded-full flex justify-center items-center animate-[float_6s_ease-in-out_infinite]">
          <GiChemicalDrop className="text-sky-600 text-2xl" />
          </div>
        <div className="absolute top-3/4 left-10 w-14 h-14 bg-sky-200 rounded-full flex justify-center items-center animate-[float_6s_ease-in-out_infinite]">
          <Syringe className="text-sky-600 text-2xl" />
          </div>
          <div className="absolute top-1/4 left-10 w-14 h-14 bg-sky-200 rounded-full flex justify-center items-center animate-[float_6s_ease-in-out_infinite]">
          <FaDna className="text-sky-600 text-2xl" />
          </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
