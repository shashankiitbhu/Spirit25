/** @format */

import React from "react";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const Footer1 = () => {
  return (
    <footer
      id="footer"
      className="bg-white py-12 px-6 md:px-12 lg:px-24 shadow-inner text-center"
    >
      {/* Main Container */}
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left Section */}
        <div className="space-y-4 md:w-2/3 lg:w-1/2 text-center md:text-left">
          <p className="text-sky-500 font-bold text-lg">
            
          </p>
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">
            SPIRIT
          </h1>
          <p className="text-sky-500 font-semibold text-lg">
            The Annual Techno-Pharma Conference
          </p>
          <div className="mt-6 space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <h1 className="text-sky-500 font-medium">Mobile:</h1>
              <p className="text-gray-700 font-bold text-lg">+91 9370507730</p>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <h1 className="text-sky-500 font-medium">Email us:</h1>
              <p className="text-gray-700 font-bold text-lg">
                <a
                  href="mailto:spirit@iitbhu.ac.in"
                  className="hover:underline"
                >
                  spirit@iitbhu.ac.in
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-4 text-center md:text-right">
          <button className="px-6 py-3 text-sky-500 font-medium border border-sky-500 rounded-full hover:bg-sky-500 hover:text-white transition duration-300">
            Contact Us
          </button>
          <div className="flex justify-center md:justify-end gap-6">
            <a
              href="https://www.facebook.com/IITBHUSPIRIT/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-theme hover:text-sky-600 transition duration-300"
            >
              <FaFacebookSquare size={30} />
            </a>
            <a
              href="https://www.instagram.com/spirit.iit.bhu?igsh=bWZnYXpmOXh4MGVx"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-theme hover:text-sky-600 transition duration-300"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://twitter.com/Spirit_IIT"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-theme hover:text-sky-600 transition duration-300"
            >
              <RiTwitterXFill size={30} />
            </a>
            <a
              href="https://www.linkedin.com/company/spiritiitbhu/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-theme hover:text-sky-600 transition duration-300"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
