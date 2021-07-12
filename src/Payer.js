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
	msged(<><p>Please install MetaMask and reload this page.</p><p>Alternatively, you can send 0.02 ETH to 0x9155b0A9cc17C29EA17cB7993EfC4fCc323BE48A and we'll get started.</p><p>We'll follow up to all form+payments through email.</p></>);
    }
}

async function payMeta(sender, receiver, strEther, msged) {
    console.log(`payWithMetamask(receiver=${receiver}, sender=${sender}, strEther=${strEther})`)
    //console.log(ethers.utils.hexlify(0.1))

    let ethereum = window.ethereum;

    try {
	await ethereum.enable();
	let provider = new ethers.providers.Web3Provider(ethereum);
	const params = [{
	    from: sender,
	    to: receiver,
	    value: strEther
	}];
	const transactionHash = await provider.send('eth_sendTransaction', params)
	console.log('transactionHash is ' + transactionHash);
    } catch {
	console.log("payment fail!");
	msged(<p>Can't connect MetaMask. Please check MetaMask.</p>);	
    }

}
 
export default function Payer() {
    const amount='470de4df820000';
    const receiver = '0x9155b0A9cc17C29EA17cB7993EfC4fCc323BE48A';
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
		<Button type="button" fullWidth variant="contained" color="primary" onClick={() => payMeta(account, receiver, amount, setMessage)} >Buy For 0.02 ETH</Button>
		</>
	)

    }
}
