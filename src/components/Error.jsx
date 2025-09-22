import { useRouteError } from "react-router";
import React from "react";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
      <h1 className="text-3xl font-bold text-red-600 mb-3">
        Oops! Something went wrong 😢
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        {error?.statusText || error?.message || "Unknown error"}
      </p>
      <img
        src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnhxeWpta2pyZzUxanNsbG16NDdzN3NxMjI5d2hrcnFzNWFid2lrYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kePYfGmpNtzAQ/giphy.gif"
        alt="error gif"
        className="w-56 h-56 object-contain mb-8"
      />
      <button
        onClick={() => (window.location.href = "/")}
        className="bg-[#C2F578] px-5 py-2 rounded-md font-semibold hover:bg-lime-600 transition"
      >
        Go Home
      </button>
    </div>
  );
};

export default Error;
