const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Market", function () {
  it("Should create and execute market sales", async function () {
      const Market = await ethers.getContractFactory("Market");
      const market = await Market.deploy();
      await market.deployed();
      const marketAddress = market.address;
      console.log('marketContractAddress: ',marketAddress)


      const NMNFT = await ethers.getContractFactory("NotMyNft");
      const nft = await NMNFT.deploy(marketAddress);
      await nft.deployed();
      const nftContractAddress = nft.address
      console.log('nft contract address: ',nftContractAddress)


      let listingPrice = await market.getListingPrice();
      listingPrice = listingPrice.toString();
      console.log('listingPrice: ',listingPrice)

      const auctionPrice = ethers.utils.parseUnits('100','ether');

      await nft.createToken("https://843297.smushcdn.com/1763279/wp-content/uploads/2020/02/recessed-maxilla-vs-prominent-maxilla.png?lossy=1&strip=1&webp=1")
      await nft.createToken("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvW7FwUQGzBKn3KGgg4mA32bf4TiBFFwsg7A&usqp=CAU");

      await market.createMarketItem(nftContractAddress,1,auctionPrice,{value:listingPrice})
      await market.createMarketItem(nftContractAddress,2,auctionPrice,{value:listingPrice})

      const [_,buyerAddress,thirdAddress] = await ethers.getSigners(); //the _ is the seller?

      await market.connect(buyerAddress).createMarketSale(nftContractAddress,1,{value:auctionPrice});

    const items = await market.fetchMarketItems();
    console.log('itmes: ',items);
    


  });
});
