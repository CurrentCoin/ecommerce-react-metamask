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

## License

This code is released under the MIT license, shown below.

MIT License Copyright (c) 2021 CurrentCoin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice (including the next paragraph) shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
