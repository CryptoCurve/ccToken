var host = 'localhost';
module.exports = {
    networks: {
        development: {
            host: host,
            port: 8545,
            network_id: "*", // Match any network id
            gas: 4700000,
	    gasPrice: 200e9
	},
        test: {
            host: host,
            port: 8545,
            network_id: "*", // Match any network id
            gas: 4800000,
        }
    },
    mocha: {
        useColors:true
    },
    solc: {
        optimizer: {enable: true, runs: 200}
    }

};
