import { motion } from "framer-motion";

const Banner = () => {
    return (
        <div className="relative w-full py-3 bg-transparent overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-transparent opacity-80 h-full pointer-events-none" />

            {/* Scrolling Text */}
            <motion.div
                className="text-center text-black text-lg md:text-xl font-semibold tracking-wide"
                initial={{ x: "100%" }}
                animate={{ x: "-100%" }}
                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            >
                🚀 Registration Deadline Coming Soon | 
                <span>
                    <motion.a
                        href="https://docs.google.com/forms/d/e/1FAIpQLScvA8sc-eosVlQm7BNMeidlB03mp5K9M4veIgCBRH2XRnqX-A/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-600 hover:text-green-800 transition-colors duration-200"
                    >
                        Register Now 🚀
                    </motion.a>
                </span>
                    </motion.div>
        </div>
    );
};

export default Banner;
