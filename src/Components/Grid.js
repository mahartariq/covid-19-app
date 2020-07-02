import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//import GlobalStats from './GlobalStats';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '150px',
  },
}));



export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
              <Typography variant="h3" gutterBottom>
        10,752,928
      </Typography>
              Coronavirus Cases
           </Paper>
        </Grid>
        
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          
          <Typography variant="h3" gutterBottom>
          517,701
      </Typography>
           Deaths

           </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <Typography variant="h3" gutterBottom>
        5,876,069
      </Typography>
           Recovered
           </Paper>
        </Grid>
      </Grid>
    </div>
  );
}