/** @format */

import Navbar from "./Pages/Navbar";
import Event from "./Pages/Event";
import Footer1 from "./Pages/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import About from "./Pages/About";
import CARegistrationPage from "./Pages/CARegistrationPage";
import Home from "./Pages/Home";
import CA from "./Pages/CA";
import Speakers from "./Pages/Speakers";
import Particles from "react-tsparticles";
import Testimonials from "./Pages/Testimonials";
import { loadFull } from "tsparticles";

const App = () => {
  const particlesInit = async (main) => {
    // Initialize tsParticles instance
    await loadFull(main);
  };

  return (
    <Router>
    <div className="relative min-h-screen overflow-hidden">
      {/* Particle Background */}
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

      
      <div className="relative z-10">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Navbar />
                <About />
                <Speakers />
                <CA />
                <Event />
                <Testimonials />
                <Footer1 />
              </>
            }
          />
          {/* CA Registration Page Route */}
          <Route path="/ca-registration" element={<CARegistrationPage />} />
        </Routes>
        </div>
      
      </div>
    </Router>
  );
};

export default App;
