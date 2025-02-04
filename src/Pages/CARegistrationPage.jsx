import React from "react";
import Footer1 from "./Footer";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { StarIcon, AcademicCapIcon, UserGroupIcon, ChartBarIcon } from "@heroicons/react/24/solid";

const CARegistrationPage = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const testimonials = [
        {
            text: '"Being a Campus Ambassador was a life-changing experience! I gained leadership skills and made lifelong connections."',
            name: 'Ayush Shrivastava',
            college: 'IIT BHU'
        },
        {
            text: '"This program helped me network with industry experts and enhance my organizational skills significantly."',
            name: 'Priya Sharma',
            college: 'NIPER Hyderabad'
        },
    ];

    const benefits = [
        {
            icon: StarIcon,
            title: "Exclusive Merchandise",
            description: "Get exclusive branded T-shirts, hoodies, and goodies for your efforts.",
        },
        {
            icon: AcademicCapIcon,
            title: "Certificates",
            description: "Earn a certificate for your contribution to the community.",
        },
        {
            icon: UserGroupIcon,
            title: "Networking Opportunities",
            description: "Interact with like-minded peers and industry leaders.",
        },
        {
            icon: ChartBarIcon,
            title: "Skill Development",
            description: "Develop leadership, communication, and organizational skills.",
        },
    ];

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-sky-400 via-sky-600 to-teal-600 overflow-hidden text-white">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    particles: {
                        number: { value: 80 },
                        color: { value: "#ffffff" },
                        shape: { type: "circle" },
                        opacity: { value: 0.6 },
                        size: { value: 3 },
                        links: {
                            enable: true,
                            distance: 150,
                            color: "#ffffff",
                            opacity: 0.4,
                            width: 1
                        },
                        move: {
                            enable: true,
                            speed: 1.5,
                            direction: "none",
                            random: false,
                            straight: false,
                            outModes: "out"
                        },
                    },
                    interactivity: {
                        events: {
                            onHover: { enable: true, mode: "repulse" },
                            onClick: { enable: true, mode: "push" }
                        }
                    }
                }}
                className="absolute inset-0 z-0"
            />

            <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
                            Become a Campus Ambassador
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 font-light opacity-90 leading-relaxed">
                            Lead the innovation movement in pharma-tech and build your professional legacy
                        </p>
                        <button 
                            onClick={() => window.open("https://forms.gle/bc7XmF5iYzFHhRee9", "_blank")}
                            className="bg-white text-sky-400 px-8 py-4 rounded-full text-lg font-semibold 
                            transform transition-all duration-300 hover:scale-105 hover:shadow-2xl
                            hover:bg-blue-50 hover:text-blue-700"
                        >
                            Apply Now ➔
                        </button>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <div className="relative w-80 h-80 md:w-96 md:h-96 bg-white/10 backdrop-blur-lg
                        flex items-center justify-center overflow-hidden shadow-2xl animate-float">
                            <img
                                src="./images/logo_2.png"
                                alt="Organization Logo"
                                className="w-64 h-64 object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <section className="relative z-10 py-16 bg-white/10 backdrop-blur-lg">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Why Join Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map(({ icon: Icon, title, description }, index) => (
                            <div 
                                key={index}
                                className="p-8 bg-white/5 rounded-2xl border border-white/10 transform transition-all 
                                duration-300 hover:bg-white/20 hover:scale-105 group"
                            >
                                <div className="w-16 h-16 mb-6 bg-white/10 rounded-2xl flex items-center justify-center">
                                    <Icon className="w-8 h-8 text-white group-hover:text-blue-400 transition-colors" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                                <p className="text-gray-200 leading-relaxed">{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="relative z-10 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Hear From Our Ambassadors</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {testimonials.map(({ text, name, college }, index) => (
                            <div 
                                key={index}
                                className="p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-lg
                                animate-fade-in"
                            >
                                <p className="text-xl italic mb-6">{text}</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-400 rounded-full"></div>
                                    <div>
                                        <h4 className="font-bold">{name}</h4>
                                        <p className="text-sm opacity-75">{college}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="relative z-10 py-16">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-500 to-sky-500 p-1 rounded-2xl">
                        <div className="bg-gray-900 rounded-xl p-8 shadow-2xl">
                            <h2 className="text-3xl font-bold mb-4">Ready to Make an Impact?</h2>
                            <p className="text-xl mb-8 opacity-90">Join our team of innovators and shape the future of pharma-tech</p>
                            <button
                                onClick={() => window.open("https://forms.gle/bc7XmF5iYzFHhRee9", "_blank")}
                                className="bg-gradient-to-r from-blue-500 to-sky-500 text-white px-12 py-4
                                rounded-full text-lg font-semibold transform transition-all duration-300
                                hover:scale-105 hover:shadow-xl"
                            >
                                Start Your Journey Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer1 />
        </div>
    );
};

export default CARegistrationPage;