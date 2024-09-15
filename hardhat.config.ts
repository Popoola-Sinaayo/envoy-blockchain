import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/8m3QCNN_WrOZo_U6L_Gd5ohnXC2nMRVK",
      accounts: [
        "0x3df8e02a41dc1d8b88aad0d239903636a496a3060d1bce91ce5aa7f118cd59fe",
      ],
    },
  },
};


export default config;