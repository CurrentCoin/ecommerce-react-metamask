import React from 'react';
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
import Payer from './Payer';
import MediaCard from './MediaCard';
import Copyright from './Copyright';
import Catcher from './Catcher';
import Former from './Former';
import Background from './Background';

const Top=styled.div`
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

const Flag=styled.div`
height: 100vh;
width: 100vw;
background-image: url('mesh.jpg');
background-size: cover;
margin: 0px;
padding: 0px;
overflow-x: hidden; 
`

const Bar = styled.div`
margin-top: 5vh;
`


const Icnt=styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`
const Ctr=styled.div`
  margin: auto;
  width: 100%;
`

const Spacer=styled.div`
  margin-top: 2vh;
  margin-bottom: 2vh;
`

const useStyles = makeStyles((theme) => ({
  paper: {
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

export const Splash = () => {
  const classes = useStyles();

  return (
    	        <Background text="mesh_green_wave.jpg">
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <form className={classes.form} noValidate>
      <Grid container spacing={2}>
      <Grid item xs={12}>
      <Spacer>
      <MediaCard title="Website" link="/website" img="website.png" text="Click here to use CurrentCoin to create a custom website." cta="Order a Website"
      />
      </Spacer>
      <Spacer>
      <MediaCard title="Podcast" link="/podcast" img="podcast.png" text="Click here to use CurrentCoin to create a custom podcast." cta="Order a Podcast"
      />
      </Spacer>
      <Spacer>
      <MediaCard title="Contact Us" link="/contact" img="man_wave.png" text="Click here to ask us a question or send us feedback." cta="Write To Us"
      />
      </Spacer>
      </Grid>
      </Grid>      
      </form>
      
      </div>
      </Container>
		  </Background>
  );
}
