// contracts/EncryptedData.sol
pragma solidity ^0.8.0;

contract EncryptedData {
    uint256 private encryptedValue;

    function setEncryptedValue(uint256 _encryptedValue) public {
        encryptedValue = _encryptedValue;
    }

    function getEncryptedValue() public view returns (uint256) {
        return encryptedValue;
    }
}
