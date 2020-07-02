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
    height: '140px',
  },
}));

const useStylesTypography = makeStyles({
    root: {
      width: '100%',
      maxWidth: 500,
    },
  });

export default function CenteredGrid() {
  const classes = useStyles();
  const classTypography = useStylesTypography();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <div className={classTypography.root}>
              <Typography variant="h3" gutterBottom style={{color:'#aaa', fontWeight:'bold'}}>
        10,752,928
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Coronavirus Cases
      </Typography>
              </div>
           </Paper>
        </Grid>
        
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <div className={classTypography.root}>
          <Typography variant="h3" gutterBottom style={{fontWeight:'bold'}}>
          517,701
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Deaths
      </Typography>
      </div>
           </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <div className={classTypography.root}>
          <Typography variant="h3" gutterBottom style={{color:"#8ACA2B", fontWeight:'bold'}}>
        5,876,069
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Recovered
      </Typography>
      </div>
           </Paper>
        </Grid>
      </Grid>
    </div>
  );
}