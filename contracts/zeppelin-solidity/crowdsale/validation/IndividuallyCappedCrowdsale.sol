pragma solidity ^0.4.23;

import "../../math/SafeMath.sol";
import "../Crowdsale.sol";
import "../../ownership/Ownable.sol";


/**
 * @title IndividuallyCappedCrowdsale
 * @dev Crowdsale with per-user caps.
 */
contract IndividuallyCappedCrowdsale is Crowdsale, Ownable {
  using SafeMath for uint256;

  mapping(address => uint256) public contributions;
  uint256 public userCap;

  constructor(uint256 _userCap) public {
    userCap = _userCap;
  }
  
  /**
   * @dev Sets user maximum contribution.
   * @param _cap Wei limit for individual contribution
   */
  function setUserCap(uint256 _cap) external onlyOwner {
    userCap = _cap;
  }

  /**
   * @dev Returns the amount contributed so far by a sepecific user.
   * @param _beneficiary Address of contributor
   * @return User contribution so far
   */
  function getUserContribution(address _beneficiary)
    public view returns (uint256)
  {
    return contributions[_beneficiary];
  }

  /**
   * @dev Extend parent behavior requiring purchase to respect the user's funding cap.
   * @param _beneficiary Token purchaser
   * @param _weiAmount Amount of wei contributed
   */
  function _preValidatePurchase(
    address _beneficiary,
    uint256 _weiAmount
  )
    internal
  {
    super._preValidatePurchase(_beneficiary, _weiAmount);
    if (userCap > 0) {
      require(contributions[_beneficiary].add(_weiAmount) <= userCap);
    }
  }

  /**
   * @dev Extend parent behavior to update user contributions
   * @param _beneficiary Token purchaser
   * @param _weiAmount Amount of wei contributed
   */
  function _updatePurchasingState(
    address _beneficiary,
    uint256 _weiAmount
  )
    internal
  {
    super._updatePurchasingState(_beneficiary, _weiAmount);
    contributions[_beneficiary] = contributions[_beneficiary].add(_weiAmount);
  }

}
