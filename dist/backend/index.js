"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ethers_v6_1 = require("ethers-v6");
const config_1 = __importDefault(require("../config"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
console.log((0, config_1.default)());
const provider = new ethers_v6_1.ethers.AlchemyProvider("sepolia", (0, config_1.default)().apiKey);
const signer = new ethers_v6_1.ethers.Wallet((0, config_1.default)().privateKey, provider);
// const signer = provider.getSigner();
const contractAddress = (0, config_1.default)().contractAddress;
// const abi = [
//   "function set(uint256 value) public",
//   "function get() public view returns (uint256)",
// ];
const abi = [
    {
        inputs: [],
        name: "get",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "set",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const simpleStorage = new ethers_v6_1.ethers.Contract(contractAddress, abi, signer);
app.post("/set", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { value } = req.body;
    const tx = yield simpleStorage.set(value);
    yield tx.wait();
    res.send(`Value set to ${value}`);
}));
app.get("/get", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const value = yield simpleStorage.get();
    res.send(`Stored value is ${value}`);
}));
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
