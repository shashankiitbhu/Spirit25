/** @format */

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importing Router components
import Navbar from "./Pages/Navbar";
import Event from "./Pages/Event";
import Footer1 from "./Pages/Footer";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Speakers from "./Pages/Speakers";
import Particles from "react-tsparticles";
import FormsPage from "./Pages/FormsPage"; // Importing FormsPage
import Testimonials from "./Pages/Testimonials";
import { loadFull } from "tsparticles";

const App = () => {
  const particlesInit = async (main) => {
    // Initialize tsParticles instance
    await loadFull(main);
  };

  return (
    <Router> {/* Wrapping App content with Router */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Particle Background */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            particles: {
              number: {
                value: 80, // Reduced number of particles for better performance
                density: {
                  enable: true,
                  value_area: 800, // Area for particle distribution
                },
              },
              color: {
                value: "#BFDBFF", // White particles
              },
              shape: {
                type: "circle", // Circular particles
              },
              opacity: {
                value: 0.5, // Semi-transparent particles
                random: true,
              },
              size: {
                value: 3, // Small particle size
                random: true,
              },
              lineLinked: {
                enable: true, // Enable connecting lines
                distance: 150, // Maximum distance for line connections
                color: "#93C5FD", // Line color
                opacity: 0.4, // Line opacity
                width: 1, // Line width
              },
              move: {
                enable: true,
                speed: 1, // Moderate speed
                direction: "none",
                random: false,
                straight: false,
                outModes: {
                  default: "out", // Allow particles to re-enter from the opposite side
                },
              },
            },
            background: {
              color: "transparent", // Transparent background
            },
            fullScreen: {
              enable: true, // Full-screen coverage
              zIndex: -1, // Keep particles behind other content
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "grab", // Connect particles with a line when hovered
                },
                onclick: {
                  enable: true,
                  mode: "push", // Add particles on click
                },
              },
              modes: {
                grab: {
                  distance: 200, // Distance for grab effect
                  lineLinked: {
                    opacity: 0.5, // Line opacity for grab effect
                  },
                },
                push: {
                  quantity: 4, // Number of particles added on click
                },
              },
            },
          }}
          className="absolute inset-0 z-0"
        />

        {/* Main App Content */}
        <div className="relative z-10">
          <Routes> {/* Define routes here */}
            <Route path="/" element={<><Home /><Navbar /><About /><Speakers /><Event /><Footer1 /><Testimonials /></>} />
            <Route path="/forms-page" element={<FormsPage />} /> {/* FormsPage route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
