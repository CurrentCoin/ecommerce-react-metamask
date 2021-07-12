import React, { useState } from 'react'
import { ethers } from 'ethers';
import { abi } from './Abi';
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
	msged(<><p>Please install MetaMask and reload this page.</p><p>Alternatively, you can send 20000 CUR to 0xDddcf46Ed02a81e38E1906f508CEBa65A8f3B7dD and we'll get started.</p><p>We'll follow up to all form+payments through email.</p></>);
    }
}

async function payMeta(sender, receiver, amount, msged) {
    //console.log(`payWithMetamask(receiver=${receiver}, sender=${sender}, amt=${amount})`)
    let contract_address='0x347a29ea126a746c70e1ead570fddf438e66231a';
    try {
        await window.ethereum.enable();
        window.web3 = new Web3(window.ethereum);
	let contractInstance = new window.web3.eth.Contract(abi, contract_address);
	const params = {
	    from: sender,
	    to: contractInstance._address,
	    data: contractInstance.methods.transfer(receiver, window.web3.utils.toWei( amount.toString() ) ).encodeABI(),
	    gas: 39000,  	    
	};
	//const sendHash = window.web3.eth.sendTransaction(params);
	window.web3.eth.sendTransaction(params).then(function(receipt) {
	    console.log(receipt);
	    msged("success");
	}).catch(function(e){
	    console.log(e);
	    console.log("failed to complete transaction.");
	    msged("fail");
	});
    }
    catch(e) {
	console.log("payment fail!");
	console.log(e);
	msged("");
	//msged(<><p>Can't connect MetaMask. Please check MetaMask.</p></>);
    }

}
 
export default function PayerCur() {
    const amount = 20000;
    //const receiver = '0x9155b0A9cc17C29EA17cB7993EfC4fCc323BE48A';
    const receiver = '0xDddcf46Ed02a81e38E1906f508CEBa65A8f3B7dD';
    const [account, setAccount] = useState("");    
    const [message, setMessage] = useState(<Button type="button" fullWidth variant="contained" color="primary" onClick={() => connectMeta(setAccount, setMessage)} >Connect MetaMask</Button>);

    if (account === "") {
	return (
	    <>
		{message}
	    </>
	)
    } else if (account==="fail") {
	return (
	    <>
	    <p>It seems you may have rejected the payment.</p>
	    <p>If you'd like to retry the payment, please click the button to try again.</p>
            {message}
	    </> 
         )
    } else if (account==="success") {
         return (
	    <>
	    <p>Your payment has been accepted.</p>
	    <p>We'll follow up with you about your deliverables through email.</p>
	    <p>Thank you, and have a nice day!</p>
		</>
	)
    }
    else {
	return (
		<>
		<Button type="button" fullWidth variant="contained" color="primary" onClick={() => payMeta(account, receiver, amount, setAccount)} >Buy For 20000 CUR</Button>
		</>
	)

    }
}
