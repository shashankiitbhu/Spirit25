
import React from "react";
import Footer1 from "./Footer";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


const CARegistrationPage = () => {
    const particlesInit = async (main) => {
        // Initialize tsParticles instance
        await loadFull(main);
    };
    //Also add the image for the backfround for these.
    const benefits = [
        {
            title: "Exclusive Merchandise",
            description:
                "Get exclusive branded T-shirts, hoodies, and goodies for your efforts.",
        },
        {
            title: "Certificates",
            description: "Earn a certificate for your contribution to the community.",
        },
        {
            title: "Networking Opportunities",
            description:
                "Interact with like-minded peers and industry leaders.",
        },
        {
            title: "Skill Development",
            description:
                "Develop leadership, communication, and organizational skills.",
        },
    ];
    return (
        <div className="relative min-h-screen overflow-hidden">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    particles: {
                        number: {
                            value: 70,
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                        },
                        color: {
                            value: "#BFDBFF",
                        },
                        shape: {
                            type: "circle",
                        },
                        opacity: {
                            value: 0.5,
                            random: true,
                        },
                        size: {
                            value: 3,
                            random: true,
                        },
                        lineLinked: {
                            enable: true,
                            distance: 150,
                            color: "#38bdf8",
                            opacity: 0.4,
                            width: 1,
                        },
                        move: {
                            enable: true,
                            speed: 1,
                            direction: "none",
                            random: false,
                            straight: false,
                            outModes: {
                                default: "out"
                            },
                        },
                    },
                    background: {
                        color: "transparent",
                    },
                    fullScreen: {
                        enable: true,
                        zIndex: -1,
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
                                mode: "grab",
                            },
                            onclick: {
                                enable: true,
                                mode: "push",
                            },
                        },
                        modes: {
                            grab: {
                                distance: 200,
                                lineLinked: {
                                    opacity: 0.5,
                                },
                            },
                            push: {
                                quantity: 2,
                            },
                        },
                    },
                }}
                className="absolute inset-0 z-0"
            />
            {/* Header Section */}
            <div className="text-center mb-12 items-center justify-center">
                <h1 className="text-4xl font-bold text-sky-600">
                    Join as a Campus Ambassador
                </h1>
                <p className="text-gray-700 mt-4 text-lg">
                    Become the face of our organization at your campus and help build an
                    amazing community while enjoying great rewards!
                </p>
                <br />
                {/* Register Button link is yet to be added */}
                <button className="group relative px-8 py-3 text-lg md:text-xl overflow-hidden rounded-full border-2 border-sky-400 text-sky-400 transition-all duration-300 hover:text-white">
                    <span className="relative z-10">Register Now</span>
                    <div className="absolute inset-0 bg-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
                </button>


            </div>

            {/* Incentives Section */}
            <section className="mb-16" >
                <h2 className="text-3xl font-semibold text-sky-600 mb-6 text-center" >
                    Perks & Incentives
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-sky-50 shadow-lg rounded-lg p-6 text-center"
                            style={{ minHeight: "200px" }}
                        >
                            <h3 className="text-xl font-bold text-sky-600 mb-2">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-700">{benefit.description}</p>
                        </div>
                    ))}
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
            <br />
            {/* Footer Section */}
            <Footer1 />

        </div>
    );
};

export default CARegistrationPage;
