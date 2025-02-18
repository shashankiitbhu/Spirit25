import React, { useEffect, useRef, useState } from "react";
import Footer1 from "./Footer";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { StarIcon, AcademicCapIcon, UserGroupIcon, ChartBarIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const CARegistrationPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scrollRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current) {
                const maxScrollLeft =
                    scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
                let scrollStep = window.innerWidth < 768 ? 250 : 500;

                setScrollPosition((prev) =>
                    prev + scrollStep > maxScrollLeft ? 0 : prev + scrollStep
                );
            }
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({
                left: scrollPosition,
                behavior: "smooth",
            });
        }
    }, [scrollPosition]);

    const testimonials = [
        {
            text: 'Being a Campus Ambassador was a life-changing experience! I gained leadership skills and made lifelong connections.',
            name: 'Ayush Shrivastava',
            college: 'NIT Allahabad'
        },
        {
            text: 'This program helped me network with industry experts and enhance my organizational skills significantly.',
            name: 'Priya Sharma',
            college: 'NIPER Hyderabad'
        },
        {
            text: 'I loved the exclusive opportunity to express my love and passion for pharmaceutical industry.',
            name: 'Aditya Singh',
            college: 'Indtitute of Medical Sciences, BHU',

        },
    ];

    const benefits = [
        {
            icon: StarIcon,
            title: "Exclusive Merchandise",
            description: "Get exclusive branded T-shirts, hoodies, and goodies for your efforts.",
            bgImage: "./incentives/merch.jpg",
        },
        {
            icon: AcademicCapIcon,
            title: "Certificates",
            description: "Earn a certificate for your contribution to the community.",
            bgImage: "./incentives/certificates.jpg",
        },
        {
            icon: UserGroupIcon,
            title: "Cruise Networking Opportunities",
            description: "Interact with like-minded peers and industry leaders on an exclusive cruise as a once in a lifetime opportunity.",
            bgImage: "./incentives/cruise.jpg",
        },
        {
            icon: ChartBarIcon,
            title: "Full Access to SPIRIT",
            description: "Gain full access to interactive events, amazing workshops and much more.",
            bgImage: "./incentives/keynote.jpg",
        },
    ];

    return (
        <div className="relative min-h-screen bg-white text-gray-900">


            <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
                            Become a Campus Ambassador
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 font-light opacity-90 leading-relaxed">
                            As a Campus Ambassador, unlock the exclusive
                            <br />
                            <span className="font-bold text-yellow-400 ">Golden Pass</span> -your gateway to unparalleled opportunities, premium access, and career-defining experiences in pharma-tech!
                        </p>
                        <motion.a
                            href="https://forms.gle/bc7XmF5iYzFHhRee9"
                            target="_blank"
                            className="group relative w-full md:w-auto text-center px-8 py-3 text-lg md:text-xl overflow-hidden rounded-full border-2 border-blue-400 text-blue-400 transition-all duration-300 hover:text-white hover:bg-blue-400"
                        >
                            Start Your Journey Now
                        </motion.a>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <div className="relative w-80 h-80 md:w-96 md:h-96
                        flex items-center justify-center overflow-hidden animate-float">
                            <img
                                src="./images/logo_2.png"
                                alt="Organization Logo"
                                className="w-70 h-70 object-contain"
                            />

                        </div>
                    </div>
                </div>
            </div>
            <div className="relative min-h-screen bg-gradient-to-br from-sky-400 via-sky-600 to-teal-600 overflow-hidden text-white">
                {/* Benefits Section */}
                <section className="relative z-10 py-16 bg-white/10 backdrop-blur-lg">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold text-center mb-12">What does the <span className="text-yellow-300">Golden Pass</span> Entail?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {benefits.map(({ icon: Icon, title, description, bgImage }, index) => (
                                <div
                                    key={index}
                                    className="p-8 bg-white/5 rounded-2xl border border-white/10 transform transition-all 
            duration-300 hover:bg-white/20 hover:scale-105 group relative overflow-hidden"
                                    style={{
                                        backgroundImage: `url(${bgImage})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                >
                                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300"></div>

                                    <div className="relative z-10">
                                        <div className="w-16 h-16 mb-6 bg-white/10 rounded-2xl flex items-center justify-center">
                                            <Icon className="w-8 h-8 text-white group-hover:text-blue-400 transition-colors" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
                                        <p className="text-gray-200 leading-relaxed">{description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>

                {/* Testimonials Section */}
                {/* <section className="relative z-10 py-16">
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
            </section> */}
                <div className="w-full overflow-x-hidden relative">
                    <h2 className="text-4xl font-bold text-center mb-12 py-10 px-5">
                        Testimonials from Our Ambassadors
                    </h2>
                    <div
                        ref={scrollRef}
                        className="flex space-x-8 px-6 md:px-16 overflow-x-auto scroll-smooth scrollbar-hidden flex-nowrap"
                        style={{
                            scrollbarWidth: "none", 
                            msOverflowStyle: "none", 
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="flex flex-shrink-0 bg-white shadow-md rounded-xl p-6 items-center "
                                style={{
                                    width: window.innerWidth < 768 ? "85vw" : "50vw", 
                                    maxWidth: "700px", 
                                    height: "180px",
                                }}
                            >
                                <div className="ml-6 overflow-hidden">
                                    <p className="text-gray-700 text-base italic break-words whitespace-normal">
                                        <span className="text-sky-400 text-2xl">“</span>
                                        {testimonial.text}
                                        <span className="text-sky-400 text-2xl">”</span>
                                    </p>
                                    <p className="text-gray-500 mt-2 font-medium text-sm">
                                        - {testimonial.name}
                                    </p>
                                    <p className="text-gray-500 mt-2 font-medium text-sm">
                                        - {testimonial.college}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


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
            </div>

            <Footer1 />
        </div>
    );
};

export default CARegistrationPage;