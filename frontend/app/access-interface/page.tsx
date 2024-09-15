"use client";
import getIfAddressIsMember from "@/contractFunctions/getIfMember";
import getNumberOfLots from "@/contractFunctions/getNumberOfLots";
import { AddLotModal } from "@/modal/add-lot";
import SuggestMember from "@/modal/suggest";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const AccessInterface = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [showSuggestModal, setShowSuggestModal] = useState(false);
  const [member, setMember] = useState(false);

  const copyWalletAddress = async () => {
    const accounts = await window.ethereum?.request({
      method: "eth_requestAccounts",
    });

    console.log("accounts", accounts);
    if (accounts !== null && accounts !== undefined) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const accountRead: any = accounts;
      //   setAccount(accountRead[0]);
      navigator.clipboard.writeText(accountRead[0]);
      alert("Address copied to clipboard");
    }
  };

  useEffect(() => {
    if (window.ethereum === undefined) {
      alert("MetaMask not found");
    }
    const getDetails = async () => {
      const result = await getIfAddressIsMember();
      console.log("result", result);
      const numberofLotResponse = await getNumberOfLots();
      console.log("numberofLotResponse", numberofLotResponse);
      
      setMember(result);
    };
    getDetails();
  }, []);

  return (
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
      <h1 className="text-2xl font-bold text-center pt-10 text-[#333333]">
        Envoy Traceability System
      </h1>
      <p className="text-center text-[#333333]">
        {member
          ? "You're a member of the Envoy Traceability System"
          : "You're not a member of the Envoy Traceability System"}
      </p>
      <div className="text-center mt-5 flex-col">
        <button
          className="mx-10 px-8 py-[10px] bg-[#0A2540] text-[#FFFFFF] rounded-xl"
          onClick={() => {
            copyWalletAddress();
          }}
        >
          Copy addresss
        </button>

        {member && (
          <button
            className="mt-15 mb-10 px-8 py-[10px] bg-[#0A2540] text-[#FFFFFF] rounded-xl"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Add New Lot Procurement
          </button>
        )}

        {member && (
          <button
            className="mt-15 mb-10 mx-10 px-8 py-[10px] bg-[#0A2540] text-[#FFFFFF] rounded-xl"
            onClick={() => {
              setShowSuggestModal(true);
            }}
          >
            Suggest New Member
          </button>
        )}

        {member && (
          <button
            className="mt-15 mb-10 mx-5 px-8 py-[10px] bg-[#0A2540] text-[#FFFFFF] rounded-xl"
            onClick={() => {
              router.push("/active-proposal");
            }}
          >
            View Active Proposal
          </button>
        )}

        {member && (
          <button
            className="mt-15 mb-10 mx-5 px-8 py-[10px] bg-[#0A2540] text-[#FFFFFF] rounded-xl"
            onClick={() => {
              router.push("/available-address");
            }}
          >
            View Members Address
          </button>
        )}
      </div>

      <div className="text-center mt-10">
        <p>Lot 1, ChainId, Address</p>
        <p>Lot 1, ChainId, Address</p>
        <p>Lot 1, ChainId, Address</p>
        <p>Lot 1, ChainId, Address</p>
        <p>Lot 1, ChainId, Address</p>
        <p>Lot 1, ChainId, Address</p>
        <p>Lot 1, ChainId, Address</p>
        <p>Lot 1, ChainId, Address</p>
        <p>Lot 1, ChainId, Address</p>
        <p>Lot 1, ChainId, Address</p>
        <p>Lot 1, ChainId, Address</p>
        <p>Lot 1, ChainId, Address</p>
        <p>Lot 1, ChainId, Address</p>
        <p>Lot 1, ChainId, Address</p>
        <p>Lot 1, ChainId, Address</p>
        <p>Lot 1, ChainId, Address</p>
        <p>Lot 1, ChainId, Address</p>
        <p>Lot 1, ChainId, Address</p>
        <p>Lot 1, ChainId, Address</p>
        <p>Lot 1, ChainId, Address</p>
        <p>Lot 1, ChainId, Address</p>
        <p>Lot 1, ChainId, Address</p>
        <p>Lot 1, ChainId, Address</p>
        <p>Lot 1, ChainId, Address</p>
        <p>Lot 1, ChainId, Address</p>
        <p>Lot 1, ChainId, Address</p>
        <p>Lot 1, ChainId, Address</p>
        <p>Lot 1, ChainId, Address</p>
        <p>Lot 1, ChainId, Address</p>
        <p>Lot 1, ChainId, Address</p>
        <p>Lot 1, ChainId, Address</p>
        <p>Lot 1, ChainId, Address</p>
        <p>Lot 1, ChainId, Address</p>
        <p>Lot 1, ChainId, Address</p>
        <p>Lot 1, ChainId, Address</p>
        <p>Lot 1, ChainId, Address</p>
        <p>Lot 1, ChainId, Address</p>
        <p>Lot 1, ChainId, Address</p>
        <p>Lot 1, ChainId, Address</p>
        <p>Lot 1, ChainId, Address</p>
        <p>Lot 1, ChainId, Address</p>
      </div>
    </div>
  );
};

export default AccessInterface;
