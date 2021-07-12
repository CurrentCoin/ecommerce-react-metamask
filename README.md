This project is an ecommerce site, integrated with MetaMask. The code is free and available for you to remix, adapt, reuse.

Using this app, you can send payments from your MetaMask wallet, and pay in Ethereum or CurrentCoin.

## Comments

The crypto addresses to send to are hardcoded and should be changed. The amounts are hardcoded also and should be changed too. 

There is also a submit form with a hardcoded AWS API in there. This needs to be changed also. To set up your own, use API Gateway and DynamoDB, and AWS Lambda to tie those together.

Everything else is pretty straightforward. To my knowledge, there aren't many up to date example repos showing how to make a payment from MetaMask using Ethereum or an ERC-20 coin. You can consult this repo to learn how.

Major libraries used are: axios, Google's Material UI, Web3, ethers, react-router-dom.
