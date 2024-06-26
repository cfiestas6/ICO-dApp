require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const POCKET_API_URL = process.env.POCKET_API_URL;

const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: POCKET_API_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
