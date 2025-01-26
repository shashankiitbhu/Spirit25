import React from "react";
import Footer1 from "./Footer";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const CARegistrationPage = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

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
        <div className="relative min-h-screen bg-gradient-to-r from-blue-500 to-teal-400 overflow-hidden text-white">
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
                            value: "#ffffff",
                        },
                        shape: {
                            type: "circle",
                        },
                        opacity: {
                            value: 0.5,
                            random: true,
                        },
                        size: {
                            value: 4,
                            random: true,
                        },
                        lineLinked: {
                            enable: true,
                            distance: 150,
                            color: "#ffffff",
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
                                default: "out",
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
            <div className="relative z-50 text-center mt-12 mb-12">
                <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
                    Join as a Campus Ambassador
                </h1>
                <p className="text-lg mt-4 max-w-lg mx-auto">
                    Become the face of our organization at your campus and help build an
                    amazing community while enjoying great rewards!
                </p>
                <br />
                <button className="group relative px-10 py-4 text-xl font-semibold text-sky-600 bg-white rounded-full transition-all duration-300 hover:bg-sky-600 hover:text-white">
                    Register Now
                </button>
            </div>

            {/* Incentives Section */}
            <section className="py-16 bg-white text-sky-600">
                <h2 className="text-4xl font-semibold text-center mb-8">Perks & Incentives</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-12">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-sky-50 shadow-2xl rounded-lg p-8 text-center transition-all transform hover:scale-105 duration-300"
                        >
                            <h3 className="text-2xl font-bold text-sky-600 mb-3">{benefit.title}</h3>
                            <p className="text-gray-700">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 bg-gray-50">
                <h2 className="text-4xl font-semibold text-sky-600 mb-8 text-center">
                    Testimonials
                </h2>
                <div className="space-y-8 max-w-4xl mx-auto">
                    <div className="bg-white shadow-2xl rounded-lg p-8">
                        <p className="text-gray-700 italic">
                            "Being a Campus Ambassador was a life-changing experience! I
                            gained leadership skills and made lifelong connections."
                        </p>
                        <h4 className="text-right mt-4 font-bold text-sky-600">
                            — John Doe, IIT BHU
                        </h4>
                    </div>
                    <div className="bg-white shadow-2xl rounded-lg p-8">
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

            {/* Footer Section */}
            <Footer1 />
        </div>
    );
};

export default CARegistrationPage;
