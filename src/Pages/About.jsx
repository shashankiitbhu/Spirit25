import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaReact, FaFlask, FaCogs, FaShieldAlt, FaBrain, FaSyringe } from 'react-icons/fa';


const HeartbeatLine = () => {
  return (
    <svg className="absolute w-full h-16" viewBox="0 0 1200 100">
      <motion.path
        d="M0,50 L100,50 L150,50 
           L200,50 L220,20 
           L240,50 L260,80 
           L280,20 L300,50 
           L320,20 L340,50 
           L360,80 L380,50 
           L400,50 L450,50 
           L500,50 L550,20 L600,80 L650,50
           L700,50 L750,20 L800,80 L850,50
           L900,50 L950,20 L1000,80 L1050,50
           L1100,50 L1150,50 L1200,50"
        stroke="rgba(14, 164, 233, 0.88)" // Fainter sky
        strokeWidth="3"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{
          pathLength: 1,
          opacity: [0.4, 0.6, 0.4], // Subtle pulse effect
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </svg>
  );
};

const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const targetDate = new Date("2025-03-21T00:00:00");
      const currentDate = new Date();
      const timeDiff = targetDate - currentDate;

      if (timeDiff <= 0) {
        clearInterval(timer);
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(timeDiff / (1000 * 60 * 60 * 24))
          .toString()
          .padStart(2, "0"),
        hours: Math.floor(
          (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
          .toString()
          .padStart(2, "0"),
        minutes: Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))
          .toString()
          .padStart(2, "0"),
        seconds: Math.floor((timeDiff % (1000 * 60)) / 1000)
          .toString()
          .padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden w-full max-w-3xl">
      {/* HeartbeatLine underneath */}
      <HeartbeatLine />

      {/* Countdown Timer */}
      <div className="flex items-center justify-center gap-4 relative z-10">
        {Object.entries(timeLeft).map(([unit, value], index) => (
          <React.Fragment key={unit}>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-sky-600">{value}</span>
              <span className="text-sm text-sky-500 capitalize">{unit}</span>
            </div>
            {index < 3 && <span className="text-2xl text-sky-400">:</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};


const StatCounter = ({ value, label }) => (
  <motion.div 
    className="flex flex-col items-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <span className="text-4xl font-bold text-sky-600">{value}</span>
    <span className="text-sm text-sky-500">{label}</span>
  </motion.div>
);

const About = () => {

  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
  }
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      <div className="flex justify-center">
        <CountDown />
      </div>

      <div className="p-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Redesigned Image Section */}
          <div className="relative h-64 w-full flex justify-center items-center">
  <motion.img
    src="/images/iitbhu.jpg"
    alt="IIT BHU"
    className="absolute h-full w-full object-cover rounded-lg shadow-lg border-4 border-gradient-to-br from-sky-500 to-sky-500"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  />
  <div className="absolute inset-0 bg-gradient-to-br from-sky-100 to-transparent rounded-lg"></div>
</div>

          {/* Content Section */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-sky-900">
              Welcome to the International Conference on Pharmaceutical Innovations & Spirit
            </h1>
            <p className="text-sky-700">
              The Techno-Pharma Conclave, a two-day immersive experience hosted by the Department
              of Pharmaceutical Engineering and Technology at the prestigious Indian Institute of
              Technology (BHU), Varanasi. In the dynamic landscape of pharmaceuticals and
              biotechnology, innovation is the driving force that propels the industry forward.
              Our conference is designed to cover a spectrum of cutting-edge tracks.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <StatCounter value="8+" label="SPEAKERS" />
              <StatCounter value="12th" label="Edition" />
              <StatCounter value="2" label="DAYS" />
              <StatCounter value="5+" label="Events" />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
      <h2 className="text-3xl font-bold text-sky-600 text-center">TRACKS</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            icon: <FaReact size={40} className="text-sky-600" />,
            title: "Cellular Crescendo: ",
            description: "Exploring Interactions",
          },
          {
            icon: <FaFlask size={40} className="text-sky-600" />,
            title: "Medicinal Alchemy: ",
            description: "The Art and Science of Pharmaceutical Chemistry",
          },
          {
            icon: <FaCogs size={40} className="text-sky-600" />,
            title: "The Crystal Conclave: ",
            description: "Advancing Pharmaceutics Research",
          },
          {
            icon: <FaShieldAlt size={40} className="text-sky-600" />,
            title: "Pharmacovigilance Pathways: ",
            description: "Regulations in Drug Development",
          },
          {
            icon: <FaBrain size={40} className="text-sky-600" />,
            title: "Neuropharmacology Nexus: ",
            description: "Approaches in Pharmacology",
          },
          {
            icon: <FaSyringe size={40} className="text-sky-600" />,
            title: "Vaccinating the Future: ",
            description: "Innovation in Immunotherapics",
          },
        ].map((track, index) => (
          <motion.div
            key={index}
            className="group relative bg-gradient-to-br from-sky-100 to-sky-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Icon Section */}
            <div className="flex justify-center items-center mb-4">
              <div className="w-16 h-16 p-4 bg-white rounded-full shadow-lg flex justify-center items-center">
                {track.icon}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-sky-800 text-center group-hover:text-sky-900 transition-colors duration-300">
              {track.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-sky-700 text-center mt-2 group-hover:text-sky-800">
              {track.description}
            </p>

            {/* Decorative Borders */}
            <div className="absolute inset-0 pointer-events-none rounded-lg border-2 border-transparent group-hover:border-sky-400 transition-all duration-300"></div>
          </motion.div>
        ))}
      </div>
    </div>


      <div className="flex justify-end">
        <motion.a
          // href="#"
          onClick={handleClick}
          target="_blank"
          className="bg-gradient-to-r from-sky-500 to-sky-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-shadow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          See Schedule
        </motion.a>
        {/* Coming Soon Message */}
        {showMessage && (
          <p className="mt-3 text-sm text-red-500"><b>Coming Soon</b></p>
        )}
      </div>
    </div>
  );
};

export default About;
