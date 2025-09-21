import React, { useState } from "react";
import Google from "./assets/google-2015.svg";
import Netflix from "./assets/netflix-3 1.svg";
import Airbnb from "./assets/airbnb1.svg";
import Amazon from "./assets/amazon2.svg";
import Facebook from "./assets/facebook.svg";

const logos = [
  { src: Google, alt: "Google" },
  { src: Netflix, alt: "Netflix" },
  { src: Airbnb, alt: "Airbnb" },
  { src: Amazon, alt: "Amazon" },
  { src: Facebook, alt: "Facebook" },
];

const Company = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-500 text-sm md:text-base font-poppins">
          Trusted by 5,000+ Companies Worldwide
        </p>

        <div className="mt-8 flex items-center justify-center gap-8 md:gap-16 flex-wrap">
          {logos.map((logo, i) => {
            const isHovered = hoveredIndex === i;
            return (
              <div
                key={i}
                className={`w-24 md:w-36 flex items-center justify-center transition-transform duration-300 ${
                  isHovered
                    ? "scale-125"
                    : hoveredIndex !== null
                    ? "scale-90 opacity-50"
                    : "scale-100 opacity-100"
                }`}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-full h-auto object-contain filter transition-all duration-300"
                />
              </div>
            );
          })}
        </div>

        <h3 className="mt-12 text-lg md:text-xl font-poppins">
          Certified Courses for <span className="font-bold">Professionals</span>
        </h3>
      </div>
    </section>
  );
};

export default Company;
