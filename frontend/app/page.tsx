"use client";

import { useRouter } from "next/navigation";
import { FaSearch, FaUserPlus } from "react-icons/fa"; // Importing icons

export default function Home() {
  const router = useRouter();
  return (
    <div className="relative h-screen bg-gradient-to-r from-blue-400 to-blue-600 flex flex-col justify-center items-center overflow-hidden">
      {/* Spinning background element */}
      <div className="absolute w-96 h-96 bg-white opacity-20 rounded-full animate-spin-slow top-20 left-1/2 -translate-x-1/2 z-0"></div>

      <div className="relative z-10 text-center space-y-5">
        <h1 className="text-4xl font-extrabold text-white drop-shadow-lg">
          Welcome to Envoy Traceability System
        </h1>
        <p className="text-lg text-white drop-shadow-lg">
          Monitor the movement of products on blockchain
        </p>
      </div>

      {/* Buttons with Icons */}
      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mt-10">
        <button
          className="flex items-center space-x-3 px-8 py-4 bg-white text-[#0A2540] font-semibold rounded-full shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-200"
          onClick={() => router.push("/trace")}
        >
          <FaSearch size={20} /> {/* Search Icon */}
          <span>Track a Product With ID</span>
        </button>

        <button
          className="flex items-center space-x-3 px-8 py-4 bg-white text-[#0A2540] font-semibold rounded-full shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-200"
          onClick={() => router.push("/register-wallet")}
        >
          <FaUserPlus size={20} /> {/* User Plus Icon */}
          <span>Register as an Actor in Supply Chain</span>
        </button>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 text-sm text-white">
        © 2024 Envoy Traceability System
      </footer>
    </div>
  );
}
