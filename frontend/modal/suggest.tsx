import suggestMember from "@/contractFunctions/suggestMember";
import React, { useState } from "react";

const SuggestMember: React.FC<{ cancelModal: () => void }> = ({
  cancelModal,
}) => {
  const [form, setForm] = useState({
    address: "",
  });
  const handleSuggestMember = async () => {
    try {
      const response = await suggestMember(form.address, "Popoola", "true");
      console.log("response", response);
      if (response) {
        alert("Member Suggested");
        cancelModal();
      } else {
        alert("Error suggesting member");
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
          transform: "translate(0%, 50%)",
          width: "80%",
          margin: "auto",
        }}
      >
        <div className="" style={{ marginTop: "10px", marginBottom: "10px" }}>
          <p>Member Address</p>
          <input
            className="border-black border-2 p-10 py-15 w-full my-5"
            placeholder="Enter Member Address"
            style={{ padding: "8px" }}
            value={form.address}
            onChange={(e) => {
              setForm({ ...form, address: e.target.value });
            }}
          />
        </div>

        <div className="flex" style={{ justifyContent: "space-between" }}>
          <button
            className="mt-15 mb-10 px-8 py-[10px] bg-[#0A2540] text-[#FFFFFF] rounded-xl"
            onClick={() => {
              handleSuggestMember();
            }}
          >
            Suggest Member
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

export default SuggestMember;
