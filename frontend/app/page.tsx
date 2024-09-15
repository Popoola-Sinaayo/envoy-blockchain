"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="relative h-screen bg-[#F5F5F5]">
      <h1 className="text-2xl font-bold text-center pt-10 text-[#333333]">
        Welcome To Envoy Traceability System
      </h1>
      <p className="text-center text-[#333333]">
        Monitor the movement of products in blockchain
      </p>
      <div className="w-full flex justify-center items-center absolute top-2/4">
        <button className="mx-10 px-10 py-[15px] bg-[#0A2540] text-[#FFFFFF] rounded-xl">
          Track a Product With ID
        </button>
        <button
          className="mx-10 px-10 py-[15px] bg-[#0A2540] text-[#FFFFFF] rounded-xl"
          onClick={() => {
            router.push("/register-wallet");
          }}
        >
          Register as an Actor in Supply Chain
        </button>
      </div>
    </div>
  );
}
