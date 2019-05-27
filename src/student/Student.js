import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CampusActions } from '../store/action/campusaction';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class Student extends Component {
  constructor(){
    super();
    this.state = {
      email : '',
      password : '',
    }
  }

  
  handleChange1 = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  signin = () => {
    let data = {
      email : this.state.email,
      pass: this.state.password
    }
    this.props.studentsignin(data);
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={this.root}>
        <Typography className={classes.Login}>Student Login</Typography>
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
        <Button variant="contained" color="primary" className={classes.textboxes} onClick={this.signin}>
        Login
      </Button>
      <Typography className={classes.LoginText}> Not an account?
      <Link to="/studentregister" className={classes.navLinks1}>Register Now!</Link>
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
  },
  typography: {
    useNextVariants: true,
  },
  navLinks1: {
    textDecoration: 'none',
    textAlign: 'center',
  },
  navLinks: {
    textDecoration: 'none',
    textAlign: 'center',
     color : 'white',
  },
  LoginText: {
    margin: '15px 0px 0px 0px',
    textAlign: 'center',
  },



});


const mapStateToProps = state => {
  return {
    errorstudentsignin: state.CampusReducer.errorstudentsignin,

  }
}

const mapDispatchToProps = dispatch => {
  return {
    studentsignin: (data) => dispatch(CampusActions.studentsignin(data))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Student));

