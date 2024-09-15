import { MetaMaskInpageProvider } from "@metamask/providers";
import { Contract, BrowserProvider } from "ethers";
import { ABI } from "@/utils/constant";

const contractAddress = "0xF1aa6c95192fB0aA54cf7C4d6473516F168218c2";

declare global {
  interface Window {
    Ethereum?: MetaMaskInpageProvider;
  }
}

const suggestMember = async (
  address: string,
  actorName: string,
  primaryProducer: string
) => {
  try {
    if (window.ethereum === undefined) {
      throw new Error("MetaMask not found");
    }
    const provider = new BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new Contract(contractAddress, ABI, signer);
    const data = await contract.waitForDeployment();
    console.log("data", data);
    console.log("contract", contract);
    const suggested = await contract.proposeAddress(
      address,
      actorName,
      primaryProducer
    );
    // await suggested.wait();
    return suggested;
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

export default suggestMember;
