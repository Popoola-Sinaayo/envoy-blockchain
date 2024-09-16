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
      const result = await getIfAddressIsMember();
      console.log("result", result);
      const numberofLotResponse = await getNumberOfLots();
      console.log("numberofLotResponse", numberofLotResponse);
      setlots([]);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const currentLot: Array<any> = [];

      const indexDone: Array<number> = [];
      for (let i = 0; i < Number(numberofLotResponse); i++) {
        console.log(i);
        if (!indexDone.includes(i)) {
          const response = await getSingleLotDetailsChainId(i);
          console.log("response", response);
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

        // const lotResponse = await getLot(i);
        // console.log("lotResponse", lotResponse);
      }
      console.log("currentLot", currentLot);
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
      console.log("chainId", chainId);
      console.log(
        lots.filter((lot) => lot.details.toString() === chainId.toString())
      );
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
        <h1 className="text-2xl font-bold text-center pt-10 text-[#333333]">
          Envoy Traceability System
        </h1>
        <p className="text-center text-[#333333]">Track With Chain ID</p>
        <div className="pt-10 pb-10 flex flex-row items-center mr-auto ml-auto w-4/5">
          <div className="flex-1">
            <input
              className="border-black border-2 p-10 py-15 w-full rounded-lg"
              style={{ padding: "8px" }}
              placeholder="Enter Chain ID to search"
              value={chainId}
              onChange={(e) => {
                setChainId(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="text-center mt-10">
          <table className="table-auto mx-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Stage</th>
                <th className="px-4 py-2">Chain ID</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Location</th>
                <th className="px-4 py-2">Timestamp</th>
                <th className="px-4 py-2">Source</th>
                <th className="px-4 py-2">Creator</th>
              </tr>
            </thead>
            <tbody>
              {chainId &&
                filteredLots.map((lot, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{lot.stage}</td>
                    <td className="border px-4 py-2">{lot.details}</td>
                    <td className="border px-4 py-2">{lot.quantity}</td>
                    <td className="border px-4 py-2">{lot.location}</td>
                    <td className="border px-4 py-2">
                      {new Date(lot.timestamp).toLocaleString()}
                    </td>
                    <td className="border px-4 py-2">{lot.source}</td>
                    <td className="border px-4 py-2">{lot.chainId}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TraceItem;
