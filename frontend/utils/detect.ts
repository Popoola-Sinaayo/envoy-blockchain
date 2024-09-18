/* eslint-disable @typescript-eslint/no-explicit-any */
import detectEthereumProvider from "@metamask/detect-provider";
import { MetaMaskInpageProvider } from "@metamask/providers";

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

async function setup() {
  const provider = await detectEthereumProvider();

  if (provider && provider === window?.ethereum) {
    console.log("MetaMask is available!");
    startApp(provider); // Initialize your dapp with MetaMask.
  } else {
    console.log("Please install MetaMask!");
  }
}

function startApp(provider: any) {
  if (provider !== window?.ethereum) {
    console.error("Do you have multiple wallets installed?");
  }
}

window?.addEventListener("load", setup);

export default setup;
