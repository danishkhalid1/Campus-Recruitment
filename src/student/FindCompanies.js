import React, { Component } from 'react';
// import PropTypes from 'prop-types';
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
import '../firebase/firebaseconfig';

class FindCompanies extends Component {


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
            <Link to="/studenthome" className={classes.navLinks}>Vacancy</Link>
            </Button>
            <Button color="inherit">
            <Link to="/findcompanies" className={classes.navLinks}>Find Companies</Link>
            </Button>
            <Button color="inherit">
            <Link to="/" className={classes.navLinks}>Logout</Link>
            </Button>
          </Toolbar>
        </AppBar>

        <Typography className={classes.studenttext}>Find Companies</Typography>

        <Grid container spacing={24}>
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow className={classes.tableText}>
                  <TableCell>Company Name</TableCell>
                  <TableCell>Company HR</TableCell>
                  <TableCell>Company Contact</TableCell>
                  <TableCell>Company Email</TableCell>
                </TableRow>
              </TableHead>
              {/* <TableBody>
          {this.state.data.map(value => {
            return (
              <TableRow key={value.id}>
                <TableCell component="th" scope="row">
                  {value.username}
                </TableCell>
                <TableCell >{value.email}</TableCell>
                <TableCell>{value.bloodgroup}</TableCell>
                <TableCell>{value.number}</TableCell>
                <TableCell>{value.gender}</TableCell>
              </TableRow>
            );
          })}
        </TableBody> */}
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


export default withStyles(styles)(FindCompanies);
