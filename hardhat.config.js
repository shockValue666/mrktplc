require("@nomiclabs/hardhat-waffle");
require('dotenv').config();




// module.exports = {
//   solidity: "0.8.4",
//   defaultNetwork: "mumbai",
//   networks: {
//     // hardhat: {
//     //   chainId:1337
//     // },
//     // matic: {
//     //   url: "https://rpc-mumbai.maticvigil.com",
//     //   accounts: [process.env.PRIVATE_KEY]
//     // },
//     mumbai:{
//       url:"https://rpc-mumbai.matic.today",
//       accounts:["0x1765042ffdcac241a0df6c04641d8c86fcc788302797993899f61acfb0115d16"]
//     },
//     rinkeby:{
//       url:process.env.REACT_APP_RINKEBY_RPC_URL,
//       accounts:[process.env.REACT_APP_PRIVATE_KEY]
//     },
//   },
//   etherscan: {
//     apiKey: process.env.POLYGONSCAN_API_KEY
//   },
// };

module.exports = {
  solidity: "0.8.4",
  networks:{
    hardhat:{
      chainId:1337
    },
    mumbai:{
      url:"https://rpc-mumbai.matic.today",
      account:[process.env.REACT_APP_PRIVATE_KEY]
    },
    mainnet:{
      url:"https://rpc-mumbai.maticvigil.com",
      account:[process.env.REACT_APP_PRIVATE_KEY]
    }
  }
}