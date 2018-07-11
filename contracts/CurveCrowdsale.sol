pragma solidity ^0.4.21;

import "./CurveToken.sol";
import "./templates/Crowdsale.sol";
import "./templates/TimedCrowdsale.sol";
import "./templates/MintableToken.sol";
import "./SafeMath.sol";


contract CurveCrowdsale is TimedCrowdsale {
  using SafeMath for uint256;

  constructor(
    uint256 _openingTime,
    uint256 _closingTime,
    uint256 _rate,
    address _wallet,,
    MintableToken _token
  )
    public
    Crowdsale(_rate, _wallet, _token)
    TimedCrowdsale(_openingTime, _closingTime)
  {
  }
}
