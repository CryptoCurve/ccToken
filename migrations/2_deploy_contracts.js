
var CurveCrowdsale = artifacts.require("CurveCrowdsale");
var CurveToken = artifacts.require("CurveToken.sol");

const c = {
  _openingTime: '',
  _closingTime: '',
  _rate: '',
  _wallet: '',
  _token: ''
}

module.exports = function(deployer) {
  deployer.deploy(CurveToken)
  .then(() => {
    deployer.deploy(CurveCrowdsale,
      c._openingTime,
      c._closingTime,
      c._rate,
      c._wallet,
      CurveToken)
      .then(() => {
        console.log("OK")
      }).catch(errOut('MIGRATE: error deploying CurveCrowdsale'));;
  }).catch(errOut('MIGRATE: error deploying CurveToken'));
};
