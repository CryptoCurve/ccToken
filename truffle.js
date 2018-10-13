var host = 'localhost';
module.exports = {
    networks: {
        development: {
            host: host,
            port: 8545,
            network_id: "*", // Match any network id
            gas: 4700000,
	    gasPrice: 200e9,
	    from: "0x81C6aA04787baA3f30AE4FFc13AD9dc720A1A282"
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
