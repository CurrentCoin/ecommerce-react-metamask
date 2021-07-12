import React, { useState } from 'react'
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/MonetizationOn';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';
import PayerEth from './PayerEth';
import PayerCur from './PayerCur';
import Background from './Background';

const fstyle = {
    fontFamily: 'Poppins, sans-serif',
};

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

const Spacer=styled.div`
  margin-top: 2vh;
`

const Spaceb=styled.div`
  margin-top: 1vh;
  margin-bottom: 1vh;

`
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        CurrentCoin
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Podcontent = () => {
    const [values, setValues] = useState({name: '', message: '', email: ''})
    const [sent, setSent] = useState(false);
    const [eth, setEth] = useState(false);
    const [cur, setCur] = useState(false);        
    const [instructions, setInstructions] = useState(true);
    const handleChange = e => {
        const {name, value} = e.target
        setValues({...values, [name]: value})
    }    

    async function handleSubmit(event) {
        event.preventDefault();
        const response=await axios.post(
	  'https://x2hfof4qrh.execute-api.us-east-1.amazonaws.com/production',	  
            { message: `${values.name}`, name: `${values.message}`, email: `${values.email}` }
        );
        console.log(response);
        setSent(true);
    }

  const classes = useStyles();

    if (eth) {
	return (
		<Container component="main" maxWidth="xs">
		<CssBaseline />
		<div className={classes.paper}>
		<Icn src="cur_icon.png" alt="cur icon"/>
		<Typography component="h1" variant="h5">
		<span style={fstyle}>CurrentCoin</span>	    	    	    
		</Typography>
		<Grid container spacing={2}>
		<Grid item xs={12}>
		<p>Thank you for filling out the form! </p>
		<p>After this, all that's left to do is to make your payment.</p>
                <p>We'll be in touch, through email, about the website.</p>
		<p>Your website will be ready within 1 business day.</p> 
		<Icnt src="site_podcast.png" alt="profile of podcaster woman"/>
		<p>Please send 0.025 ETH to complete the process. You may choose your payment method below.</p>      
		<p>Usage of this app requires MetaMask.</p>
		<PayerEth/>
		</Grid>
		</Grid>
		</div>
		<Box mt={5}>
		<Copyright />
		</Box>
		</Container>
	)
    }
    else if (cur) {
	return (
		<Container component="main" maxWidth="xs">
		<CssBaseline />
		<div className={classes.paper}>
		<Icn src="cur_icon.png" alt="cur icon"/>
		<Typography component="h1" variant="h5">
		<span style={fstyle}>CurrentCoin</span>	    	    	    	    
		</Typography>
		<Grid container spacing={2}>
		<Grid item xs={12}>
		<p>Thank you for filling out the form! </p>
		<p>After this, all that's left to do is to make your payment.</p>
                <p>We'll be in touch, through email, about the website.</p>
		<p>Your website will be ready within 1 business day.</p> 
		<Icnt src="site_podcast.png" alt="profile of podcaster woman"/>
		<p>Please send the equivalent 20000 CUR to complete the process. You may choose your payment method below.</p>      
		<p>Usage of this app requires MetaMask.</p>
		<PayerCur/>
		</Grid>
		</Grid>
		</div>
		<Box mt={5}>
		<Copyright />
		</Box>
		</Container>
	)
    }
    else if (sent) {
	return (
		<Container component="main" maxWidth="xs">
		<CssBaseline />
		<div className={classes.paper}>
		<Icn src="cur_icon.png" alt="cur icon"/>
		<Typography component="h1" variant="h5">
		<span style={fstyle}>CurrentCoin</span>	    	    	    	    	    
		</Typography>
		<Grid container spacing={2}>
		<Grid item xs={12}>
		<p>Thank you for filling out the form! </p>
		<p>After this, all that's left to do is to make your payment.</p>
                <p>We'll be in touch, through email, about the website.</p>
		<p>Your website will be ready within 1 business day.</p> 
		<Icnt src="site_podcast.png" alt="profile of podcaster woman"/>
		<p>Please send the equivalent of 0.025 ETH to complete the process. You may choose your payment method below.</p>      
		<p>Usage of this app requires MetaMask.</p>
		<Spaceb>
		<Button type="button" fullWidth variant="contained" color="primary" onClick={() => setEth(true)} >Pay With Ethereum</Button>
		</Spaceb>
		<Spaceb>
		<Button type="button" fullWidth variant="contained" color="primary" onClick={() => setCur(true)} >Pay With CurrentCoin</Button>
		</Spaceb>
		</Grid>
		</Grid>
		</div>
		<Box mt={5}>
		<Copyright />
		</Box>
		</Container>
	    
	)
    }
    else if (instructions) {
	return (
		<Container component="main" maxWidth="xs">
		<CssBaseline />
		<div className={classes.paper}>
		<Icn src="cur_icon.png" alt="cur icon"/>		
		<Typography component="h1" variant="h5">
		<span style={fstyle}>CurrentCoin</span>	    	    	    	    	    	    
		</Typography>
		<form className={classes.form} onSubmit={handleSubmit}>      
		<Grid container spacing={2}>
		<Grid item xs={12}>

		<p>CurrentCoin makes digital services easy to access. </p>
		<p>See our <a href="https://www.mediazed.com/fitness-podcast.html">demo</a> to hear a few second sample of a typical podcast intro.</p>
                <p>We'll work with you to create a podcast once we have your audio.</p>
		<Icnt src="site_podcast.png" alt="profile of podcaster woman"/>
		<p>We will send the final version to your email within 2 business days.</p>      
		<Spacer>
		<p>To purchase this, fill out the form above, then send 0.025 ETH, or the CUR dollar value equivalent amount, to our address.</p>
		<p>You can start the process by filling out our form.</p> 		
		<Button type="submit" fullWidth variant="contained" color="primary" onClick={() => setInstructions(false)}>See Form</Button>
		</Spacer>
		</Grid>
		</Grid>
		</form>
		</div>
		<Box mt={5}>
		<Copyright />
		</Box>
		</Container>
	);
    } else {
	return (
		<Container component="main" maxWidth="xs">
		<CssBaseline />
		<div className={classes.paper}>
		<Icn src="cur_icon.png" alt="cur icon"/>				
		<Typography component="h1" variant="h5">
		<span style={fstyle}>CurrentCoin</span>	    	    	    	    	    	    
            </Typography>
		<form className={classes.form} onSubmit={handleSubmit}>      
		<Grid container spacing={2}>
		<Grid item xs={12}>
		<p>CurrentCoin makes simple, convenient websites easy to create. </p>
		<p>See our <a href="https://www.mediazed.com/website.html">demo</a> for a live version.</p>
		<Icnt src="site_podcast.png" alt="profile of podcaster woman"/>
		<p>We will send the final version to your email within 2 business days.</p>      
		</Grid>
		<Grid item xs={12} sm={12}>
		<TextField
	    autoComplete="name"
	    name="name"
	    variant="outlined"
	    required
	    fullWidth
	    id="name"
	    label="Name"
	    autoFocus
	    onChange={handleChange}
	    value={values.name}
                />
		</Grid>
		<Grid item xs={12}>
		<TextField
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
	    autoComplete="email"
	    onChange={handleChange}
	    value={values.email}
		/>
		</Grid>
                <p>Please list us know how we can access your audio and any special requests we should consider while editing your audio into podcast form.</p>
                <p>If you can include a link to a Google Drive file, that will make it easy for us. Alternatively, you can mail your podcast audio to info@excelsitor.com.</p>
                <p>Limit 1 hour of audio editing per podcast.</p>
		<p>If you'd like to request further instructions, write 'instructions please' and we'll mail them to the provided email.</p>
		<Grid item xs={12}>
		<TextField
	    id="message"
	    label="Message"
	    name="message"
	    fullWidth
	    multiline
	    rows={6}
	    defaultValue=""
	    variant="outlined"
	    onChange={handleChange}
	    value={values.message}
		/>
		<Spacer>
		<p>After you've filled out the form, we'll display instructions for payment, and then we'll start creating your podcast.</p> 		
		<Button type="submit" fullWidth variant="contained" color="primary" >Send Completed Form</Button>
		</Spacer>
		</Grid>
		</Grid>
		</form>
		</div>
		<Box mt={5}>
		<Copyright />
		</Box>
		</Container>
	);
    }
}


export const Podweb = () => {
	return (
		<Background text="mesh_red_orange.jpg">
		<Podcontent/>
		</Background>
	)
}

