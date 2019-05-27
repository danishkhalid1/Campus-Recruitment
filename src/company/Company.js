import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CampusActions } from '../store/action/campusaction';
import { Link } from "react-router-dom";
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Company extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };

  }

    signin = () => {

    let data = {
      email : this.state.email,
      pass : this.state.password,
      // companysignin : this.props.companysignin,
    }
    this.props.companysignin(data);
}


handleChange1 = event => {
  this.setState({ [event.target.id]: event.target.value });
};

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={this.root}>
          <Typography className={classNames(classes.Login)}>Company Login</Typography>
          <TextField
            id="email"
            label="Email"
            className={classNames(classes.textboxes)}
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
            onChange={this.handleChange1}
          />
          <br />
          <TextField
            id="password"
            label="Password"
            className={classNames(classes.textboxes)}
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
          <Typography className={classNames(classes.LoginText)}> Not an account?
      <Link to="/companyregister" className={classNames(classes.navLinks)}>Register Now!</Link>
          </Typography>
        </div>


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
  navLinks: {
    textDecoration: 'none',
    textAlign: 'center',
  },
  LoginText: {
    margin: '15px 0px 0px 0px',
    textAlign: 'center',
  },



});

const mapStateToProps = state => {
  return {
    errorcompanysignin: state.CampusReducer.errorcompanysignin,
    // companysignin: state.CampusReducer.companysignin,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    companysignin: (data) => dispatch(CampusActions.companysignin(data))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Company));

