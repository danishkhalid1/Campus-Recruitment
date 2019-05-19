import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    navLinks: {
        textDecoration: 'none',
        color: 'blue',
        useNextVariants: true,
    },
});



class Home extends Component {

    render() {
        const { classes } = this.props;

        return (

            <div>
                <div>
                    
                    <Button variant="outlined" color="primary" className={classes.button}>
                        <Link to="/student" className={classes.navLinks}>Student Login</Link>
                    </Button>

                    <Button variant="outlined" color="primary" className={classes.button}>
                        <Link to="/admin" className={classes.navLinks}>Admin Login</Link>
                    </Button>

                    <Button variant="outlined" color="primary" className={classes.button}>
                        <Link to="/company" className={classes.navLinks}>Company Login</Link>
                    </Button>


                </div>

            </div>

        );
    }
}


export default withStyles(styles)(Home);

