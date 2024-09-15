import { MetaMaskInpageProvider } from "@metamask/providers";
import { Contract, BrowserProvider } from "ethers";
import { ABI, CONTRACT_ADDRESS } from "@/utils/constant";

declare global {
  interface Window {
    Ethereum?: MetaMaskInpageProvider;
  }
}

const voteProposal = async (vote: boolean) => {
  try {
    if (window.ethereum === undefined) {
      throw new Error("MetaMask not found");
    }
    const provider = new BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new Contract(CONTRACT_ADDRESS, ABI, signer);
    await contract.waitForDeployment();
    const voteResponse = await contract.vote(vote);
    return voteResponse;
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const errorMessage: any = error;
    // console.log("error", error);
    console.log(
      errorMessage?.message,
      errorMessage?.error,
      errorMessage?.error?.message,
      errorMessage?.data,
      errorMessage?.data?.originalError,
      errorMessage?.originalError
    );
  }
};

export default voteProposal;
