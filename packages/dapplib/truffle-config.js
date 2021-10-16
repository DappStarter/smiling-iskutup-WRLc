require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note place hope install photo foster genuine'; 
let testAccounts = [
"0x46e9cd2891d563d6fdb3aeee5fe2395e10b8c243e7c78a9f5241680576d1d26b",
"0x10c6b4c5f00085bba53d9d58eee52178fc56d71e1c0cb5c63b057fb90792472b",
"0xcf72742615ecff7bb4c3f4721aeaef380e64d2c61824947093a13ca2b471bc4c",
"0xeeb8bf1e87cdb2b7640598b7ae4196184a6595c32761f7035593d7847df19d6f",
"0x178486b4877dc4d95cf522adfb11404f363b89c4d9577191405110871338bce8",
"0xaa5c18ce185cb46a6b76c52b23015ca0d28c91de45999e385a3ff0cd24996fc4",
"0x9c4375f2642ae7c63240a3d463ae1269c475b93f80b88cc3238e931aa018a4ec",
"0x3a7250e773902899540e01c73be053b1b9c7f3b63b4d269034bad15b41240c05",
"0xe21cb013eb4ab18b59a635626c950aff6067021b45cffd9c02caadfcf1940c44",
"0xedfa3bd05ef98aa3eeca18a13913c31a9e929d71c57e9f0f2aafa76657b06223"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

