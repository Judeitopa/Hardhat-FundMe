const { networkConfig, developmentChains } = require("../helper-hardhat-config")
const { network } = require("hardhat")
const { verify } = require("../utils/verify")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    //this checks the chainId and knows which address to use
    //which allows us to deploy literally anywhere, on a testnet or local network
    let ethUsdPriceFeedAddress
    if (developmentChains.includes(network.name)) {
        const ethUsdAggregator = await deployments.get("MockV3Aggregator")
        ethUsdPriceFeedAddress = ethUsdAggregator.address
    } /*if not on a dev chain*/ else {
        ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"]
    }
    // const ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"]
    const args = [ethUsdPriceFeedAddress] //our list of args
    const fundMe = await deploy("FundMe", {
        //deploying our contract calling the deploy function
        from: deployer,
        args: args,
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1, //wait 1 block if none is given from the config
    })

    //this is a bit of code for verification but not on a local network

    if (
        !developmentChains.includes(network.name) &&
        process.env.ETHERSCAN_API_KEY
    ) {
        //since we do not want verification to happen on a local network

        await verify(fundMe.address, args)
    }

    log("----------------------------------")
}

module.exports.tags = ["all", "fundme"]
