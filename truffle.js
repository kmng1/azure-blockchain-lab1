module.exports = {
  networks: {
    development: {
      host: "labqnw-dns-reg1.southeastasia.cloudapp.azure.com",
      port: 8545,
      gas: 5000000,  // 4712388- solves Exceeds block gas limit, but got Contract transaction couldn't be found after 50 blocks
                     // https://github.com/trufflesuite/truffle/issues/677
      network_id: "*" // Match any network id
    }
  }
};

/* http://truffleframework.com/docs/advanced/configuration#resolving-naming-conflicts-on-windows
 * user powershell to run truffle commands
 */