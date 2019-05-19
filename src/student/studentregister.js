import React, { Component } from 'react';
import * as firebase from 'firebase';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import '../firebase/firebaseconfig';

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



class Studentregister extends Component {
  constructor() {
    super();
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
    this.ref = firebase.database().ref();
  }

  signup = () => {

    let emal = this.state.email;
    let pass = this.state.password;

    firebase.auth().createUserWithEmailAndPassword(emal, pass)
      .then((res) => {
        console.log(res);
        if (res) {

          this.ref.child('students').child(res.user.uid).set({
            Name: this.state.name,
            Gender: this.state.gender,
            Email: this.state.email,
            Password: this.state.password,
            Contact: this.state.contact,
            City: this.state.city,
            Address: this.state.address,
            Age: this.state.age,
            School: this.state.school,
            Hsc: this.state.hsc,
            Uni: this.state.uni,
            Dept: this.state.dept,
            id:res.user.uid,
          });

          //localStorage.setItem("Students", JSON.stringify(res.students.uid));
          this.props.history.push('/studenthome');

        }
      })
      .catch((e) => {
        console.log("error", e);
        switch (e.code) {
          case 'auth/weak-password':
            alert(e.message)
            break;
          case 'auth/email-already-in-use':
            alert(e.message)
            break;
          default: alert("Not Found")
        }
      })
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
    //this.setState({ [event.target.id]: event.target.value });
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
              id="dept"
              label="Department"
              className={classes.textboxes}
              type="text"
              name="dept"
              autoComplete="dept"
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
export default withStyles(styles)(Studentregister);
