require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.20",
  networks: {
    hardhat: {
      chainId: 5777,
    },
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: [
        `0xca76257fd89ad60d9424bb798b8deaf499f629356915e7bd73373481cfaac864`,
      ],
    }

  },
  paths: {
    artifacts: "./src/artifacts",
  }
};