import React from "react";
import Boy from "./assets/Image 4 (1).png";
import Flexible from "./assets/Flexible.png";
import Expert from "./assets/Expert.png";
import Interactive from "./assets/Interactive.png";
import Join from "./assets/Join.svg";

const AllInOneSolution = () => {
  const features = [
    { icon: Flexible, title: "Flexible Learning" },
    { icon: Expert, title: "Expert Instructors" },
    { icon: Interactive, title: "Interactive Community" },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <img
            src={Boy}
            alt="Learning Illustration"
            className="w-80 md:w-[28rem] lg:w-[32rem] object-contain"
          />
        </div>

        <div>
          <h2 className="text-3xl text-[#373636] md:text-4xl font-semibold mb-6 font-poppins">
            All-In-One Solution
          </h2>

          <div className="space-y-6 mb-8">
            {features.map((item, idx) => (
              <div key={idx} className="flex items-center space-x-4">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-5 h-5 object-contain align-middle"
                />

                <p className="font-poppins text-[#545454] text-lg font-medium">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          <button className="flex items-center gap-3 bg-[#C2F578] hover:bg-lime-500 px-6 py-3 rounded-md font-semibold transition">
            <img src={Join} alt="Join Now" className="w-5 h-5" />
            Join Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default AllInOneSolution;
