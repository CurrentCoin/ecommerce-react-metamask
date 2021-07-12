import React, { useState } from 'react'
import { ethers } from 'ethers';
import Web3 from 'web3';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const Spacer = styled.div`
margin-top: 1vh;
margin-bottom: 1vh;
`

async function connectMeta(accounted, msged) {
    let ethereum = window.ethereum;

    try {
	const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
	const account = accounts[0];
	accounted(account);
    } catch {
	console.log("connect fail!");
	msged(<><p>Please install MetaMask and reload this page.</p><p>Alternatively, you can send 0.025 ETH to     0xDddcf46Ed02a81e38E1906f508CEBa65A8f3B7dD and we'll get started.</p><p>We'll follow up to all form+payments through email.</p></>);
    }
}

async function payMeta(sender, receiver, strEther, msged) {
    console.log(`payWithMetamask(receiver=${receiver}, sender=${sender}, strEther=${strEther})`)
    try {
	const params = {
	    from: sender,
	    to: receiver,
	    value: strEther,
	    gas: 39000
	};
        await window.ethereum.enable();
        window.web3 = new Web3(window.ethereum);	
	const sendHash = window.web3.eth.sendTransaction(params);
	console.log('txnHash is ' + sendHash);
    } catch(e) {
	console.log("payment fail!");
	console.log(e);
	msged(<p>Can't connect MetaMask. Please check MetaMask.</p>);	
    }

}
 
export default function PayerEth() {
    const amount = '25000000000000000';
    const receiver = '0xDddcf46Ed02a81e38E1906f508CEBa65A8f3B7dD';
    const [message, setMessage] = useState(<Button type="button" fullWidth variant="contained" color="primary" onClick={() => connectMeta(setAccount, setMessage)} >Connect MetaMask</Button>);
    const [account, setAccount] = useState("");
    if (account === "") {
	return (
	    <>
		{message}
		</>
	)
    } else {
	return (
		<>
		<Button type="button" fullWidth variant="contained" color="primary" onClick={() => payMeta(account, receiver, amount, setMessage)} >Buy For 0.025 ETH</Button>
		</>
	)

    }
}
