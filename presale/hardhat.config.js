require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()
module.exports = {
  solidity: "0.8.17",
  defaultNetwork:"polygon_mumbai",
  networks:{
    hardhat:{},
    mumbai:{
      url:process.env.PRIVATE_API,
      accounts:[process.env.PRIVATE_KEY]
    }
  }
};