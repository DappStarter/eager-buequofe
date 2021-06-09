require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'grace arctic sun tone stomach deny noise concert hunt creek equal genius'; 
let testAccounts = [
"0xe0ff2056ddc80f95e2b984f81e92e29ec8000554d2e777441c23746d8ce776ba",
"0x913967541a5822b304f17be65b1ffa939880f35dbd948bf3c638ec9a65c0481a",
"0xaf819a6fa90a0ae9be8af3fd5e9e984947d0158ec234a70b3d43741547062c3b",
"0x1936d888303c95d86d2765fe72f2e649069f49e270d742dbab06cff17737a22e",
"0x0da770ecbc3a3ac34121ccd3a70eeac143fc88ab1527beaf6b449263c53264ab",
"0x03f582fd8f9dbd398d772f7c4449c55a5fdac69dfce2ef8867cc8edba28c7d37",
"0x14d252680ed6b41fe45087ad6bca8fb1b5f1bbf0e4b1fd30e5b3cf1224d06a2a",
"0x9249a42dc709c2cc147fe3a134a001a2051c0fd718e6cf7b7e14ce70de0d1c3a",
"0x27d3dff96c53567e07ee8f34c273934a2961d813147d3909c33a08c7202d0624",
"0xe7f17378b36ae7a9d8549029ab22f493e0e9c2dff66dab7386460a1b78a89e87"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


