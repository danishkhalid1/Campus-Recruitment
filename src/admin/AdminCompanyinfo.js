import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CampusActions } from '../store/action/campusaction';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';


class AdminCompanyinfo extends Component {
  
  componentDidMount() {
    this.props.companydata()   
 }

  delete = (value) => {
    this.props.adminDeleteCompany(value);
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container spacing={24}>

          <Grid item xs={12}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow className={classes.tableText}>
                  <TableCell>CompanyName</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Contact</TableCell>
                  <TableCell>Establish</TableCell>
                  <TableCell>Delete</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.companydataredux ? this.props.companydataredux.map(value => {
                  return (

                    <TableRow key={value.Id}>
                      <TableCell component="th" scope="row">
                        {value.Name}
                      </TableCell>
                      <TableCell >{value.Email}</TableCell>
                      <TableCell >{value.Contact}</TableCell>
                      <TableCell >{value.Establish}</TableCell>
                      <TableCell>
                        <IconButton aria-label="Delete" onClick={() => this.delete(value.Id)}>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>

                    </TableRow>
                  );
                }) : null}

              </TableBody>
            </Table>

          </Grid>

        </Grid>

      </div>
    );
  }
}

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


const mapStateToProps = state => {

  return {
    companydataredux: state.CampusReducer.companydataredux,
  }

}

const mapDispatchToProps = dispatch => {
  return {
    companydata: () => dispatch(CampusActions.companydata()),
    adminDeleteCompany:(data) => dispatch(CampusActions.adminDeleteCompany(data)),
  }
}


export default connect(mapStateToProps , mapDispatchToProps)(withStyles(styles)(AdminCompanyinfo));
