var Greedy = artifacts.require("Greedy");
var GreedyHeartCalcLong = artifacts.require("GreedyHeartCalcLong");
var SafeMath = artifacts.require("SafeMath");
var Owned = artifacts.require("Owned");

module.exports = function(deployer) {
  deployer.deploy(Greedy);
  deployer.deploy(GreedyHeartCalcLong);
  deployer.deploy(SafeMath);
  deployer.deploy(Owned);
};
