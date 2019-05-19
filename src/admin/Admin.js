import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Admin extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
      <div className={this.root}>
        <Typography className={classNames(classes.Login)}>Admin Login</Typography>
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
        <br/>
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

export default withStyles(styles)(Admin);
