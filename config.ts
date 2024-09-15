import dotenv from "dotenv";
dotenv.config();

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

export default config;
