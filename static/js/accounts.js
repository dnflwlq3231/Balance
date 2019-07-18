const Web3 = require('web3')
const rpcURL = 'https://ropsten.infura.io/v3/f2d6082eec7d47fd9843b71b0651e47d' // Your RCkP URL goes here
const web3 = new Web3(rpcURL)
const address = '0x5387325082b12679feDcB0C466B3b8C83001462B' // Your account address goes here
web3.eth.getBalance(address, (err, wei) => { 
    balance = web3.utils.fromWei(wei, 'ether')
    console.log("balance : " , balance) })
