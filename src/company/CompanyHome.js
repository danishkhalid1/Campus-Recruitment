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
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const ranges = [
  {
    value: 'BSCS',
    label: 'BSCS',
  },
  {
    value: 'BBA',
    label: 'BBA',
  },
  {
    value: 'BME',
    label: 'BME',
  },
  {
    value: 'BEE',
    label: 'BEE',
  },
  {
    value: 'BSSE',
    label: 'BSSE',
  }
];

class CompanyHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      department: '',
    };
  }

  signout = () => {
    this.props.signout()
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleChange1 = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  search = () => {

    if(this.state.department)
    {
      let data = {
        dept : this.state.department,
      }
      this.props.filterstudentdata(data);
    }
    else{
      alert('Please fill the field!');
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Campus Recruitment System
          </Typography>

          <Button color="inherit">
            <Link to="/companyhome" className={classes.navLinks}>Student Info</Link>
            </Button>
            <Button color="inherit">
            <Link to="/companypostnewvacancy" className={classes.navLinks}>Post New Vacancy</Link>
            </Button>
            <Button color="inherit" onClick={this.signout}>
            Logout
            </Button>
          </Toolbar>
        </AppBar>

        <Typography className={classes.studenttext}>Student Information</Typography>

        <Grid container spacing={24}>
          <Grid item xs={3}></Grid>         

          <Grid item xs={4}>
            <TextField
              select
              className={classes.textboxes}
              variant="outlined"
              id="department"
              label="Department"
              value={this.state.department}
              onChange={this.handleChange('department')}

            >
              {ranges.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" color="primary" className={classes.textboxes} onClick={this.search}>
              Search
            </Button>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>


        <Grid container spacing={24}>
          {/* <Grid item xs={}></Grid> */}
          <Grid item xs={12}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow className={classes.tableText}>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>College</TableCell>
                  <TableCell>Number</TableCell>
                  <TableCell>Gender</TableCell>
                  <TableCell>University</TableCell>
                  <TableCell>Department</TableCell>
                  <TableCell>City</TableCell>
                  <TableCell>Age</TableCell>
                  <TableCell>Address</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
              {this.props.filterstudentdataredux ? this.props.filterstudentdataredux.map(value => {
            return (
              <TableRow key={value.id}>
                <TableCell component="th" scope="row">
                  {value.Name}
                </TableCell>
                <TableCell >{value.Email}</TableCell>
                <TableCell>{value.Hsc}</TableCell>
                <TableCell>{value.Contact}</TableCell>
                <TableCell>{value.Gender}</TableCell>
                <TableCell>{value.Uni}</TableCell>
                <TableCell>{value.Dept}</TableCell>
                <TableCell>{value.City}</TableCell>
                <TableCell>{value.Age}</TableCell>
                <TableCell>{value.Address}</TableCell>

              </TableRow>
              );
              }): null}

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
    height: '55px',
    // margin: '20px 0px 0px 0px',
  },
});

const mapStateToProps = state => {
  return {
    filterstudentdataredux: state.CampusReducer.filterstudentdataredux,
    
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    filterstudentdata: (data) => dispatch(CampusActions.filterstudentdata(data)),
    signout: () => { dispatch(CampusActions.signout()) }

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CompanyHome));
