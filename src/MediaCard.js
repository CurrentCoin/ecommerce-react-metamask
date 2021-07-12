import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const MediaCard = ({img, title, text, link, cta}) => {
  const classes = useStyles();

  return (
      <Link style={{ textDecoration: 'none' }} to={link}>    
      <Card className={classes.root}>
      <CardActionArea>
      <CardMedia
    className={classes.media}
    image={img}
    title="Item"
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
      {title}
    </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
      {text}
    </Typography>
      </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary">
      <Link style={{ textDecoration: 'none' }} to={link}>{cta}</Link>
    </Button>
      </CardActions>
      </Card>
      </Link>
  );
}

export default MediaCard
