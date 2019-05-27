import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CampusActions } from '../store/action/campusaction';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';


const ranges = [
  {
    value: 'Male',
    label: 'Male',
  },
  {
    value: 'Female',
    label: 'Female',
  }
];

const ranges1 = [
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


class Studentregister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      gender: '',
      email: '',
      password: '',
      contact: '',
      city: '',
      address: '',
      age: '',
      school: '',
      hsc: '',
      uni: '',
      dept: '',
    };
  }

  signup = () => {

    let data = {
      name : this.state.name,
      gender: this.state.gender,
      email: this.state.email,
      pass: this.state.password,
      contact: this.state.contact,
      city: this.state.city,
      address: this.state.address,
      age: this.state.age,
      school: this.state.school,
      hsc: this.state.hsc,
      uni: this.state.uni,
      dept: this.state.dept,
    }
    this.props.studentsignup(data);

  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleChange1 = event => {
    this.setState({ [event.target.id]: event.target.value });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>

        <Typography className={classes.studenttext}>Student Register</Typography>

        <Grid container spacing={24}>
          <Grid item xs={2}></Grid>
          <Grid item xs={4}>
            <TextField
              id="name"
              label="Name"
              className={classes.textboxes}
              type="text"
              name="name"
              autoComplete="name"
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
              id="gender"
              label="Gender"
              value={this.state.gender}
              onChange={this.handleChange('gender')}

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

          <Grid item xs={4}>
            <TextField
              id="password"
              label="Password"
              className={classes.textboxes}
              type="password"
              name="password"
              autoComplete="password"
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
              id="contact"
              label="Contact"
              className={classes.textboxes}
              type="number"
              name="contact"
              autoComplete="contact"
              margin="normal"
              variant="outlined"
              onChange={this.handleChange1}
            />

          </Grid>

          <Grid item xs={4}>
            <TextField
              id="city"
              label="City"
              className={classes.textboxes}
              type="text"
              name="city"
              autoComplete="city"
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
              id="address"
              label="Address"
              className={classes.textboxes}
              type="text"
              name="address"
              autoComplete="address"
              margin="normal"
              variant="outlined"
              onChange={this.handleChange1}
            />

          </Grid>

          <Grid item xs={4}>
            <TextField
              id="age"
              label="Age"
              className={classes.textboxes}
              type="number"
              name="age"
              autoComplete="age"
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
              id="school"
              label="School"
              className={classes.textboxes}
              type="text"
              name="school"
              autoComplete="school"
              margin="normal"
              variant="outlined"
              onChange={this.handleChange1}
            />

          </Grid>

          <Grid item xs={4}>
            <TextField
              id="hsc"
              label="HSC"
              className={classes.textboxes}
              type="text"
              name="hsc"
              autoComplete="hsc"
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
              id="uni"
              label="University"
              className={classes.textboxes}
              type="text"
              name="uni"
              autoComplete="uni"
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
              id="dept"
              label="Department"
              value={this.state.dept}
              onChange={this.handleChange('dept')}

            >
              {ranges1.map(option => (
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
            <Button variant="contained" color="primary" className={classes.textboxes} onClick={this.signup}>
              Register
            </Button>
            <Typography className={classes.LoginText}> Already have an account?
              <Link to="/student" className={classes.navLinks}>Login Now!</Link>
            </Typography>
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

const mapStateToProps = state => {
  return {
    errorstudentsignup: state.CampusReducer.errorstudentsignup,

  }
}

const mapDispatchToProps = dispatch => {
  return {
    studentsignup: (data) => dispatch(CampusActions.studentsignup(data))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Studentregister));

