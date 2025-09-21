import React from "react";
import Coursecard from "./Cousecard";

const Courses = () => {
  const courseArr = ["Web Development", "Data Science", "App Development"];

  return (
    <section id="courses" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-poppins font-medium">
          Certified Courses for <span className="font-bold">Professionals</span>
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courseArr.map((course, idx) => (
            <Coursecard key={idx} name={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
