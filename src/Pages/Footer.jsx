import React from "react";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-white py-12 px-6 md:px-12 lg:px-24 shadow-inner text-center"
    >
      {/* Main Container */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x md:divide-gray-300">
        {/* Left Section */}
        <div className="md:col-span-2 pr-6">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">
            SPIRIT
          </h1>
          <p className="text-sky-500 font-semibold text-lg">
            The Annual Techno-Pharma Conference
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:divide-x sm:divide-gray-300">
            <div className="relative p-4 rounded-lg before:absolute before:inset-0 before:bg-gradient-radial before:from-gray-100 before:to-transparent before:rounded-lg before:z-[-1]">
              <p className="text-gray-700 font-bold">
                <span className="block text-sky-500">Events:</span>
                <a
                  href="mailto:saumya.ranjan.phe22@itbhu.ac.in"
                  className="hover:underline"
                >
                  saumya.ranjan.phe22@itbhu.ac.in
                </a>
              </p>
              <span className="text-gray-500 font-bold">+91 63628 72919</span>


            </div>

            <div className="relative p-4 rounded-lg before:absolute before:inset-0 before:bg-gradient-radial before:from-gray-100 before:to-transparent before:rounded-lg before:z-[-1]">
              <h2 className="text-sky-500 font-bold">Registrations:</h2>
              <p className="text-gray-700 font-bold text-lg">
                <a
                  href="mailto:dhruv.raghav.phe22@itbhu.ac.in"
                  className="hover:underline truncate overflow-hidden text-ellipsis block w-full"
                >
                  dhruv.raghav.phe22@itbhu.ac.in
                </a>
              </p>
              <span className="text-gray-500 font-bold">+91 84496 20050</span>
            </div>
            <div className="relative p-4 rounded-lg before:absolute before:inset-0 before:bg-gradient-radial before:from-gray-100 before:to-transparent before:rounded-lg before:z-[-1]">
              <a
                href="https://forms.gle/FdNtWmujJE9wgviy7"
                target="_blank"
                rel="noopener noreferrer"
              ><h2 className="text-sky-500 font-bold">Accomodations: Form</h2></a>
              <p className="text-gray-700 font-bold text-lg">
                <a
                  href="mailto:solan.kumar.phe22@itbhu.ac.in"
                  className="hover:underline truncate overflow-hidden text-ellipsis block w-full"
                >
                  solan.kumar.phe22@itbhu.ac.in
                </a>
              </p>
              <span className="text-gray-500 font-bold">+91 62002 21897</span>
            </div>
          </div>
          
        


          {/* Social Media Links */}
          <div className="md:flex-col">
            <div className=" mt-6">
              <h1 className="text-sky-500 font-bold">Email us:</h1>
              <p className="text-gray-700 font-bold text-lg">
                <a
                  href="mailto:spirit@iitbhu.ac.in"
                  className="hover:underline"
                >
                  spirit@iitbhu.ac.in
                </a>
              </p>
              <span className="text-gray-500 font-bold">+91 93705 07730</span>

            </div>
            <div className="mt-6 flex justify-center md:justify-center gap-10">
              <a
                href="https://www.facebook.com/IITBHUSPIRIT/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-500 hover:text-sky-600 transition duration-300"
              >
                <FaFacebookSquare size={40} />
              </a>
              <a
                href="https://www.instagram.com/spirit.iit.bhu?igsh=bWZnYXpmOXh4MGVx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-500 hover:text-sky-600 transition duration-300"
              >
                <FaInstagram size={40} />
              </a>
              <a
                href="https://twitter.com/Spirit_IIT"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-500 hover:text-sky-600 transition duration-300"
              >
                <RiTwitterXFill size={40} />
              </a>
              <a
                href="https://www.linkedin.com/company/spiritiitbhu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-500 hover:text-sky-600 transition duration-300"
              >
                <FaLinkedin size={40} />
              </a>
            </div>

          </div>
        </div>

        {/* Right Section - Google Maps */}
        <div className="w-full h-48 md:h-full md:pl-6">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.4530750718776!2d82.9924983!3d25.259113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e317ffd66d46d%3A0x521528ee980cba9b!2sDepartment%20of%20Pharmaceutical%20Engineering%20%26%20Technology%2C%20IIT%20BHU%20VARANASI.!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
