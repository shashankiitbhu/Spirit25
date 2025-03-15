import React from "react";
import { FaUserFriends } from "react-icons/fa";

const VirtualConference = () => {
    return (
        <div className="bg-white shadow-xl rounded-2xl p-6 max-w-3xl mx-auto border border-gray-200 mt-10">
            <h2 className="text-2xl font-bold text-center text-sky-500 mb-6">
                Want to join the Virtual Conference?
            </h2>
            <div className="flex flex-col items-center space-y-6">
                <div className="flex items-center justify-center w-16 h-16 bg-sky-100 rounded-full">
                    <FaUserFriends className="w-10 h-10 text-sky-500" />
                </div>
                <p className="text-gray-700 text-center text-sm leading-relaxed">
                    Live access to all keynote sessions from industry leaders and academic experts<br />
                    Digital Participation Certificate from IIT BHU<br />
                    Exposure to the latest research innovations and advancements in pharmaceutical sciences<br />
                    Networking opportunities with professionals, researchers, and fellow participants from across the globe

                    Don’t miss out on this opportunity to be part of India’s premier pharmaceutical conference, now accessible online!
                </p>
                <button
                    onClick={() =>
                        window.open("https://docs.google.com/forms/d/e/1FAIpQLSfGgN-WB46ypvQ--5s6cdGBFctvprXLewQ6PFJrFVBMVm-87A/viewform", "_blank")
                    }
                    className="relative inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-sky-500 border-2 border-sky-500 rounded-full group hover:text-white transition-all duration-300"
                >
                    <span className="absolute inset-0 bg-sky-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                    <span className="relative z-10">Virtual Conference</span>
                </button>
                <span className="text-red-700 text-center">Limited seats: Please register at earliest convenience</span>
            </div>
        </div>
    );
};

export default VirtualConference;
