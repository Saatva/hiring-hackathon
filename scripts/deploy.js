const deploy = async () => {
  const [deployer] = await ethers.getSigners();

  console.log(`Deploying contract with the account ${deployer.address}`);

  const contract = await ethers.getContractFactory("Greeter");
  const deployed = await contract.deploy('holi muchachos');

  console.log(`Greeter was deployed at: ${deployed.address}`);
}

deploy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  })