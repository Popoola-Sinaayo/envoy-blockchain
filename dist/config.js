"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = () => {
    if (!process.env.API_KEY) {
        throw new Error("Please set your API_KEY in a .env file");
    }
    if (!process.env.PRIVATE_KEY) {
        throw new Error("Please set your PRIVATE_KEY in a .env file");
    }
    if (!process.env.CONTRACT_ADDRESS) {
        throw new Error("Please set your CONTRACT_ADDRESS in a .env file");
    }
    return {
        apiKey: process.env.API_KEY,
        privateKey: process.env.PRIVATE_KEY,
        contractAddress: process.env.CONTRACT_ADDRESS,
    };
};
exports.default = config;
