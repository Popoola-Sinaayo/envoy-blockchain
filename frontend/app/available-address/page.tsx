/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useEffect, useState } from "react";
// import { ethers } from "ethers";
import { MetaMaskInpageProvider } from "@metamask/providers";
import setup from "../../utils/detect";
import { useRouter } from "next/navigation";
import getAvailableAddresses from "@/contractFunctions/getAvaiableAddresses";

declare global {
  interface Window {
    Ethereum?: MetaMaskInpageProvider;
  }
}

const ActiveProposal = () => {
  const router = useRouter();
  const [account, setAccount] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [availableAddresses, setAvailableAddresses] = useState<any>({});
  const [lengthOfAddress, setLengthOfAddress] = useState(0);

  useEffect(() => {
    const getActiveProposal = async () => {
      try {
        const response = await getAvailableAddresses();
        console.log(response);
        setLengthOfAddress(
          Object.keys(response).filter((key: any) => !isNaN(key)).length
        );
        setAvailableAddresses(response);
      } catch (error) {
        console.log("error", error);
      }
    };
    getActiveProposal();
  }, []);

  return (
    <div className="relative h-screen bg-[#F5F5F5]">
      <h1 className="text-2xl font-bold text-center pt-10 text-[#333333]">
        Envoy Traceability System
      </h1>
      <p className="text-center text-[#333333]">All available addresses</p>

      <div className="w-full justify-center items-center absolute top-2/4">
        {Array.from({ length: lengthOfAddress }, (_, i) => i).map((index) => (
          <div key={index}>
            <p className="text-center">{availableAddresses[index]}</p>
          </div>
        ))}
        {/* <p className="text-center">Addresses</p>
        <p className="text-center">Addresses</p>
        <p className="text-center">Addresses</p> */}
      </div>
    </div>
  );
};

export default ActiveProposal;
