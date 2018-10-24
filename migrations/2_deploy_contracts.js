var CurveToken = artifacts.require("CurveToken.sol");
var CurveCrowdsale = artifacts.require("./CurveCrowdsale.sol");

module.exports = function(deployer, network, accounts) {
  const startTime = 1540911600
  const endTime = 1543590000
  const rate = new web3.BigNumber(5);
  const userMin = new web3.BigNumber(web3.toWei(25, "ether"));
  const userCap = new web3.BigNumber(web3.toWei(600, "ether"));
  const totalCap = new web3.BigNumber(web3.toWei(6000000, "ether"));
  const tokenMintCap = new web3.BigNumber(web3.toWei(415000000, "ether"));
  const wallet = "0x3bca0aca21916cc8a70c8b7b841e9c210fed06d8"

  return deployer
    //.then(() => {
    //  return deployer.deploy(CurveToken, tokenMintCap);
    //})
    .then(() => {
      return deployer.deploy(CurveCrowdsale,
        startTime,
        endTime,
        rate,
        wallet, //The beneficiary address
    	userMin,
    	userCap,
    	totalCap,
        "0x4fe17956b20bec33e8e69b8baf82c60b37c1c8c5"
      )
    })
};
