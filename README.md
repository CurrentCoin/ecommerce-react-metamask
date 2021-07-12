This project is an ecommerce site, integrated with MetaMask. The code is free and available for you to remix, adapt, reuse.

Using this app, you can send payments from your MetaMask wallet, and pay in Ethereum or CurrentCoin.

This app is written in React and uses hooks. If you know React it should be easy to understand. 

It doesn't pull from a database (doesn't need one) and only communicates with an API and with the Ethereum network, one way, sending data.

You can run this git cloning the repo, then typing 'yarn install' and 'yarn start'.

You can see a live version of it here.

https://www.ccoin.live/
     	 
## Comments

The crypto addresses to send to are hardcoded and should be changed. The amounts are hardcoded also and should be changed too. 

Note that, if you do complete the user flow for payment, this is not on testnet; you'll be sending real ETH or CUR to the hardcoded address as payment for digital services. 

If you don't want to do that, change the hardcoded address, or simply don't authorize payment when requested to in MetaMask.

There is also a submit form with a hardcoded AWS API URL in there. This needs to be changed also. To set up your own, use API Gateway and DynamoDB, and AWS Lambda to tie those together.

Everything else is pretty straightforward. 

To my knowledge, there aren't many up to date example repos showing how to make a payment from MetaMask using Ethereum or an ERC-20 coin. You can consult this repo to learn how. You can also modify it for your own needs.

Major libraries used are: axios, Google's Material UI, Web3, ethers, react-router-dom.
