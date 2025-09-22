import React from "react";
import FullStack from "./assets/FundamentalWebDEV.png";
import DataScience from "./assets/DataScience.png";
import UiUx from "./assets/UIUX.png";
import HTML from "./assets/HTML.png";
import AllCoursesCard from "./AllCoursesCard";
import Join from "./assets/Join.svg";
import { motion } from "framer-motion";

const AllCourses = () => {
  const courses = [
    {
      img: FullStack,
      name: "Full Stack Web Development",
      summary: "Learn to build a full stack web application from scratch",
      price: 100,
    },
    {
      img: DataScience,
      name: "Data Science",
      summary: "Learn to analyze data and build predictive models",
      price: 400,
    },
    {
      img: UiUx,
      name: "UI/UX Design",
      summary: "Learn to design beautiful user interfaces",
      price: 800,
    },
    {
      img: HTML,
      name: "HTML in 20 minutes",
      summary: "Master HTML basics in just 20 minutes",
      price: 200,
    },
  ];

  return (
    <motion.section
      className="py-16 px-3 sm:px-8 min-h-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-12">
        <p className="text-xl text-[#3E3E3E] font-bold tracking-tight">
          All Courses
        </p>
        <img src={Join} alt="Join Now" className="w-6 h-6 px-1" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {courses.map((course, index) => (
          <AllCoursesCard
            key={index}
            img={course.img}
            name={course.name}
            summary={course.summary}
            price={course.price}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default AllCourses;
