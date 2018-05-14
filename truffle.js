module.exports = {
  networks: {
    development: {
      host: "labqnw-dns-reg1.southeastasia.cloudapp.azure.com",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
};

/* http://truffleframework.com/docs/advanced/configuration#resolving-naming-conflicts-on-windows
 * user powershell to run truffle commands
 */