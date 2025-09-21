import { useRouteError } from "react-router";
import React from "react";

const Error = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>Oops! Something went wrong 😢</h1>
      <p>{error?.statusText || error?.message || "Unknown error"}</p>

      <img
        src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnhxeWpta2pyZzUxanNsbG16NDdzN3NxMjI5d2hrcnFzNWFid2lrYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kePYfGmpNtzAQ/giphy.gif"
        alt="error gif"
      />
    </div>
  );
};

export default Error;
