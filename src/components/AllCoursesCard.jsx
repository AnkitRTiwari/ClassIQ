import React from "react";
import { motion } from "framer-motion";

const AllCoursesCard = ({ img, name, summary, price }) => {
  return (
    <motion.article
      className="rounded-2xl shadow-lg hover:shadow-xl transition duration-200 border border-transparent hover:border-[#cae381] flex flex-col justify-between text-left overflow-hidden"
      style={{ minWidth: 280, minHeight: 340, height: "100%" }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-full relative flex-shrink-0">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover"
          style={{ display: "block" }}
          draggable="false"
        />
      </div>

      <div
        className="flex flex-col flex-1 px-2 py-5 justify-between"
        style={{ minHeight: 140 }}
      >
        <h3 className="text-base md:text-lg font-semibold text-[#373636] leading-tight mb-2 line-clamp-2">
          {name}
        </h3>
        <p className="font-poppins text-sm text-[#666] mb-4 line-clamp-2">
          {summary}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <div className="font-bold font-poppins text-lg text-[#373636]">
            ${price}
          </div>
          <button
            type="button"
            className="px-6 py-2 rounded-lg bg-[#C2F578] text-[#363f1d] font-medium text-base shadow hover:bg-[#dce22e] transition"
          >
            Enroll
          </button>
        </div>
      </div>
    </motion.article>
  );
};

export default AllCoursesCard;
