import { MetaMaskInpageProvider } from "@metamask/providers";
import { Contract, BrowserProvider } from "ethers";
import { ABI, CONTRACT_ADDRESS } from "@/utils/constant";

declare global {
  interface Window {
    Ethereum?: MetaMaskInpageProvider;
  }
}

const getSingleLotDetailsChainId = async (index: number) => {
  if (window?.ethereum === undefined) {
    throw new Error("MetaMask not found");
  }
  const provider = new BrowserProvider(window?.ethereum);
  const signer = await provider.getSigner();
  const contract = new Contract(CONTRACT_ADDRESS, ABI, signer);
  //   const data = await contract.waitForDeployment();
  const currentProposal = await contract.getSingleLotWithChainId(index);
  return currentProposal;
};

export default getSingleLotDetailsChainId;
