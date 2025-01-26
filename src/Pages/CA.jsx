import React from "react";
import { useNavigate } from "react-router-dom";

const CA = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-3xl font-bold text-center text-sky-600 mb-8">
                Want to join the team? Become a Campus Ambassador
            </h2>
            <div className="flex flex-col space-y-4 items-center justify-center ">
                <div className ="flex flex-row  items-center space-x-4">
                <img
                    src="CAImage.jpg"
                    alt="Campus Ambassador"
                    className="rounded-full shadow-lg "
                ></img>
                <div className="flex items-start space-x-4">
                    
                    {/* Text */}
                    <p className="text-gray-700 text-lg text-center">
                        Do you dream of becoming a leader in your campus community while
                        gaining unmatched exposure to the world of technology and innovation?
                        <br />
                        Step into the role of a Campus Ambassador and transform your passion
                        into impact! This is your chance to
                        <br />
                        <b>
                            represent a cutting-edge organization, unlock exclusive rewards, and
                            grow a powerful network of like-minded visionaries.
                        </b>
                        <br />
                        Let your journey toward leadership and personal growth begin today!
                    </p>
                    </div>
                </div>
                <button
                    onClick={() => navigate("/ca-registration")}
                    className="group relative px-8 py-3 text-lg md:text-xl overflow-hidden rounded-full border-2 border-sky-600 text-sky-600 transition-all duration-300 hover:text-white"
                >
                    <span className="relative z-10">Register as CA</span>
                    <div className="absolute inset-0 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
                </button>
            </div>
        </div>
    );
};

export default CA;
