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


class CompanyPostNewVacancy extends Component {


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

        <Typography className={classes.studenttext}>Post New Vacancy</Typography>

        <Grid container spacing={24}>
          <Grid item xs={2}></Grid>
          <Grid item xs={4}>
            <TextField
              id="companyname"
              label="Comapany Name"
              className={classes.textboxes}
              type="text"
              name="companyname"
              autoComplete="companyname"
              margin="normal"
              variant="outlined"
              onChange={this.handleChange1}
            />

          </Grid>

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
          <Grid item xs={2}></Grid>
        </Grid>

        <Grid container spacing={24}>
          <Grid item xs={2}></Grid>
          <Grid item xs={4}>
            <TextField
              id="salary"
              label="Salary"
              className={classes.textboxes}
              type="number"
              name="salary"
              autoComplete="salary"
              margin="normal"
              variant="outlined"
              onChange={this.handleChange1}
            />

          </Grid>

          <Grid item xs={4}>
            <TextField
              id="criteria"
              label="Eligibility Criteria"
              className={classes.textboxes}
              type="text"
              name="criteria"
              autoComplete="criteria"
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
              id="bond"
              label="Bond (if reguired)"
              className={classes.textboxes}
              type="text"
              name="bond"
              autoComplete="bond"
              margin="normal"
              variant="outlined"
              onChange={this.handleChange1}
            />

          </Grid>

          <Grid item xs={4}>
            <TextField
              id="email"
              label="Email"
              className={classes.textboxes}
              type="email"
              name="email"
              autoComplete="email"
              margin="normal"
              variant="outlined"
              onChange={this.handleChange1}
            />
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>

        <Grid container spacing={24}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <Button variant="contained" color="primary" className={classes.textboxes} onClick={this.signin}>
              Post
            </Button>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>



      </div>
    );
  }
}

const styles = theme => ({
  root: {
    flexGrow: 1,
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
  navLinks: {
    textDecoration: 'none',
    textAlign: 'center',
    color: 'white',
  },

});


export default withStyles(styles)(CompanyPostNewVacancy);
