import React from "react";

const CARegistrationPage = () => {
    return (
        <div className="bg-white min-h-screen p-8">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-sky-600">
                    Join as a Campus Ambassador
                </h1>
                <p className="text-gray-700 mt-4 text-lg">
                    Become the face of our organization at your campus and help build an
                    amazing community while enjoying great rewards!
                </p>
                <button className="group relative px-8 py-3 text-lg md:text-xl overflow-hidden rounded-full border-2 border-sky-400 text-sky-400 transition-all duration-300 hover:text-white">
                    <span className="relative z-10">Register AS CA</span>
                    <div className="absolute inset-0 bg-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
                </button>
            </div>


            {/* Incentives Section */}
            <section className="mb-16">
                <h2 className="text-3xl font-semibold text-sky-600 mb-6 text-center">
                    Perks & Incentives
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-sky-50 shadow-lg rounded-lg p-6 text-center">
                        <h3 className="text-xl font-bold text-sky-600 mb-2">
                            Exclusive Merchandise
                        </h3>
                        <p className="text-gray-700">
                            Get exclusive branded T-shirts, hoodies, and goodies for your
                            efforts.
                        </p>
                    </div>
                    <div className="bg-sky-50 shadow-lg rounded-lg p-6 text-center">
                        <h3 className="text-xl font-bold text-sky-600 mb-2">Certificates</h3>
                        <p className="text-gray-700">
                            Earn a certificate for your contribution to the community.
                        </p>
                    </div>
                    <div className="bg-sky-50 shadow-lg rounded-lg p-6 text-center">
                        <h3 className="text-xl font-bold text-sky-600 mb-2">
                            Networking Opportunities
                        </h3>
                        <p className="text-gray-700">
                            Interact with like-minded peers and industry leaders.
                        </p>
                    </div>
                    <div className="bg-sky-50 shadow-lg rounded-lg p-6 text-center">
                        <h3 className="text-xl font-bold text-sky-600 mb-2">
                            Skill Development
                        </h3>
                        <p className="text-gray-700">
                            Develop leadership, communication, and organizational skills.
                        </p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section>
                <h2 className="text-3xl font-semibold text-sky-600 mb-6 text-center">
                    Testimonials
                </h2>
                <div className="space-y-8">
                    <div className="bg-gray-50 shadow-lg rounded-lg p-6">
                        <p className="text-gray-700 italic">
                            "Being a Campus Ambassador was a life-changing experience! I
                            gained leadership skills and made lifelong connections."
                        </p>
                        <h4 className="text-right mt-4 font-bold text-sky-600">
                            — John Doe, IIT BHU
                        </h4>
                    </div>
                    <div className="bg-gray-50 shadow-lg rounded-lg p-6">
                        <p className="text-gray-700 italic">
                            "The incentives and opportunities I received were incredible. I
                            grew my network and learned so much."
                        </p>
                        <h4 className="text-right mt-4 font-bold text-sky-600">
                            — Jane Smith, NIT Trichy
                        </h4>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CARegistrationPage;
