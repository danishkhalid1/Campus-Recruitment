import React, { Component } from 'react';
// import PropTypes from 'prop-types';
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
  constructor() {
    super();
    this.state = {
      department: '',
      hscaggregate:'',
      sscaggregate:'',
      collegeaggregate:'',
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextprops ...', nextProps);
  }

  componentWillMount() {
    this.props.studentdata()
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleChange1 = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  search = () => {

  let data = {
      dept : this.state.department,
      ssc : this.state.sscaggregate,
      hsc : this.state.hscaggregate,
      colg : this.state.collegeaggregate
    }
    this.props.filterstudentdata(data);
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
            <Button color="inherit">
            <Link to="/" className={classes.navLinks}>Logout</Link>
            </Button>
          </Toolbar>
        </AppBar>

        <Typography className={classes.studenttext}>Student Information</Typography>

        <Grid container spacing={24}>
          <Grid item xs={2}></Grid>
          <Grid item xs={4}>
            <TextField
              id="sscaggregate"
              label="SSC Aggregate"
              className={classes.textboxes}
              type="text"
              name="sscaggregate"
              autoComplete="sscaggregate"
              margin="normal"
              variant="outlined"
              onChange={this.handleChange1}
            />

          </Grid>

          <Grid item xs={4}>
            <TextField
              id="hscaggregate"
              label="HSC Aggregate"
              className={classes.textboxes}
              type="text"
              name="hscaggregate"
              autoComplete="hscaggregate"
              margin="normal"
              variant="outlined"
              onChange={this.handleChange1}
            />
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>

        <Grid container spacing={24}>
          <Grid item xs={2}></Grid>
          <Grid item xs={4}>
            <TextField
              id="collegeaggregate"
              label="College Aggregate"
              className={classes.textboxes}
              type="text"
              name="collegeaggregate"
              autoComplete="collegeaggregate"
              margin="normal"
              variant="outlined"
              onChange={this.handleChange1}
            />

          </Grid>

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
          <Grid item xs={2}></Grid>
        </Grid>

        <Grid container spacing={24}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <Button variant="contained" color="primary" className={classes.textboxes} onClick={this.search}>
              Search
            </Button>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>

        <Grid container spacing={24}>
          <Grid item xs={1}></Grid>
          <Grid item xs={8}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow className={classes.tableText}>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>College</TableCell>
                  <TableCell>Number</TableCell>
                  <TableCell>Gender</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {this.props.data ? this.props.data.map(value => {
            return (
              <TableRow key={value.id}>
                <TableCell component="th" scope="row">
                  {value.Name}
                </TableCell>
                <TableCell >{value.Email}</TableCell>
                <TableCell>{value.Hsc}</TableCell>
                <TableCell>{value.Contact}</TableCell>
                <TableCell>{value.Gender}</TableCell>
              </TableRow>
              );
              }) : "No Data to Show"}

        </TableBody>
            </Table>

          </Grid>
          <Grid item xs={1}></Grid>
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
  },
  table: {
    // minWidth: 700,
    // margin: '40px 0px 0px 0px',
  },
  tableText: {
    // margin: '30px 0px 0px 0px',
  },
});

const mapStateToProps = state => {
  return {
    data: state.CampusReducer.data,
    
  }
}

const mapDispatchToProps = dispatch => {
  return {
    studentdata: () => dispatch(CampusActions.studentdata()),
    filterstudentdata: (data) => dispatch(CampusActions.filterstudentdata(data))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CompanyHome));
