"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
const config = {
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
exports.default = config;
