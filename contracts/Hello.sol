pragma solidity ^0.4.17;
 
contract Hello {
 
  function say() public pure returns (string) {
    return "Hello world";
  }
 
  function print(string name) public pure returns (string) {
    return name;
  }
}
 