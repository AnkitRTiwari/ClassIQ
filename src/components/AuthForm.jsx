import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const InputField = ({ type, value, onChange, placeholder, error }) => (
  <div className="w-full">
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full px-4 py-3 border-2 rounded-2xl focus:outline-none focus:ring-2 ${
        error ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
      }`}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default function AuthForm({ mode }) {
  const isLogin = mode === "login";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!isLogin) {
      if (!name.trim()) newErrors.name = "Full Name is required";
      else if (name.trim().length < 4)
        newErrors.name = "Full Name must be at least 4 characters";
    }

    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))
      newErrors.email = "Enter a valid email";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (isLogin) console.log("Logging in with:", { email, password });
    else console.log("Signing up with:", { name, email, password });

    setName("");
    setEmail("");
    setPassword("");
    setErrors({});
  };

  return (
    <motion.div
      className="flex items-start justify-center min-h-screen bg-gray-100 pt-24 pb-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
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
            <InputField
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Your Full Name"
              error={errors.name}
            />
          )}

          <InputField
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            error={errors.email}
          />

          <InputField
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={isLogin ? "Enter Your Password" : "Create a Password"}
            error={errors.password}
          />

          <button className="w-full py-3 rounded-2xl bg-[#C2F578] font-semibold hover:bg-[#b1e864] transition-colors">
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
    </motion.div>
  );
}
