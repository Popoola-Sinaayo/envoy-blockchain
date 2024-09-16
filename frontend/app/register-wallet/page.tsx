/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from "react";
// import { ethers } from "ethers";
import { MetaMaskInpageProvider } from "@metamask/providers";
import setup from "../../utils/detect";
import { useRouter } from "next/navigation";

declare global {
  interface Window {
    Ethereum?: MetaMaskInpageProvider;
  }
}

const RegisterWallet = () => {
  const router = useRouter();
  const [account, setAccount] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");
  // const [defaultAccount, setDefaultAccount] = useState("");
  // const [userBalance, setUserBalance] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  // const getuserBalance = async (address: string) => {
  //   const provider = new ethers.BrowserProvider(window.Ethereum!);
  //   const balance = await provider.getBalance(address, "latest");
  //   return balance;
  // };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const accountChangedHandler = async (newAccount: any) => {
  //   const address = await newAccount.getAddress();
  //   setDefaultAccount(address);
  //   const balance = await newAccount.getBalance();
  //   setUserBalance(ethers.formatEther(balance));
  //   await getuserBalance(address);
  // };
  const connectwalletHandler = async () => {
    await setup();
    const accounts = await window.ethereum?.request({
      method: "eth_requestAccounts",
    });

    console.log("accounts", accounts);
    if (account !== null && accounts !== undefined) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const accountRead: any = accounts;
      setAccount(accountRead[0]);
    }

    // if (window.ethereum) {
    //   const provider = new ethers.BrowserProvider(window.Ethereum!);
    //   provider.send("eth_requestAccounts", []).then(async () => {
    //     await accountChangedHandler(provider.getSigner());
    //   });
    // } else {
    //   setErrorMessage("Please Install MetaMask!!!");
    // }
  };
  // console.log("defaultAccount", defaultAccount);
  // console.log("userBalance", userBalance);
  // console.log("errorMessage", errorMessage);
  return (
    <div className="relative h-screen bg-[#F5F5F5]">
      <h1 className="text-2xl font-bold text-center pt-10 text-[#333333]">
        Envoy Traceability System
      </h1>
      <p className="text-center text-[#333333]">
        Connect your wallet to start inputing data
      </p>

      {!account ? (
        <div className="w-full flex justify-center items-center absolute top-2/4">
          <button
            className="mx-10 px-10 py-[15px] bg-[#0A2540] text-[#FFFFFF] rounded-xl"
            onClick={() => {
              connectwalletHandler();
            }}
          >
            Connect Wallet
          </button>
        </div>
      ) : (
        <div className="w-full flex justify-center items-center absolute top-2/4">
          <div>
            <button
              className="mx-10 px-10 py-[15px] bg-[#0A2540] text-[#FFFFFF] rounded-xl"
              onClick={() => {
                router.push("/access-interface");
              }}
            >
              Access Interface
            </button>
            <p className="mx-10 text-center mt-5">Wallet Connected!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterWallet;
