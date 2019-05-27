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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class FindCompanies extends Component {


  componentWillMount() {
    this.props.companydata();
  }

  signout = () => {
    this.props.signout()
  }
  
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
            <Button color="inherit" onClick={this.signout}>
              Logout
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
                  <TableCell>Company Establish</TableCell>
                  <TableCell>Company Contact</TableCell>
                  <TableCell>Company Email</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.companydataredux ? this.props.companydataredux.map(value => {
                  return (
                    <TableRow key={value.Id}>
                      <TableCell component="th" scope="row">
                        {value.Name}
                      </TableCell>
                      <TableCell >{value.Establish}</TableCell>
                      <TableCell>{value.Contact}</TableCell>
                      <TableCell>{value.Email}</TableCell>
                    </TableRow>
                  );
                }) : null}
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

});

const mapStateToProps = state => {
  return {

    companydataredux: state.CampusReducer.companydataredux,
  }

}

const mapDispatchToProps = dispatch => {
  return {
    companydata: () => dispatch(CampusActions.companydata()),
    signout: () => { dispatch(CampusActions.signout()) }

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(FindCompanies));
