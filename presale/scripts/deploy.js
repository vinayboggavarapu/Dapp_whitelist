const {ethers} = require("hardhat");

async function main() {
  const mycontract=await ethers.getContractFactory("nft")//wait until this promise is returned then assign
  const nftcontract=await mycontract.deploy(15); //15 is the constructor argument being passsed
  await nftcontract.deployed();
  console.log("Whitelist contract address",nftcontract.address);
}
//Async function will deal the state of the promise if its executed returns a object else returns an error
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
