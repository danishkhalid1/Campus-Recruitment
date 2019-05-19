import React, { Component } from 'react';
import * as firebase from 'firebase';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../firebase/firebaseconfig';


class Companyregister extends Component {
  constructor() {
    super();
    this.state = {
      companyname:'',
      email:'',
      password:'',
      contact:'',
      establish:''
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

          this.ref.child('Company').child(res.user.uid).set({
            Name: this.state.companyname,
            Email: this.state.email,
            Password: this.state.password,
            Contact: this.state.contact,
            Establish: this.state.establish,
          });

          //localStorage.setItem("Students", JSON.stringify(res.students.uid));
          this.props.history.push('/companyhome');

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

  handleChange1 = event => {
    this.setState({ [event.target.id]: event.target.value });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={this.root}>
        <Typography className={classes.Login}>Company Register</Typography>
        <TextField
          id="companyname"
          label="Company Name"
          className={classes.textboxes}
          type="text"
          name="companyname"
          autoComplete="companyname"
          margin="normal"
          variant="outlined"
          onChange={this.handleChange1}
        />
        <br/>
        <TextField
          id="establish"
          label="Established"
          className={classes.textboxes}
          type="text"
          name="establish"
          autoComplete="establish"
          margin="normal"
          variant="outlined"
          onChange={this.handleChange1}
        />
        <br/>
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
        <br/>
        
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
        <br/>
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
        <br />
        <Button variant="contained" color="primary" className={classes.textboxes} onClick={this.signup}>
          Register
      </Button>
      <Typography className={classes.LoginText}> Already have an account?
      <Link to="/company" className={classes.navLinks}>Login Now!</Link>
      </Typography>
      </div>

    );
  }
}

const styles = createMuiTheme => ({

  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textboxes: {
    margin: '10px 0% 0px 32%',
    width: '500px',
  },
  Login: {
    textAlign: 'center',
    fontSize: '25px',
    margin: '50px 0px 30px 0px',
    // color: '#006064',
  },
  typography: {
    useNextVariants: true,
  },
  navLinks: {
    textDecoration: 'none',
    textAlign: 'center',
    // color: '#006064',
  },
  LoginText: {
    margin: '15px 0px 0px 0px',
    textAlign: 'center',
    // color: '#006064',
  },



});

export default withStyles(styles)(Companyregister);
