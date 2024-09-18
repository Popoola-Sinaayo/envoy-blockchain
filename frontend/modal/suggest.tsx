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
        <div className="" style={{ marginTop: "10px", marginBottom: "10px" }}>
          <p>Member Address</p>
          <input
            className="p-10 border border-[#0A2540] py-15 w-full my-5 rounded-lg"
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
            className="mt-15 mb-10 px-8 py-[10px] text-[#0A2540] bg-[#FFFFFF] rounded-xl shadow-md hover:bg-[#C4C4C4]"
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
