import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserFriends } from "react-icons/fa";

const CA = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-white shadow-xl rounded-2xl p-6 max-w-3xl mx-auto border border-gray-200">
            <h2 className="text-2xl font-bold text-center text-sky-500 mb-6">
                Want to join the team? Become a Campus Ambassador
            </h2>
            <div className="flex flex-col items-center space-y-6">
                <div className="flex items-center justify-center w-16 h-16 bg-sky-100 rounded-full">
                    <FaUserFriends className="w-10 h-10 text-sky-500" />
                </div>
                <p className="text-gray-700 text-center text-sm leading-relaxed">
                    Do you dream of becoming a leader in your campus community while gaining unmatched
                    exposure to the world of technology and innovation? Step into the role of a Campus Ambassador
                    and transform your passion into impact! This is your chance to <b>represent a cutting-edge
                    organization, unlock exclusive rewards, and grow a powerful network of like-minded visionaries.</b>
                    Let your journey toward leadership and personal growth begin today!
                </p>
                <button
                    onClick={() => navigate("/ca-registration")}
                    className="relative inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-sky-500 border-2 border-sky-500 rounded-full group hover:text-white transition-all duration-300"
                >
                    <span className="absolute inset-0 bg-sky-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                    <span className="relative z-10">Register as CA</span>
                </button>
            </div>
        </div>
    );
};

export default CA;
