"use client";
import addLotDetails from "@/contractFunctions/addLotDetails";
import React, { useState } from "react";

export const AddLotModal: React.FC<{ cancelModal: () => void }> = ({
  cancelModal,
}) => {
  const [form, setForm] = useState({
    stage: "",
    details: "",
    quantity: 0,
    location: "",
    source: "",
    chainId: "",
  });
  const addLot = async () => {
    try {
      const response = await addLotDetails(
        form.stage,
        form.details,
        form.quantity,
        form.location,
        Date.now(),
        form.source,
        form.chainId
      );
      console.log("response", response);
      if (response) {
        alert("Lot Procurement Added");
        cancelModal();
      } else {
        alert("Error adding lot procurement");
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div
      style={{
        position: "fixed",
        height: "100vh",
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        top: 0,
        left: 0,
        zIndex: 9999,
      }}
    >
      <div
        className="bg-[#FFFFFF] p-8 rounded-xl shadow-lg"
        style={{
          width: "90%",
          maxWidth: "600px",
          padding: "24px",
          backgroundColor: "#FFFFFF",
        }}
      >
        <h2 className="text-2xl font-bold text-[#0A2540] mb-6">
          Add New Lot Procurement
        </h2>
        <div className="my-4">
          <label className="block text-[#0A2540] mb-2">Stage</label>
          <input
            className="border border-[#0A2540] p-3 rounded-lg w-full"
            placeholder="Stage"
            value={form.stage}
            onChange={(e) => setForm({ ...form, stage: e.target.value })}
            style={{
              paddingTop: "5px",
              paddingBottom: "5px",
              paddingLeft: "10px",
            }}
          />
        </div>
        <div className="my-4">
          <label className="block text-[#0A2540] mb-2">Details</label>
          <input
            className="border border-[#0A2540] p-3 rounded-lg w-full"
            placeholder="Details"
            value={form.details}
            onChange={(e) => setForm({ ...form, details: e.target.value })}
            style={{
              paddingTop: "5px",
              paddingBottom: "5px",
              paddingLeft: "10px",
            }}
          />
        </div>
        <div className="my-4">
          <label className="block text-[#0A2540] mb-2">Quantity</label>
          <input
            className="border border-[#0A2540] p-3 rounded-lg w-full"
            placeholder="Quantity"
            type="number"
            value={form.quantity}
            onChange={(e) => {
              if (!isNaN(Number(e.target.value))) {
                setForm({ ...form, quantity: Number(e.target.value) });
              }
            }}
            style={{
              paddingTop: "5px",
              paddingBottom: "5px",
              paddingLeft: "10px",
            }}
          />
        </div>
        <div className="my-4">
          <label className="block text-[#0A2540] mb-2">Location</label>
          <input
            className="border border-[#0A2540] p-3 rounded-lg w-full"
            placeholder="Location"
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            style={{
              paddingTop: "5px",
              paddingBottom: "5px",
              paddingLeft: "10px",
            }}
          />
        </div>
        <div className="my-4">
          <label className="block text-[#0A2540] mb-2">Source</label>
          <input
            className="border border-[#0A2540] p-3 rounded-lg w-full"
            placeholder="Source"
            value={form.source}
            onChange={(e) => setForm({ ...form, source: e.target.value })}
            style={{
              paddingTop: "5px",
              paddingBottom: "5px",
              paddingLeft: "10px",
            }}
          />
        </div>
        <div className="my-4">
          <label className="block text-[#0A2540] mb-2">Chain ID</label>
          <input
            className="border border-[#0A2540] pl-10 rounded-lg w-full"
            placeholder="Chain ID"
            value={form.chainId}
            onChange={(e) => setForm({ ...form, chainId: e.target.value })}
            style={{
              paddingTop: "5px",
              paddingBottom: "5px",
              paddingLeft: "10px",
            }}
          />
        </div>
        <div
          className="flex flex-row justify-between mt-8"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <button
            className="px-6 py-2 w-80 bg-[#0A2540] text-[#FFFFFF] rounded-lg shadow-md hover:bg-[#082D4B]"
            onClick={addLot}
            style={{
              paddingTop: "5px",
              paddingBottom: "5px",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            Add Lot
          </button>
          <button
            className="px-6 py-2 bg-[#E0E0E0] text-[#0A2540] rounded-lg shadow-md hover:bg-[#C4C4C4]"
            onClick={cancelModal}
            style={{
              paddingTop: "5px",
              paddingBottom: "5px",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
