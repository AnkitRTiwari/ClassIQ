import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Error from "./components/Error";
import AuthForm from "./components/AuthForm";

const AllCourses = lazy(() => import("./components/AllCourses"));

// Centered Spinner component
const Loader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-100 z-50">
    <div className="w-12 h-12 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <AuthForm mode="login" /> },
      { path: "/signup", element: <AuthForm mode="signup" /> },
      {
        path: "/allcourses",
        element: (
          <Suspense fallback={<Loader />}>
            <AllCourses />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
