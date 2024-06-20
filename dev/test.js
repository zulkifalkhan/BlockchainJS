const Blockchain = require('./blockchain')

const bitcoin = new Blockchain()

// const previousBlockHash = '0X212SADAS2ADSA'

// const currentBlockData = [
//     {
//         amount: 10,
//         sender: '0XZ2321SAD',
//         recipient: '0X12121WASD',
//     },
//     {
//         amount: 30,
//         sender: '0XZ22132321SAD',
//         recipient: '0X12SAD2AS1a21WASD',
//     },
//     {
//         amount: 40,
//         sender: '0XZSAD2321SAD',
//         recipient: '0X121ASD21WASD',
//     }
// ]

// const nonce = 100

// console.log(bitcoin.proofOfWork(previousBlockHash,currentBlockData))

// bitcoin.createNewBlock(2531,'0ASXXAE2112','0X2312WASD12')

// bitcoin.createNewTransaction(100,'zulfi0x2121212','okasha0x232dsa2')

// bitcoin.createNewBlock(111,'0ASXXAE2sad112','0X2312dasdWASD12')

// bitcoin.createNewTransaction(200,'zulfi0x2121212','okasha0x232dsa2')
// bitcoin.createNewTransaction(300,'zulfi0x2121212','okasha0x232dsa2')
// bitcoin.createNewTransaction(400,'zulfi0x2121212','okasha0x232dsa2')

// bitcoin.createNewBlock(222531,'0ASXXsadsaAE2112','0X23sads12WASD12')


// console.log(bitcoin.chain[2])






// const bc1 = {
//     "chain": [
//         {
//             "index": 1,
//             "timestamp": 1675681699921,
//             "transactions": [],
//             "nonce": 100,
//             "hash": "0",
//             "previousBlockHash": "0"
//         },
//         {
//             "index": 2,
//             "timestamp": 1675681737432,
//             "transactions": [],
//             "nonce": 18140,
//             "hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
//             "previousBlockHash": "0"
//         },
//         {
//             "index": 3,
//             "timestamp": 1675681795916,
//             "transactions": [
//                 {
//                     "amount": 6.5,
//                     "sender": "00",
//                     "recipient": "cdba1f23534146b0984c33d0930a2b40",
//                     "transactionId": "efc92fd60d504e4c8a0255ca887f5d3c"
//                 },
//                 {
//                     "amount": 10,
//                     "sender": "0XZSAD2321SAD",
//                     "recipient": "0X121ASD21WASD",
//                     "transactionId": "729a9ce5a7f64fd4b58b5d28c9faa7b7"
//                 },
//                 {
//                     "amount": 20,
//                     "sender": "0XZSAD2321SAD",
//                     "recipient": "0X121ASD21WASD",
//                     "transactionId": "1b3ec847f7ea4c868f59e472bccf6b02"
//                 },
//                 {
//                     "amount": 30,
//                     "sender": "0XZSAD2321SAD",
//                     "recipient": "0X121ASD21WASD",
//                     "transactionId": "d512001c9f984f1daa28ece174b29265"
//                 }
//             ],
//             "nonce": 362151,
//             "hash": "000066b2a04e2d8c4fbc686545a1247f7e28bc26724b33a7947302770e927505",
//             "previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
//         },
//         {
//             "index": 4,
//             "timestamp": 1675681838921,
//             "transactions": [
//                 {
//                     "amount": 6.5,
//                     "sender": "00",
//                     "recipient": "cdba1f23534146b0984c33d0930a2b40",
//                     "transactionId": "8d19baaccff24edf9ca9311b43296e27"
//                 },
//                 {
//                     "amount": 40,
//                     "sender": "0XZSAD2321SAD",
//                     "recipient": "0X121ASD21WASD",
//                     "transactionId": "0685f54f49e84eb79e1d7252d1c1cd5f"
//                 },
//                 {
//                     "amount": 50,
//                     "sender": "0XZSAD2321SAD",
//                     "recipient": "0X121ASD21WASD",
//                     "transactionId": "806ac12c96804d12a275451e4b321a65"
//                 },
//                 {
//                     "amount": 60,
//                     "sender": "0XZSAD2321SAD",
//                     "recipient": "0X121ASD21WASD",
//                     "transactionId": "52170116f366459cb7952bb3cf9bcbfb"
//                 },
//                 {
//                     "amount": 70,
//                     "sender": "0XZSAD2321SAD",
//                     "recipient": "0X121ASD21WASD",
//                     "transactionId": "c2af201c0877473da3c3df5bfb3288b1"
//                 }
//             ],
//             "nonce": 83277,
//             "hash": "0000bcd53565f046abe6cfc26c92a500acb43eb76db6ce60bffbf73772e91b22",
//             "previousBlockHash": "000066b2a04e2d8c4fbc686545a1247f7e28bc26724b33a7947302770e927505"
//         },
//         {
//             "index": 5,
//             "timestamp": 1675681856022,
//             "transactions": [
//                 {
//                     "amount": 6.5,
//                     "sender": "00",
//                     "recipient": "cdba1f23534146b0984c33d0930a2b40",
//                     "transactionId": "f9afd6712b084bd29e2fba5159f633c8"
//                 }
//             ],
//             "nonce": 50770,
//             "hash": "00009b8d761fe17bd02a2df260f872a09aaf7dac7da9bf9c86268675b0ef3955",
//             "previousBlockHash": "0000bcd53565f046abe6cfc26c92a500acb43eb76db6ce60bffbf73772e91b22"
//         },
//         {
//             "index": 6,
//             "timestamp": 1675681859081,
//             "transactions": [
//                 {
//                     "amount": 6.5,
//                     "sender": "00",
//                     "recipient": "cdba1f23534146b0984c33d0930a2b40",
//                     "transactionId": "e7f87e29874c405aa4cacfd1c67af242"
//                 }
//             ],
//             "nonce": 18442,
//             "hash": "00003b0a8a3e969ef7030904f5ecb63dd542d9aa9791fbe1c327734caabffd28",
//             "previousBlockHash": "00009b8d761fe17bd02a2df260f872a09aaf7dac7da9bf9c86268675b0ef3955"
//         }
//     ],
//     "pendingTransactions": [
//         {
//             "amount": 6.5,
//             "sender": "00",
//             "recipient": "cdba1f23534146b0984c33d0930a2b40",
//             "transactionId": "476ab8bea69345c88d57182502a8ece8"
//         }
//     ],
//     "currentNodeUrl": "http://localhost:3001",
//     "networkNodes": []
// }


// console.log('Valid :',bitcoin.chainIsValid(bc1.chain))