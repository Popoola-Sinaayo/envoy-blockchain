/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from "react";
import { MetaMaskInpageProvider } from "@metamask/providers";
import setup from "../../utils/detect";
import { useRouter } from "next/navigation";
import { FaWallet } from "react-icons/fa"; // Importing Wallet Icon

declare global {
  interface Window {
    Ethereum?: MetaMaskInpageProvider;
  }
}

const RegisterWallet = () => {
  const router = useRouter();
  const [account, setAccount] = useState("");

  const connectwalletHandler = async () => {
    await setup();
    const accounts = await window?.ethereum?.request({
      method: "eth_requestAccounts",
    });

    console.log("accounts", accounts);
    if (account !== null && accounts !== undefined) {
      const accountRead: any = accounts;
      setAccount(accountRead[0]);
    }
  };

  return (
    <div className="relative h-screen bg-gradient-to-r from-blue-400 to-blue-600 flex flex-col justify-center items-center overflow-hidden">
      {/* Moving pentagons in the background */}
      <div className="absolute w-20 h-20 bg-white opacity-30 transform rotate-45 animate-pentagon-move top-1/3 left-10 z-0"></div>
      <div className="absolute w-16 h-16 bg-white opacity-30 transform rotate-45 animate-pentagon-move-slow top-1/2 right-20 z-0"></div>
      <div className="absolute w-12 h-12 bg-white opacity-30 transform rotate-45 animate-pentagon-move-fast bottom-1/4 left-1/4 z-0"></div>

      <div className="relative z-10 text-center space-y-5">
        <h1 className="text-4xl font-extrabold text-white drop-shadow-lg">
          Envoy Traceability System
        </h1>
        <p className="text-lg text-white drop-shadow-lg">
          Connect your wallet to start inputting data
        </p>
      </div>

      {!account ? (
        <div className="relative z-10 w-full flex justify-center items-center mt-10">
          <button
            className="flex items-center space-x-3 px-8 py-4 bg-white text-[#0A2540] font-semibold rounded-full shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-200"
            onClick={connectwalletHandler}
          >
            <FaWallet size={20} /> {/* Wallet Icon */}
            <span>Connect Wallet</span>
          </button>
        </div>
      ) : (
        <div className="relative z-10 w-full flex justify-center items-center mt-10">
          <div>
            <button
              className="flex items-center space-x-3 px-8 py-4 bg-white text-[#0A2540] font-semibold rounded-full shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-200"
              onClick={() => router.push("/access-interface")}
            >
              <FaWallet size={20} /> {/* Wallet Icon */}
              <span>Access Interface</span>
            </button>
            <p className="text-center mt-5 text-white">Wallet Connected!</p>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="absolute bottom-4 text-sm text-white">
        © 2024 Envoy Traceability System
      </footer>
    </div>
  );
};

export default RegisterWallet;
