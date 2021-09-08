const crypto=require("crypto");
const fs=require("fs");

function genKeyPair(){
    const keyPair=crypto.generateKeyPairSync('rsa',{
        modulusLength:4096,
        publicKeyEncoding:{
            type:'pkcs1',
            format:'pem'
        },
        privateKeyEncoding:{
            type:'pkcs1',
            format:'pem'
        }
    });
    fs.writeFileSync(__dirname+'/id_rsa_pub.pem',keyPair.publicKey);
    fs.writeFileSync(__dirname+'/id_rsa_priv.pem',keyPair.privateKey);

}
genKeyPair();

// const { generateKeyPair } = require('crypto-js');
// generateKeyPair('rsa', {
//   modulusLength: 4096,
//   publicKeyEncoding: {
//     type: 'spki',
//     format: 'pem'
//   },
//   privateKeyEncoding: {
//     type: 'pkcs8',
//     format: 'pem',
//     cipher: 'aes-256-cbc',
//     passphrase: 'top secret'
//   }
// }, (err, publicKey, privateKey) => {
//   // Handle errors and use the generated key pair.
// });