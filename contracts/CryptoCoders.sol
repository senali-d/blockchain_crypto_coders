pragma solidity ^0.8.0;

import "../client/node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract CryptoCoders is ERC721 {
  constructor() ERC721("CryptoCoders", "CCS") {
  }
}