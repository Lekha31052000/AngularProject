const crypto=require('crypto');

const hash=crypto.createHash('sha256');
const fs=require('fs');
const encrypt=require('./encrypt');
const decrypt=require('./decrypt');

const myData={
    firstName:"Lekha",
    lastName:"Loganathan",
    socialSecurityNumber:" this is my secret"
}

const myDataString=JSON.stringify(myData);

hash.update(myDataString);

const hashData=hash.digest('hex');

const senderPrivateKey=fs.readFileSync(__dirname+'/id_rsa_priv.pem','utf-8');

const signedMessage=encrypt.encryptWithPrivateKey(senderPrivateKey,hashData);

const packageOfDataToSend={
    algorithm:"sha256",
    originalData:myData,
    signedEncryptedData:signedMessage
}

module.exports.packageOfDataToSend=packageOfDataToSend;