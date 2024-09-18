"use client";
import getIfAddressIsMember from "@/contractFunctions/getIfMember";
import getNumberOfLots from "@/contractFunctions/getNumberOfLots";
import getSingleLotDetails from "@/contractFunctions/getSingleLotDetails";
import { AddLotModal } from "@/modal/add-lot";
import PageLoader from "@/modal/loaders";
import SuggestMember from "@/modal/suggest";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const AccessInterface = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showSuggestModal, setShowSuggestModal] = useState(false);
  const [member, setMember] = useState(false);
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

  const copyWalletAddress = async () => {
    const accounts = await window?.ethereum?.request({
      method: "eth_requestAccounts",
    });

    console.log("accounts", accounts);
    if (accounts !== null && accounts !== undefined) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const accountRead: any = accounts;
      //   setAccount(accountRead[0]);

      if (accountRead) {
        navigator.clipboard.writeText(accountRead[0]);
        alert("Address copied to clipboard");
      }
    }
  };

  useEffect(() => {
    if (!window?.ethereum) {
      alert("MetaMask not found");
    }

    const getDetails = async () => {
      const result = await getIfAddressIsMember();
      const numberofLotResponse = await getNumberOfLots();
      setMember(result);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const currentLot: Array<any> = [];
      for (let i = 0; i < Number(numberofLotResponse); i++) {
        const response = await getSingleLotDetails(i);
        currentLot.push({
          stage: response[0],
          details: response[1],
          quantity: Number(response[2]),
          location: response[3],
          timestamp: Number(response[4]),
          source: response[5],
          chainId: response[6],
        });
      }
      setlots(currentLot);
      setLoading(false);
    };

    getDetails();
  }, []);

  return (
    <>
      {loading && <PageLoader />}
      <div className="relative h-full bg-[#F5F5F5]">
        {showModal && (
          <AddLotModal
            cancelModal={() => {
              setShowModal(false);
            }}
          />
        )}
        {showSuggestModal && (
          <SuggestMember cancelModal={() => setShowSuggestModal(false)} />
        )}
        <h1 className="text-2xl font-bold text-center pt-10 text-[#0A2540]">
          Envoy Traceability System
        </h1>
        <p className="text-center text-[#0A2540]">
          {member
            ? "You're a member of the Envoy Traceability System"
            : "You're not a member of the Envoy Traceability System"}
        </p>
        <div className="text-center mt-5 flex-col">
          <button
            className="mx-10 px-8 py-[10px] bg-[#0A2540] text-white rounded-xl"
            onClick={() => {
              copyWalletAddress();
            }}
          >
            Copy address
          </button>

          {member && (
            <button
              className="mt-5 mb-10 px-8 py-[10px] bg-[#0A2540] text-white rounded-xl"
              onClick={() => {
                setShowModal(true);
              }}
            >
              Add New Lot Procurement
            </button>
          )}

          {member && (
            <button
              className="mt-5 mb-10 mx-10 px-8 py-[10px] bg-[#0A2540] text-white rounded-xl"
              onClick={() => {
                setShowSuggestModal(true);
              }}
            >
              Suggest New Member
            </button>
          )}

          {member && (
            <button
              className="mt-5 mb-10 mx-5 px-8 py-[10px] bg-[#0A2540] text-white rounded-xl"
              onClick={() => {
                router.push("/active-proposal");
              }}
            >
              View Active Proposal
            </button>
          )}

          {member && (
            <button
              className="mt-5 mb-10 mx-5 px-8 py-[10px] bg-[#0A2540] text-white rounded-xl"
              onClick={() => {
                router.push("/available-address");
              }}
            >
              View Members Address
            </button>
          )}
        </div>

        <div className="text-center mt-10">
          <table className="table-auto mx-auto bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-[#0A2540] text-white">
                <th className="px-4 py-2">Stage</th>
                <th className="px-4 py-2">Details</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Location</th>
                <th className="px-4 py-2">Timestamp</th>
                <th className="px-4 py-2">Source</th>
                <th className="px-4 py-2">Creator</th>
              </tr>
            </thead>
            <tbody>
              {lots.map((lot, index) => (
                <tr key={index} className="border-b border-[#0A2540]">
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
export default AccessInterface;
