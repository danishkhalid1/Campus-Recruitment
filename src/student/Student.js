import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class Student extends Component {
  constructor(){
    super();
    this.state = {
      // email : email,
      // password : password
    }
  }

  
  handleChange1 = () => {
    
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
        <Link to="/studenthome" className={classes.navLinks}>Login</Link>
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
    // color: '#006064',
  },
  typography: {
    useNextVariants: true,
  },
  navLinks1: {
    textDecoration: 'none',
    textAlign: 'center',
    // color : 'white',
  },
  navLinks: {
    textDecoration: 'none',
    textAlign: 'center',
     color : 'white',
  },
  LoginText: {
    margin: '15px 0px 0px 0px',
    textAlign: 'center',
    // color: '#006064',
  },



});

export default withStyles(styles)(Student);
