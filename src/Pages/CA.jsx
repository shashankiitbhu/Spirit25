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
                    Step into the spotlight at the <b>Techno-Pharma Conference</b>—a trailblazing event that fuses technology and pharmaceuticals to shape the future of healthcare.
                    As a Campus Ambassador, you’ll represent this transformative initiative, spreading its vision across your campus and beyond.<br />
                    <span className="inline-block mt-2">
                        This is your chance to be at the forefront of innovation, gain exclusive insights into the pharmaceutical revolution, and connect with industry pioneers.
                        Take the lead in empowering your community and be a part of an event that’s redefining the future of pharma.
                        The stage is set—are you ready to lead the change?
                    </span>
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
