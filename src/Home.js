import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import img1 from './Images/4.jpg';

const styles = theme => ({
    root: {
        backgroundImage: 'url(' + img1 + ')',
        backgroundSize: 'cover',
         height: '640px',

        overflow: 'hidden',
    },
    button1: {
        margin: '200px 0px 10px 400px',
    },
    button2: {
        margin: '200px 0px 10px 40px',
    },
    button3: {
        margin: '200px 0px 10px 40px',
    },
    button4: {
        margin: '200px 0px 10px 40px',
    },
    navLinks: {
        textDecoration: 'none',
        color: 'blue',
        useNextVariants: true,
    },
    homeText: {
        textAlign: 'center',
        margin: '5% 5% 0px 30px',
        fontFamily: 'Bungee Inline',
        fontSize: '30px',
        color: '#20639B'
      },
});



class Home extends Component {

    render() {
        const { classes } = this.props;

        return (

            <div  className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            Campus Recruitment System
                        </Typography>

                    </Toolbar>
                </AppBar>
                <Typography variant="h6" color="inherit" className={classes.homeText}>
                            Welcome to Campus Recruitment System
                </Typography>

                <Button variant="outlined" color="primary" className={classes.button1}>
                    <Link to="/student" className={classes.navLinks}>Student Login</Link>
                </Button>

                <Button variant="outlined" color="primary" className={classes.button3}>
                    <Link to="/company" className={classes.navLinks}>Company Login</Link>
                </Button>

                <Button variant="outlined" color="primary" className={classes.button4}>
                    <Link to="/adminsignin" className={classes.navLinks}>Admin Login</Link>
                </Button>
            </div>


        );
    }
}


export default withStyles(styles)(Home);

