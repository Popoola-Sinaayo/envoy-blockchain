/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useEffect, useState } from "react";
// import { ethers } from "ethers";
import { MetaMaskInpageProvider } from "@metamask/providers";
import setup from "../../utils/detect";
import { useRouter } from "next/navigation";
import getAvailableAddresses from "@/contractFunctions/getAvaiableAddresses";
import getActorFromAddress from "@/contractFunctions/getActorFromAddress";

declare global {
  interface Window {
    Ethereum?: MetaMaskInpageProvider;
  }
}

const ActiveProposal = () => {
  const router = useRouter();
  const [account, setAccount] = useState("");
  const [availableAddresses, setAvailableAddresses] = useState<any>({});
  const [data, setData] = useState<Array<{ address: string; name: string }>>(
    []
  );
  const [lengthOfAddress, setLengthOfAddress] = useState(0);

  useEffect(() => {
    const getActiveProposal = async () => {
      try {
        const response = await getAvailableAddresses();
        setLengthOfAddress(
          Object.keys(response).filter((key: any) => !isNaN(key)).length
        );
        const data: Array<{ address: string; name: string }> = [];
        for (
          let i = 0;
          i < Object.keys(response).filter((key: any) => !isNaN(key)).length;
          i++
        ) {
          const name: any = await getActorFromAddress(response[i]);
          data.push({ address: response[i], name: name[0] });
        }
        setData(data);
        setAvailableAddresses(response);
      } catch (error) {
        console.log("error", error);
      }
    };
    getActiveProposal();
  }, []);

  return (
    <div className="relative h-screen bg-[#F5F5F5]">
      <h1 className="text-3xl font-bold text-center pt-10 text-[#0A2540]">
        Envoy Traceability System
      </h1>
      <p className="text-center text-[#0A2540] mb-6">
        View All Available Addresses
      </p>

      <div className="w-full flex justify-center items-center absolute top-2/4 transform -translate-y-1/2">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
          <table className="table-auto w-full">
            <thead className="bg-[#0A2540] text-white">
              <tr>
                <th className="px-4 py-3 text-left">Address</th>
                <th className="px-4 py-3 text-left">Name</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="bg-[#F9F9F9] odd:bg-white">
                  <td className="border px-4 py-3 text-[#333333]">
                    {item.address}
                  </td>
                  <td className="border px-4 py-3 text-[#333333]">
                    {item.name}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {data.length === 0 && (
            <p className="text-center text-[#333333] mt-4">No data available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActiveProposal;
