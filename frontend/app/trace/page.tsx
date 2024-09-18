/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import getIfAddressIsMember from "@/contractFunctions/getIfMember";
import getNumberOfLots from "@/contractFunctions/getNumberOfLots";
import getSingleLotDetailsChainId from "@/contractFunctions/getSingleLotDetailsChainId";
import PageLoader from "@/modal/loaders";

import React, { useEffect, useState } from "react";

const TraceItem = () => {
  const [loading, setLoading] = useState(true);
  const [lots, setlots] = useState<
    Array<{
      stage: string;
      details: string;
      quantity: number;
      location: string;
      timestamp: number;
      source: string;
      chainId: string;
    }>
  >([]);

  const [filteredLots, setfilteredLots] = useState<
    Array<{
      stage: string;
      details: string;
      quantity: number;
      location: string;
      timestamp: number;
      source: string;
      chainId: string;
    }>
  >([]);

  const [chainId, setChainId] = useState("");
  useEffect(() => {
    if (window.ethereum === undefined) {
      alert("MetaMask not found");
    }
    const getDetails = async () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const result = await getIfAddressIsMember();
      const numberofLotResponse = await getNumberOfLots();
      setlots([]);
      const currentLot: Array<any> = [];

      const indexDone: Array<number> = [];
      for (let i = 0; i < Number(numberofLotResponse); i++) {
        if (!indexDone.includes(i)) {
          const response = await getSingleLotDetailsChainId(i);
          currentLot.push({
            stage: response[0],
            details: Number(response[1]),
            quantity: Number(response[2]),
            location: response[3],
            timestamp: Number(response[4]),
            source: response[5],
            chainId: response[6],
          });
          indexDone.push(i);
        }
      }
      setlots(currentLot);
      setfilteredLots(currentLot);
      setLoading(false);
    };
    getDetails();
  }, []);

  useEffect(() => {
    setLoading(true);
    if (chainId === "") {
      setfilteredLots(lots);
    } else {
      setfilteredLots(
        lots.filter((lot) => lot.details.toString() === chainId.toString())
      );
    }
    setLoading(false);
  }, [chainId]);

  return (
    <>
      {loading && <PageLoader />}
      <div className="relative h-full bg-[#F5F5F5]">
        <h1 className="text-3xl font-bold text-center pt-10 text-[#0A2540]">
          Envoy Traceability System
        </h1>
        <p className="text-center text-[#0A2540]">Track With Chain ID</p>

        <div className="pt-10 pb-10 flex flex-row items-center mx-auto w-4/5">
          <div className="flex-1">
            <input
              className="border-2 border-[#0A2540] px-4 py-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A2540]"
              placeholder="Enter Chain ID to search"
              value={chainId}
              onChange={(e) => {
                setChainId(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="text-center mt-10">
          <table className="table-auto mx-auto w-full max-w-4xl bg-white shadow-lg rounded-lg">
            <thead className="bg-[#0A2540] text-white">
              <tr>
                <th className="px-4 py-3 text-left">Stage</th>
                <th className="px-4 py-3 text-left">Chain ID</th>
                <th className="px-4 py-3 text-left">Quantity</th>
                <th className="px-4 py-3 text-left">Location</th>
                <th className="px-4 py-3 text-left">Timestamp</th>
                <th className="px-4 py-3 text-left">Source</th>
                <th className="px-4 py-3 text-left">Creator</th>
              </tr>
            </thead>
            <tbody>
              {chainId &&
                filteredLots.map((lot, index) => (
                  <tr key={index} className="bg-[#F9F9F9] odd:bg-white">
                    <td className="border px-4 py-3 text-[#333333]">
                      {lot.stage}
                    </td>
                    <td className="border px-4 py-3 text-[#333333]">
                      {lot.details}
                    </td>
                    <td className="border px-4 py-3 text-[#333333]">
                      {lot.quantity}
                    </td>
                    <td className="border px-4 py-3 text-[#333333]">
                      {lot.location}
                    </td>
                    <td className="border px-4 py-3 text-[#333333]">
                      {new Date(lot.timestamp).toLocaleString()}
                    </td>
                    <td className="border px-4 py-3 text-[#333333]">
                      {lot.source}
                    </td>
                    <td className="border px-4 py-3 text-[#333333]">
                      {lot.chainId}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          {filteredLots.length === 0 && (
            <p className="text-center text-[#333333] mt-4">No data available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default TraceItem;
