import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//import GlobalStats from './GlobalStats';
import Typography from '@material-ui/core/Typography';
import NumberFormat from 'react-number-format';



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


  const [globalData, setglobalData] = useState();
  const [dataLoading,setdataLoading] = useState(false);
  useEffect (()=>{
    async function fetchData(){
      setdataLoading(true);
      const apidata =await fetch("https://api.thevirustracker.com/free-api?global=stats");
      const apidatajs =await apidata.json();
      console.log(apidatajs);
      setglobalData(apidatajs);
      setdataLoading(false);
    }
    fetchData();
  },[])
  
  const loading = "Loading.."

  if (dataLoading){
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
            <div className={classTypography.root}>
                <Typography variant="h3" gutterBottom style={{color:'#aaa', fontWeight:'bold'}}>
          {loading}
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
         {loading}
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
           {loading}
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

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <div className={classTypography.root}>
              <Typography variant="h3" gutterBottom style={{color:'#aaa', fontWeight:'bold'}}>
              <NumberFormat value={globalData && globalData.results && globalData.results[0].total_cases} displayType={'text'} thousandSeparator={true}/>
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
          <NumberFormat value= {globalData && globalData.results && globalData.results[0].total_deaths} displayType={'text'} thousandSeparator={true}/> 
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
          <NumberFormat value= {globalData && globalData.results && globalData.results[0].total_recovered} displayType={'text'} thousandSeparator={true}/>

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