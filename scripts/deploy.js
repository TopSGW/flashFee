// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
require('dotenv').config();
async function main() {
  try{
    const Flashdex = await hre.ethers.getContractFactory("FlashDexFeeController");
    const flash = await Flashdex.deploy(process.env.FeeAddress, process.env.FeeEnabled);
  
    await flash.deployed();
    console.log("contract deployed to:", flash.address);  
  }catch(err){
    console.log(err);
  }

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
