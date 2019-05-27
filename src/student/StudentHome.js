import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CampusActions } from '../store/action/campusaction';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
// import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


class StudentHome extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // id :'',
      jobprofile:'',
    }
  }


  componentDidMount(){
    this.props.vacancydata();
  }
  handleChange1 = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  signout = () => {
    this.props.signout()
  }

  // search = () => {

  //   if(this.state.jobprofile)
  //   {
  //     let data = {
  //       jobprofile : this.state.jobprofile,
  //     }
  //     this.props.filtercompanydata(data);
  //   }
  //   else{
  //     alert('Please fill the field!');
  //   }
  // };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {/* NavBar */}
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Campus Recruitment System
            </Typography>

            {/* Student NavBar Links */}
            <Button color="inherit">
              <Link to="/studenthome" className={classes.navLinks}>Vacancy</Link>
            </Button>
            <Button color="inherit">
              <Link to="/findcompanies" className={classes.navLinks}>Find Companies</Link>
            </Button>
            <Button color="inherit" onClick={this.signout}>
                Logout
              </Button>
          </Toolbar>
        </AppBar>

        {/* Student Home */}
        <Typography className={classes.studenttext}>View Job's Vacancies</Typography>

        {/* Filter data of jobprofile and salary */}
        {/* <Grid container spacing={24}>
          <Grid item xs={3}></Grid>
          <Grid item xs={4}>
            <TextField
              id="jobprofile"
              label="Job Profile"
              className={classes.textboxes}
              type="text"
              name="jobprofile"
              autoComplete="jobprofile"
              margin="normal"
              variant="outlined"
              onChange={this.handleChange1}
            />

          </Grid>

          <Grid item xs={2}>
          <Button variant="contained" color="primary" className={classes.textboxes} onClick={this.search}>
              Search
            </Button>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid> */}


        
        {/* Showing Data related to job profile and salary */}
        <Grid container spacing={24}>

          <Grid item xs={12}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow className={classes.tableText}>
                  <TableCell>Company Name</TableCell>
                  <TableCell>Company Profile</TableCell>
                  <TableCell>Salary</TableCell>
                  <TableCell>Details</TableCell>
                  <TableCell>Experience</TableCell>
                  <TableCell>Email</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.vacancydataredux ? this.props.vacancydataredux.map(value => {
                  return (

                    <TableRow key={value.id}>
                      <TableCell component="th" scope="row">
                        {value.CompanyName}
                      </TableCell>
                      <TableCell >{value.JobProfile}</TableCell>
                      <TableCell>{value.Salary}</TableCell>
                      <TableCell>{value.Criteria}</TableCell>
                      <TableCell>{value.Bond}</TableCell>
                      <TableCell>{value.Email}</TableCell>
                    </TableRow>
                  );
                }) : null}

              </TableBody>
            </Table>

          </Grid>

        </Grid>

      </div>
    );
  }
}

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  navLinks: {
    textDecoration: 'none',
    textAlign: 'center',
    color: 'white',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  studenttext: {
    textAlign: 'center',
    fontSize: '25px',
    margin: '50px 0px 30px 0px',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  textboxes: {
    width: '100%',
    margin: '20px 0px 0px 0px',
    height: '55px',

  },
});

const mapStateToProps = state => {
  return {
    filtercompanydataredux: state.CampusReducer.filtercompanydataredux,
    vacancydataredux: state.CampusReducer.vacancydataredux,
  }

}

const mapDispatchToProps = dispatch => {
  return {
    signout: () =>  dispatch(CampusActions.signout()) ,
    vacancydata: () => dispatch(CampusActions.vacancydata())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(StudentHome));


