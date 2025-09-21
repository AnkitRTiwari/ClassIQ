import React from "react";
import CourseIcon from "./assets/Group 2824.png";

const Coursecard = ({ name }) => {
  return (
    <div className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-md hover:bg-gray-100 transition p-8 flex flex-col items-center text-center">
      <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white shadow-md mb-6">
        <img
          src={CourseIcon}
          alt="Course Icon"
          className="w-10 h-10 md:w-12 md:h-12 object-contain"
        />
      </div>

      <p className="text-lg font-medium mb-4">{name}</p>

      <button className="bg-[#C2F578] hover:bg-lime-500 text-sm px-5 py-2 rounded-md font-semibold transition">
        View Courses
      </button>
    </div>
  );
};

export default Coursecard;
