import React from "react";
import Boy from "./assets/Image 4.png";
import ArrowLeft from "./assets/Group76.png";
import ArrowRight from "./assets/Group.png";
import Highlight from "./assets/Vector 3.png";
import Vector1 from "./assets/Vector 1.png";
import Vector2 from "./assets/Vector 2.png";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse items-center gap-10 py-16 md:flex-row md:justify-between">
      <div className="w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row md:justify-between items-center">
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-[68px] leading-tight max-w-xl mx-auto md:mx-0">
            Empower Your Learning Journey with{" "}
            <span className="relative inline-block font-extrabold text-black">
              ClassIQ
              <img
                src={Highlight}
                alt="highlight"
                className="absolute left-0 -bottom-3 w-[120px] md:w-[160px] pointer-events-none"
              />
            </span>
          </h1>

          <p className="text-[#96989A] text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Unlock a world of knowledge and skills with our innovative online
            courses, expert instructors, and interactive learning tools. Enhance
            your journey with hands-on experiences and expert guidance.
          </p>

          <button
            className="hidden md:block font-poppins text-gray-700 hover:text-black cursor-pointer bg-[#C2F578] hover:bg-lime-500 px-6 py-3 rounded-md font-semibold transition"
            onClick={() => {
              const coursesSection = document.getElementById("courses");
              coursesSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore Courses
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center relative mb-10 md:mb-0">
          <img
            src={Vector1}
            alt="Vector1"
            className="absolute top-0 left-1/4 w-1/2 md:w-2/3 max-w-[200px] md:max-w-sm -z-10"
          />
          <img
            src={Vector2}
            alt="Vector2"
            className="absolute bottom-0 right-1/4 w-1/2 md:w-2/3 max-w-[200px] md:max-w-sm -z-10"
          />

          <img
            src={Boy}
            alt="Learning"
            className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[500px] relative z-10"
          />

          <img
            src={ArrowLeft}
            alt="left arrow"
            className="hidden md:block absolute left-0 top-1/2 w-12 h-12 -translate-x-1/2 -translate-y-1/2 z-20"
          />

          <img
            src={ArrowRight}
            alt="right arrow"
            className="hidden md:block absolute right-0 top-1/2 w-12 h-12 translate-x-1/2 -translate-y-1/2 z-20"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
