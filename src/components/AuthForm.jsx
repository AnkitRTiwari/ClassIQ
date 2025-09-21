import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AuthForm({ mode }) {
  const isLogin = mode === "login";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!isLogin) {
      if (!name.trim()) {
        newErrors.name = "Full Name is required";
      } else if (name.trim().length < 4) {
        newErrors.name = "Full Name must be at least 4 characters";
      }
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (isLogin) {
      console.log("Logging in with:", { email, password });
      alert("Login submitted!");
    } else {
      console.log("Signing up with:", { name, email, password });
      alert("Sign up submitted!");
    }

    setName("");
    setEmail("");
    setPassword("");
    setErrors({});
  };

  return (
    <div className="flex items-start justify-center min-h-screen bg-gray-100 pt-24 pb-12">
      <div className="w-full max-w-md mx-4 bg-[#ECEDEF] rounded-xl shadow-md p-6">
        <h2 className="text-center mb-6 text-2xl font-semibold">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center space-y-4"
          aria-label={isLogin ? "Login form" : "Sign up form"}
        >
          {!isLogin && (
            <div className="w-full">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Your Full Name"
                className={`w-full px-4 py-3 border-2 rounded-2xl focus:outline-none focus:ring-2 ${
                  errors.name
                    ? "border-red-500 focus:ring-red-500"
                    : "focus:ring-blue-500"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
          )}

          <div className="w-full">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              className={`w-full px-4 py-3 border-2 rounded-2xl focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-blue-500"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="w-full">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={
                isLogin ? "Enter Your Password" : "Create a Password"
              }
              className={`w-full px-4 py-3 border-2 rounded-2xl focus:outline-none focus:ring-2 ${
                errors.password
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-blue-500"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-2xl bg-[#C2F578] font-semibold hover:bg-[#b1e864] transition-colors"
          >
            {isLogin ? "Log in" : "Create Account"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-700">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <Link
            to={isLogin ? "/signup" : "/login"}
            className="text-blue-600 hover:underline"
          >
            {isLogin ? "Sign up" : "Log in"}
          </Link>
        </p>
      </div>
    </div>
  );
}
