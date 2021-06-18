const{BlockChain, Transaction} = require('./blockchain')
const EC = require('elliptic').ec
const ec = new EC('secp256k1')

const myKey = ec.keyFromPrivate('d39f4c7e1a9b4806c34f0db37bbb5298c353944ddf890d0e6ddb1087e1b46718')
const myWalletAdress = myKey.getPublic('hex')

let bibbelCoin = new BlockChain()

const tx1 = new Transaction(myWalletAdress, 'public key goes here', 10)
tx1.signTransaction(myKey)
bibbelCoin.addTransaction(tx1)

console.log('\n Starting miner')
bibbelCoin.minePendingTransaction(myWalletAdress)

console.log('\n Balance of Simon', bibbelCoin.getBalanceOfAdress(myWalletAdress))

bibbelCoin.chain[1].transactions[0].amount = 1

console.log('is chain valid?', bibbelCoin.isChainValid())
