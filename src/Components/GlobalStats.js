import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0),
      width: '100%',
      height: theme.spacing(20),
    },
  },
}));

export default function GlobalStats() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Paper elevation={3} >
         Global Data 
      </Paper>




    </div>
  );
}