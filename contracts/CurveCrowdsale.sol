pragma solidity ^0.4.21;

import "./CurveToken.sol";
import './zeppelin-solidity/crowdsale/emission/MintedCrowdsale.sol';
import './zeppelin-solidity/crowdsale/validation/TimedCrowdsale.sol';
import './zeppelin-solidity/crowdsale/validation/WhitelistedCrowdsale.sol';
import './zeppelin-solidity/ownership/Ownable.sol';


contract CurveCrowdsale is TimedCrowdsale, MintedCrowdsale, WhitelistedCrowdsale {

    constructor(
        uint256 _openingTime,
        uint256 _closingTime,
        uint256 _rate,
        address _wallet,
        MintableToken _token
    )
    public
    Crowdsale(_rate, _wallet, _token)
    TimedCrowdsale(_openingTime, _closingTime)
    WhitelistedCrowdsale() {

    }
}
