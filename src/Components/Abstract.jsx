/** @format */
import { GiChemicalDrop } from "react-icons/gi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Abstract = () => {
 const [showMessage, setShowMessage] = useState(false);
   
     const handleClick = () => {
       setShowMessage(true);
       setTimeout(() => setShowMessage(false), 2000); // Reverts back after 2 sec
     };
 
  return (
    <div className="flex items-center justify-center bg-white px-4 py-10">
      <div className="relative card-gradient mx-auto flex flex-col lg:flex-row items-center gap-8 py-8 px-6 rounded-lg shadow-lg">
        {/* Icon Section */}
        <div className="relative flex-shrink-0">
          <GiChemicalDrop className="text-sky-500 text-8xl icon-animation opacity-80" />
        </div>

        {/* Content Section */}
        <div className="flex-grow text-center lg:text-left">
          <h3 className="text-2xl font-semibold text-sky-800 mb-4">
            Submit Your Abstract:
          </h3>
          <p className="text-sky-600 text-base mb-6 leading-relaxed">
            We invite abstracts for poster presentations in the pharmaceutical
            and biotechnology domains. Showcase your work to a global audience!
          </p>

          <div className="space-y-4">
            {/* Interactive Button */}
             <a
              href="https://forms.gle/HsNCtpZ8fGpR7tVt9"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 text-base font-medium text-sky-500 border border-sky-400 rounded-full hover:bg-sky-500 hover:text-white transition-all"
            >
              <HiOutlineDocumentText className="mr-2 text-xl" />
              Submit Now
            </a> 
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abstract;
