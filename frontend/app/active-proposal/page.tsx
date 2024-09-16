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
      <div className="relative h-screen bg-[#F5F5F5]">
        <h1 className="text-2xl font-bold text-center pt-10 text-[#333333]">
          Envoy Traceability System
        </h1>
        <p className="text-center text-[#333333]">
          {activeProposal?.isActive
            ? "Active Proposal Ongoing, cast your vote"
            : "No Active Proposal"}
        </p>

        <div className="w-full justify-center items-center absolute top-2/4">
          <p className="text-center">Name: {activeProposal.name}</p>
          <p className="text-center">Address: {activeProposal.address}</p>
          <p className="text-center">
            Total Votes: {activeProposal.totalCount}
          </p>
          <p className="text-center">
            Total Votes: {activeProposal.totalVotes}
          </p>
          <p className="text-center">
            Primary Producer: {activeProposal.primatyProducer}
          </p>
          {activeProposal.isActive && (
            <div className="text-center mt-10">
              <button
                className="mx-10 px-10 py-[15px] bg-[#0A2540] text-[#FFFFFF] rounded-xl"
                onClick={() => {
                  vote(true);
                  // router.push("/access-interface");
                }}
              >
                Upvote
              </button>
              <button
                className="mx-10 px-10 py-[15px] bg-[#0A2540] text-[#FFFFFF] rounded-xl"
                onClick={() => {
                  vote(false);
                  // router.push("/access-interface");
                }}
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
