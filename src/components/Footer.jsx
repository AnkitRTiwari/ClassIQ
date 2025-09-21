import React, { useState } from "react";
import Logo from "./assets/Group2827.svg";
import X from "./assets/twitter.png";
import Linkedin from "./assets/linkedin.png";
import Instagram from "./assets/insta.png";

const Footer = () => {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Subscribed with:", email);
    setEmail("");
    alert("Subscribed! (replace with real logic)");
  }

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="Logo" className="w-10 h-10" />
            <span className="font-inter font-bold text-2xl">ClassIQ</span>
          </div>
          <p className="text-gray-600 text-sm">
            Subscribe for the latest courses, tips and updates. Join our
            learning community today!
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full sm:w-[280px] px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-400"
            />
            <button
              type="submit"
              className="bg-[#C2F578] hover:bg-lime-500 px-6 py-2 rounded-xl font-semibold transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div>
          <h3 className="font-semibold mb-3">ClassIQ Business</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Teach on ClassIQ</li>
            <li>Teaching Tools</li>
            <li>ClassIQ App</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Careers</li>
            <li>Blog</li>
            <li>Affiliate</li>
            <li>Support</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          © 2024 ClassIQ. All Rights Reserved.
        </p>
        <div className="flex space-x-4">
          <img
            src={Instagram}
            alt="Instagram"
            className="w-6 h-6 cursor-pointer"
          />
          <img src={X} alt="X" className="w-6 h-6 cursor-pointer" />
          <img
            src={Linkedin}
            alt="LinkedIn"
            className="w-6 h-6 cursor-pointer"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
