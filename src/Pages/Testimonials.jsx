import React, { useEffect, useRef, useState } from "react";

const Testimonials = () => {
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const maxScrollLeft =
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

        setScrollPosition((prev) =>
          prev + 300 > maxScrollLeft ? 0 : prev + 300
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
      image: "public/testimonials/Rahul.jpeg",
      name: "Rahul Sharma, Final-Year Student",
      text: "SPIRIT was a transformative experience! The engaging sessions and expert speakers opened up new horizons in pharmaceutical innovation.",
    },
    {
      image: "public/speakers/rajeev.png",
      name: "Dr. Jane Smith",
      text: "An amazing experience, bringing minds together for innovation!",
    },
    {
      image: "public/speakers/panda.png",
      name: "Prof. Alan Turing",
      text: "A must-attend event for anyone in the pharmaceutical field.",
    },
    {
        image: "public/speakers/panda.png",
        name: "Prof. Alan Turing",
        text: "A must-attend event for anyone in the pharmaceutical field.",
      },
      {
        image: "public/speakers/panda.png",
        name: "Prof. Alan Turing",
        text: "A must-attend event for anyone in the pharmaceutical field.",
      },
      {
        image: "public/speakers/panda.png",
        name: "Prof. Alan Turing",
        text: "A must-attend event for anyone in the pharmaceutical field.",
      },
  ];

  return (
    <div className="w-full py-16 pb-24">
      <h2 className="text-3xl font-bold text-center text-sky-600 mb-8">
        What Our Attendees Say
      </h2>
      <div
        className="w-full overflow-x-hidden relative"
        style={{ maxWidth: "100%", whiteSpace: "nowrap" }}
      >
        <div
          ref={scrollRef}
          className="flex space-x-8 px-16 overflow-x-auto scroll-smooth scrollbar-hidden"
        >
          {testimonials.map((testimonial, index) => (
          <div
          key={index}
          className="flex flex-shrink-0 bg-white shadow-md rounded-xl p-6 items-center mb-8"
          style={{
            width: "600px", // Larger width for better readability
            height: "250px", // Slightly taller to accommodate 3 lines of text
          }}
        >
          <div className="flex-shrink-0">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full shadow-lg border-4 border-sky-400"
            />
          </div>
          <div className="ml-6 overflow-hidden">
            <p
              className="text-gray-700 text-base italic"
              style={{
                whiteSpace: "normal", // Allows text to wrap
                overflowWrap: "break-word", // Breaks long words to fit
              }}
            >
              <span className="text-sky-400 text-2xl">“</span>
              {testimonial.text}
              <span className="text-sky-400 text-2xl">”</span>
            </p>
            <p className="text-gray-500 mt-2 font-medium text-sm">- {testimonial.name}</p>
          </div>
        </div>
        
         
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Hide scrollbar for webkit browsers */
        .scrollbar-hidden::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for other browsers */
        .scrollbar-hidden {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
