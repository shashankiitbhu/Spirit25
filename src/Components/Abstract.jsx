/* eslint-disable react/no-unescaped-entities */
/** @format */
import { GiChemicalDrop } from "react-icons/gi"; // Pharmacy-related icon
import { HiOutlineDocumentText } from "react-icons/hi";

const Abstract = () => {
  return (
    <div className="flex items-center justify-center bg-gray-50 px-4 py-10">
      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-8 py-8 px-6 shadow-lg rounded-lg bg-white">
        {/* Icon Section */}
        <div className="flex-shrink-0 relative">
          <div className="absolute inset-0 w-40 h-40 rounded-full bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 blur-xl opacity-50 -z-10"></div>
          <GiChemicalDrop className="text-blue-500 text-7xl" />
        </div>

        {/* Content Section */}
        <div className="flex-grow text-center lg:text-left">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Submit Your Abstract:
          </h3>
          <p className="text-gray-600 text-base mb-6 leading-relaxed">
            We invite abstracts for poster presentations in the pharmaceutical
            and biotechnology domains. Showcase your work to a global audience!
          </p>

          <div className="space-y-4">
            {/* Interactive Button */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe0pqvjp54J4QdtnqMqnuDJiJW7KBfkS6Kq6o9x3RCVJl2B-g/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center px-6 py-3 text-lg md:text-base overflow-hidden rounded-full border-2 border-blue-400 text-blue-400 transition-all duration-300 hover:text-white"
            >
              <HiOutlineDocumentText className="mr-2 text-xl group-hover:text-white transition-colors duration-300" />
              <span className="relative z-10">Submit Now</span>
              <div className="absolute inset-0 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
            </a>

            {/* Deadline */}
            <p className="text-gray-500 text-sm font-medium">
              <span className="text-red-600 font-semibold">DEADLINE:</span> 15
              March '24
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abstract;
