require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/ESe2kGiqczfNoBXZAStS_zrGfSghfx9L",
      accounts: [
        `0x${"9b0538fe3b54269667e462e3569258e231cf6aec975703732217eb97eb0d07bd"}`,
      ],
    },
  },
};
