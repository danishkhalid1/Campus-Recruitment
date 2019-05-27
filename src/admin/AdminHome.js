import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CampusActions } from '../store/action/campusaction';
import Adminstudentinfo from './Adminstudentinfo';
import AdminCompanyinfo from './AdminCompanyinfo';
import AdminPostnewvacancy from './AdminPostnewvacancyinfo';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';



function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  grow: {
    flexGrow: 1,
  },
  navLinks: {
    textDecoration: 'none',
    textAlign: 'center',
    color: 'white',
  },
});

class AdminHome extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };




  signout = () => {
    this.props.signout()
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;


    return (
      <div>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" color="inherit" className={classes.grow}>
                Campus Recruitment System
          </Typography>
              <Tabs value={value} onChange={this.handleChange}>
                <Tab label="Student Data" />
                <Tab label="Company Data" />
                <Tab label="Post New Vacancy Data" />
              </Tabs>
              <Button color="inherit" onClick={this.signout}>
                Logout
              </Button>
            </Toolbar>
          </AppBar>
          {/* Student data show */}
          {value === 0 && <TabContainer>
            <Adminstudentinfo />
          </TabContainer>}

          {/* Company data show */}

          {value === 1 && <TabContainer>
            <AdminCompanyinfo />
          </TabContainer>}

          {/* POST NEW VACANCY DATA */}
          {value === 2 && <TabContainer>
            <AdminPostnewvacancy />
          </TabContainer>}

        </div>

      </div>

    );
  }
}

AdminHome.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {

  return {
  }

}

const mapDispatchToProps = dispatch => {
  return {
    signout: () => { dispatch(CampusActions.signout()) }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AdminHome));
