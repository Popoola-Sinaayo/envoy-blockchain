import { MetaMaskInpageProvider } from "@metamask/providers";
import { Contract, BrowserProvider } from "ethers";
import { ABI } from "@/utils/constant";

const contractAddress = "0xF1aa6c95192fB0aA54cf7C4d6473516F168218c2";

declare global {
  interface Window {
    Ethereum?: MetaMaskInpageProvider;
  }
}

const getCurrentProposal = async () => {
  if (window.ethereum === undefined) {
    throw new Error("MetaMask not found");
  }
  const provider = new BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const contract = new Contract(contractAddress, ABI, signer);
//   const data = await contract.waitForDeployment();
  const currentProposal = await contract.currentProposal();
  return currentProposal;
};

export default getCurrentProposal;
