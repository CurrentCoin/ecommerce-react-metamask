import React, { useState } from 'react'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import MiniForm from './MiniForm';

const useStyles = makeStyles((theme) => ({  
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Catcher = ({img, title, text, link}) => {
  const classes = useStyles();
  return (
      <Card className={classes.root}>
      <CardActionArea>
      <CardMedia
    className={classes.media}
    image="man_wave.png"    
    title="Item"
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
      {title}
    </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
      <p>Contact us with any questions or concerns - or include your email to join our mailing list.</p>
      <TextField
    variant="outlined"
    id="outlined-multiline-static"    
    required
    fullWidth
    multiline
    rows={4}
    label=""
    name="message"
    autoComplete="message"
      />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>

    <MiniForm/>
      <p>Copyright @ CurrentCoin 2021.</p>
      
    </Typography>
      </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Catcher
