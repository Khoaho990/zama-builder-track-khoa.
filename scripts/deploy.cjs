const hre = require('hardhat');

async function main() {
  const EncryptedData = await hre.ethers.getContractFactory('EncryptedData');
  const encryptedData = await EncryptedData.deploy();

  await encryptedData.deployed();
  console.log('EncryptedData deployed to:', encryptedData.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
