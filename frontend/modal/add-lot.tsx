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
        backgroundColor: "gray",
      }}
    >
      <div
        className="top-[50px] bg-[#FFFFFF] p-10 rounded-xl"
        style={{
          left: "45%",
          transform: "translate(0%, 30%)",
          width: "80%",
          margin: "auto",
        }}
      >
        <div className="" style={{ marginTop: "10px", marginBottom: "10px" }}>
          <p>Stage</p>
          <input
            className="border-black border-2 p-10 py-15 w-full my-5"
            placeholder="Stage"
            style={{ padding: "8px" }}
            value={form.stage}
            onChange={(e) => {
              setForm({ ...form, stage: e.target.value });
            }}
          />
        </div>
        <div
          className="my-5"
          style={{ marginTop: "10px", marginBottom: "10px" }}
        >
          <p>Details</p>
          <input
            className="border-black border-2 p-10 py-15 w-full"
            placeholder="Details"
            style={{ padding: "8px" }}
            value={form.details}
            onChange={(e) => {
              setForm({ ...form, details: e.target.value });
            }}
          />
        </div>
        <div
          className="pb-10"
          style={{ marginTop: "10px", marginBottom: "10px" }}
        >
          <p>Quantity</p>
          <input
            className="border-black border-2 p-10 py-15 w-full"
            style={{ padding: "8px" }}
            placeholder="Quantity"
            value={form.quantity}
            onChange={(e) => {
              if (isNaN(Number(e.target.value))) {
                return;
              }
              setForm({ ...form, quantity: Number(e.target.value) });
            }}
          />
        </div>
        <div
          className="my-5"
          style={{ marginTop: "10px", marginBottom: "10px" }}
        >
          <p>Location</p>
          <input
            className="border-black border-2 p-10 py-15 w-full"
            placeholder="Location"
            style={{ padding: "8px" }}
            value={form.location}
            onChange={(e) => {
              setForm({ ...form, location: e.target.value });
            }}
          />
        </div>
        <div
          className="my-5"
          style={{ marginTop: "10px", marginBottom: "10px" }}
        >
          <p>Source</p>
          <input
            className="border-black border-2 p-10 py-15 w-full"
            placeholder="Source"
            style={{ padding: "8px" }}
            value={form.source}
            onChange={(e) => {
              setForm({ ...form, source: e.target.value });
            }}
          />
        </div>
        <div
          className="my-5"
          style={{ marginTop: "10px", marginBottom: "10px" }}
        >
          <p>Chain ID</p>
          <input
            className="border-black border-2 p-10 py-15 w-full"
            placeholder="Chain ID"
            style={{ padding: "8px" }}
            value={form.chainId}
            onChange={(e) => {
              setForm({ ...form, chainId: e.target.value });
            }}
          />
        </div>
        <div className="flex" style={{ justifyContent: "space-between" }}>
          <button
            className="mt-15 mb-10 px-8 py-[10px] bg-[#0A2540] text-[#FFFFFF] rounded-xl"
            onClick={() => {}}
          >
            Add New Lot Procurement
          </button>
          <button
            className="mt-15 mb-10 px-8 py-[10px] bg-[#0A2540] text-[#FFFFFF] rounded-xl"
            onClick={cancelModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
