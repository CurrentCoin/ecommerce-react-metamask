import React, { useState } from 'react'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Body=styled.div`
display: flex;
flex-direction: column;
margin-left: auto;
margin-right: auto;
align-items: center;
box-shadow: 0 3px 6px 0 #555;
padding: 20px 10px;
border-radius: 4px;
width: 380px;
background: white;
`

const Bar = styled.div`
margin-top: 5vh;
margin-bottom: 5vh;
`

const Background = ({ text, children }) => {
  const imager = "url('"+text+"')";
  const backstyle={backgroundImage: imager};
  const bigstyle={height: '100vh', width: '100vw', backgroundImage: imager, backgroundSize: 'cover', margin: '0px', padding: '0px', overflowX: 'hidden'}
  return (
      	<div style={bigstyle}>
     	 <Bar>
		<Body>
       	   	<>{children}</>
		</Body>
      	</Bar>
	</div>
  )
}

export default Background;
