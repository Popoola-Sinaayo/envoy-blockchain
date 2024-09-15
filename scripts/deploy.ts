import { ethers } from "hardhat";

async function main() {
    // const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
    // const simpleStorage = await SimpleStorage.deploy();
    // await simpleStorage.deployed();

    // console.log("SimpleStorage deployed to:", simpleStorage.address);
    const Consensus = await ethers.getContractFactory("SupplyChainContract");
    const consensus = await Consensus.deploy();
    await consensus.deployed();

    console.log("SimpleStorage deployed to:", consensus.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
