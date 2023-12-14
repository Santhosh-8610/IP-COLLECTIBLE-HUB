
const main = async () => {
  const Collectibles = await hre.ethers.getContractFactory("Collectibles");
  const collectibles = await Collectibles.deploy("bru","eth","bru","0x7c05Caf97b2847E56466f779eEB6Cc41Df7F3147");

  await collectibles.deployed();

  console.log( "Transaction deployed to:" ,collectibles.address);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

runMain();