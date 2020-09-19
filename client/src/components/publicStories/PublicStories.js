import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {Typography,Avatar} from '@material-ui/core';
import {connect} from 'react-redux';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
 const SimpleCard=(props) =>{
    const {name,title,body}=props;
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom className='publicStories'>
        <Avatar alt="Remy Sharp" src={props.image} />
        {name}
        </Typography>
        <Typography variant="h5" component="h2">
        {title}
        </Typography>
     
        <Typography variant="body2" component="p">
          {body}
        </Typography>
      </CardContent>
     
    </Card>
  );
}




export default SimpleCard;