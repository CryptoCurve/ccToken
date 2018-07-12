
var CurveCrowdsale = artifacts.require("CurveCrowdsale.sol");
var CurveToken = artifacts.require("CurveToken.sol");

const c = {
  _openingTime: '1531389600', //2018-07-12T10:00:00
  _closingTime: '1531390200', //2018-07-12T10:10:00
  _rate: '1', //number of token unites the buyer gets per wei
  _wallet: '0x81600316b99c8e77c106F93b28b93e751d9BBFe5', //wallet that the funds will be deposited to
  _token: '' //address of the token being sold (acquired from the deployed token contract)
}

module.exports = function(deployer) {
  deployer.deploy(CurveToken)
  .then(() => {
    deployer.deploy(CurveCrowdsale,
      c._openingTime,
      c._closingTime,
      c._rate,
      c._wallet,
      CurveToken.address)
      .then(() => {
        console.log("OK")
      }).catch(errOut('MIGRATE: error deploying CurveCrowdsale'));;
  }).catch(errOut('MIGRATE: error deploying CurveToken'));
};
