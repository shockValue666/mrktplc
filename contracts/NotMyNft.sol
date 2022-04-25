//SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NotMyNft is ERC721URIStorage {
    using Counters for Counters.Counter;

    Counters.Counter private tokenIds;

    address contractAddress;

    constructor(address marketplaceAddress) ERC721("Not My NFT", "NMN") {
        contractAddress = marketplaceAddress;
    }

    function createToken(string memory tokenURI) public returns (uint256) {
        tokenIds.increment();
        uint256 newItemId = tokenIds.current();
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        setApprovalForAll(contractAddress, true);
        return newItemId;
    }
}

//JUST COMPILE IT ON REMIX LOL
