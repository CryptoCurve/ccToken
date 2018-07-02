pragma solidity ^0.4.21;


import "./SafeMath.sol";

import "./templates/WRC20Basic.sol";
import "./templates/BasicToken.sol";
import "./templates/Ownable.sol";
import "./templates/Pausable.sol";
import "./templates/BurnableToken.sol";
import "./templates/MintableToken.sol";
import "./templates/StakedToken.sol";
import "./templates/CrossChainToken.sol";
import "./templates/NotifyContract.sol";

/**
 * @title CurveToken
 * Ownable
 * Pausable
 * Burnable
 * Mintable
 * Stakeable
 * CrossChainable
 */
contract CurveToken is WRC20Basic, BasicToken, Ownable, Pausable, BurnableToken, MintableToken, StakedToken, CrossChainToken {
    using SafeMath for uint256;

    string public constant name = "Curve";
    string public constant symbol = "CRV";
    uint8 public constant decimals = 18;

    // Lightweight implementation of ERC820 for basic third party contract interaction
    function transferAndNotify(address _to, uint256 _amount, bytes _data) public returns (bool) {
        require(super.transfer(_to, _amount));
        require(NotifyContract(_to).notify(msg.sender, _amount, _data));
    }
}
