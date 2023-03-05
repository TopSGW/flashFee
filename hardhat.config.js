require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
require('dotenv').config();
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
      console.log(account.address);
  }
});

const settings = {
  optimizer: {
    enabled: true,
    runs: 200,
  } 
};

module.exports = {
  solidity: "0.8.18",
  networks: {
    bsc: {
      url: "https://bsc-dataseed1.binance.org",
      accounts: [`${process.env.PRIVATE_KEY}`]
    },
    bsc_testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      accounts: [`${process.env.PRIVATE_KEY}`]
    },
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/zT6MSYFVB-ojEc0-BbokQELJKOl0YxdS",
      accounts: [`${process.env.PRIVATE_KEY}`]
    },
    local: {
      url: "http://127.0.0.1:8545",
      accounts: [`${process.env.PRIVATE_KEY}`]
    },
    goerli: {
      url: "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      accounts: [`${process.env.PRIVATE_KEY}`]
    },
    matic_testnet: {
      url: "https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d6bbf05e78",
      accounts: [`${process.env.PRIVATE_KEY}`]
    },

  },
  solidity: {
    compilers: [
      { version: '0.5.0', settings },
      { version: '0.6.12', settings },
      { version: '0.7.6', settings },
      { version: '0.8.3', settings },
      { version: '0.8.4', settings },
      {
        version: '0.8.11', settings
      },
      {
        version: '0.8.13', settings
      },
      {
        version: '0.8.15', settings
      },
      {
        version: '0.8.17', settings
      },
      {
        version: '0.8.18', settings
      }
    ],

  },
  etherscan: {
    // apiKey: "NXNFBG2YWQ585ZVT5V156Q2UF6MQY9VEQH" //polygon
    apiKey: `${process.env.APIKEY}` //bscscan
  }
};
