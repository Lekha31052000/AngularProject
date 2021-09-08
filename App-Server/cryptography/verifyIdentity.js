const crypto=require('crypto');
const decrypt=require('./decrypt');
const fs=require('fs');

const receivedData=require('./signMessage').packageOfDataToSend;

const hash=crypto.createHash(receivedData.algorithm);

const publicKey=fs.readFileSync(__dirname+'/id_rsa_pub.pem','utf-8');

const decryptedMessage=decrypt.decryptWithPublicKey(publicKey,receivedData.signedEncryptedData);

const decryptedMessageHex=decryptedMessage.toString();

const hashOfOriginal=hash.update(JSON.stringify(receivedData.originalData));

const hashOfOriginalHex=hash.digest('hex');

if(hashOfOriginalHex===decryptedMessageHex){
    console.log("Succes..valid credentials!!");
}
else{
    console.log("OH NO...Invalid!!");
}