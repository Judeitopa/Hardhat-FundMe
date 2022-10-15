require("@nomiclabs/hardhat-waffle")
require("hardhat-gas-reporter")
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config()
require("solidity-coverage")
require("hardhat-deploy")

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const GOERLI_API_KEY = process.env.GOERLI_API_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.17",
    solidity: {
        compilers: [
            { version: "0.8.8" },
            { version: "0.6.6" },
            { version: "0.6.0" },
        ],
    },
    defaultNetwork: "hardhat",
    solhint: {
        enabled: true,
        extends: "recommended",
    },

    namedAccounts: {
        deployer: {
            default: 0, // here this will by default take the first account as deployer
        },
    },

    etherscan: {
        apiKey: {
            goerli: ETHERSCAN_API_KEY,
        },
    },

    networks: {
        goerli: {
            url: GOERLI_API_KEY,
            accounts: [PRIVATE_KEY],
            chainId: 5,
            blockConfirmations: 6, //wait 6 blocks confirmations before verification
        },
        localhost: {
            url: "http://127.0.0.1:8545/",
            chainId: 31337,
        },
    },
}
