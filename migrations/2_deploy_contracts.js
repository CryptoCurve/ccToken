var CurveToken = artifacts.require("CurveToken.sol");
var CurveCrowdsale = artifacts.require("./CurveCrowdsale.sol");

module.exports = function(deployer, network, accounts) {
  const startTime = Math.round((new Date(Date.now() + 50000).getTime())/1000); // 5 seconds from now
  //const endTime = Math.round((new Date(Date.now() + 10000).getTime())/1000); // 10 seconds from now
  const endTime = Math.round((new Date().getTime() + (86400000 * 20))/1000); // Today + 20 days
  const rate = new web3.BigNumber(1000);
  const userCap = new web3.BigNumber(web3.toWei(2, "ether"));
  const totalCap = new web3.BigNumber(web3.toWei(10, "ether"));
  const wallet = accounts[2];

  return deployer
    //.then(() => {
    //  return deployer.deploy(CurveToken);
    //})
    .then(() => {
      return deployer.deploy(CurveCrowdsale,
        startTime,
        endTime,
        rate,
        wallet, // Replace this wallet address with the last one (10th account) from Ganache UI. This will be treated as the beneficiary address. 2000000000000000000, // 2 ETH 500000000000000000000 // 500 ETH
        userCap,
	totalCap,
        "0x5aa57b5dcb78725b3c0b6838994a674b34a85063"
      )
    })
};
