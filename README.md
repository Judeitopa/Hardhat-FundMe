# Sample Contract Using hardhat

# Contracts
contains a ```mocks``` folder and a ```FundMe``` contract written in sol. 
```mocks```are a simulation of our real codes. They are primarily used for unit testing

# deploy
contains ```00-deploy-mocks.js``` for deploying our mock code and ```01-deploy-fund-me.js``` for deploying and verifying FundMe contract.

```NOTE```: The two scripts above both uses hardhat-deploy plugin

# scripts
contains scripts for interacting with our contracts

# test
```unit```testing is done locally
```staging```test is done on a real testnet

# utils
contains verify code

# hardhat.config.js
contains configurations used in the code

# helper-hardhat-config.js
helps us work with ETH/USD priceFeeds

# package.json
contains installed packages and dependencies

# prettierrc
formatting!