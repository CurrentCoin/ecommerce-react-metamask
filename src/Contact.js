import React, { useState } from 'react'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Background from './Background';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
	root: {
	flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
}));

const fstyle = {
fontFamily: 'Poppins, sans-serif',
};

const But=styled.button`
border: none;
`

const Icnt=styled.img`
display: block;
margin-left: auto;
margin-right: auto;
width: 100%;
`

const Icn=styled.img`
display: block;
border-radius: 1px;
margin-bottom: 1vh;
font-family: 'Poppins', sans-serif;
`

const Main=styled.div`
margin: auto;
padding-top: 2vh;
text-align: center;
`

export const Contact  = () => {
const [values, setValues] = useState({name: '', message: '', email: ''})
const [sent, setSent] = useState(false);
const handleChange = e => {
const {name, value} = e.target
setValues({...values, [name]: value})
}    

const inputStyle={width:'100%',borderRadius:'5px',  border: '1px solid #ccc',paddingTop: '1vh',marginTop: '7px'}
async function handleSubmit(event) {
    event.preventDefault();
    const response=await axios.post(
      'https://x2hfof4qrh.execute-api.us-east-1.amazonaws.com/production',	  
      { message: `${values.name}`, name: `${values.message}`, email: `${values.email}` }
    );
    console.log(response);
    setSent(true);
  }

  if (!sent) {
    return (
      <Background text="mesh_pastel.jpg">
	<Container maxWidth="sm" style={{paddingTop: '2vh',paddingBottom: '2vh',}}>
	  <Typography component="div" style={{ backgroundColor: '#cfe8fc'}} />
	  <Typography component="h1" variant="h5">
	    <span style={fstyle}>CurrentCoin</span>	    	    
	  </Typography>
	  <p>Let us know your thoughts.</p>
	  <p>Leave your contact information and we'll write back as soon as we are able.</p>
	    <form onSubmit={handleSubmit}>
              <div style={{paddingTop: '2vh', paddingBottom: '2vh',}}>            
                <label>Name</label><br/>
                <input style={inputStyle}
		       name="name"
		       onChange={handleChange}
		       value={values.name}
                />
              </div>
              <div style={{paddingBottom: '2vh',}}>
                <label>Email</label><br/>
                <input style={inputStyle}
		       name="email"
		       onChange={handleChange}
		       value={values.email}
                />
              </div>
              <div style={{paddingBottom: '2vh',}}>
                <label>Message</label><br/>
		<textarea style={inputStyle}
			  rows="5"
			  name="message"
			  onChange={handleChange}
			  value={values.message}
                />
              </div>
	      <But><Button type="button" fullWidth variant="contained" color="primary" >Send</Button></But>
	    </form>
	    </Container>		
            </Background>
	    );
	    } else {
	      return (
		<Background text="mesh_pastel.jpg">
		  <p>Thanks for contacting us! </p>
		  <p>We'll respond to your message shortly.</p>
		  <img src="hand_wave.gif" alt="waving monster"/>
		</Background>
	      )
	    }
}        


