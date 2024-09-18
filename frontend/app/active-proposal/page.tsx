/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useEffect, useState } from "react";
// import { ethers } from "ethers";
import { MetaMaskInpageProvider } from "@metamask/providers";
import setup from "../../utils/detect";
import { useRouter } from "next/navigation";
import getCurrentProposal from "@/contractFunctions/getCurrrentProposal";
import voteProposal from "@/contractFunctions/voteProposal";
import PageLoader from "@/modal/loaders";

declare global {
  interface Window {
    Ethereum?: MetaMaskInpageProvider;
  }
}

const ActiveProposal = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState("");
  const [activeProposal, setActiveProposal] = useState({
    name: "",
    address: "",
    totalCount: 0,
    totalVotes: 0,
    primatyProducer: false,
    isActive: false,
  });

  useEffect(() => {
    const getActiveProposal = async () => {
      try {
        const response = await getCurrentProposal();
        console.log(response);
        console.log(response[0]);
        console.log(response[1]);
        console.log(Number(response[2]));
        console.log(Number(response[3]));
        console.log(response[4]);
        setActiveProposal({
          name: response[0],
          address: response[1],
          totalCount: Number(response[2]),
          totalVotes: Number(response[3]),
          primatyProducer: response[4],
          isActive: response[5],
        });
        setLoading(false);
      } catch (error) {
        console.log("error", error);
        setLoading(false);
      }
    };
    getActiveProposal();
  }, []);
  const vote = async (vote: boolean) => {
    await voteProposal(vote);
    alert("Voted Successfully");
    // router.push("/access-interface");
  };
  return (
    <>
      {loading && <PageLoader />}
      <div className="relative h-screen bg-[#F5F5F5] flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-center text-[#0A2540] mb-6">
          Envoy Traceability System
        </h1>
        <p className="text-center text-[#0A2540] mb-8">
          {activeProposal?.isActive
            ? "Active Proposal Ongoing, cast your vote"
            : "No Active Proposal"}
        </p>

        <div className="bg-white shadow-lg rounded-lg p-6 w-3/4 max-w-4xl">
          <h2 className="text-xl font-bold text-[#0A2540] mb-4">
            Proposal Details
          </h2>
          <div className="space-y-4">
            <p className="text-[#333333]">
              <strong>Name:</strong> {activeProposal.name}
            </p>
            <p className="text-[#333333]">
              <strong>Address:</strong> {activeProposal.address}
            </p>
            <p className="text-[#333333]">
              <strong>Total Votes (Count):</strong> {activeProposal.totalCount}
            </p>
            <p className="text-[#333333]">
              <strong>Total Votes (Votes):</strong> {activeProposal.totalVotes}
            </p>
            <p className="text-[#333333]">
              <strong>Primary Producer:</strong>{" "}
              {activeProposal.primatyProducer ? "Yes" : "No"}
            </p>
          </div>

          {activeProposal.isActive && (
            <div className="mt-8 flex justify-center space-x-4">
              <button
                className="px-8 py-2 bg-[#0A2540] text-white rounded-xl shadow-md hover:bg-[#0A2540]/80 transition"
                onClick={() => vote(true)}
              >
                Upvote
              </button>
              <button
                className="px-8 py-2 bg-[#0A2540] text-white rounded-xl shadow-md hover:bg-[#0A2540]/80 transition"
                onClick={() => vote(false)}
              >
                Downvote
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ActiveProposal;
