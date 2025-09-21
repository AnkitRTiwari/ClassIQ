import React from "react";
import { Outlet } from "react-router";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
