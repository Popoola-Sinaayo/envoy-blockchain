/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { FaSpinner } from "react-icons/fa"; // Importing Spinner Icon

const Loader = () => {
  const Spinner: any = FaSpinner;
  return (
    <div className="relative h-screen bg-gradient-to-r from-blue-400 to-blue-600 flex flex-col justify-center items-center overflow-hidden">
      {/* Main content */}
      <div className="relative z-10 text-center space-y-5">
        <h1 className="text-4xl font-extrabold text-white drop-shadow-lg">
          Envoy Traceability System
        </h1>
        <p className="text-lg text-white drop-shadow-lg">
          Please wait while we load your data...
        </p>
      </div>

      {/* Loading Spinner */}
      <div className="relative z-10 w-full flex justify-center items-center mt-10">
        <Spinner className="text-white text-6xl animate-spin-slow" />
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 text-sm text-white">
        © 2024 Envoy Traceability System
      </footer>
    </div>
  );
};

export default Loader;
