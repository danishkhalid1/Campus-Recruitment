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


class AdminPostnewvacancy extends Component {



  componentDidMount() {
    this.props.vacancydata()
  }

  delete = (value) => {

    this.props.adminDeletePostVacancy(value);

  }
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
                  <TableCell>Salary</TableCell>
                  <TableCell>Criteria</TableCell>
                  <TableCell>Job Profile</TableCell>
                  <TableCell>Bond</TableCell>
                  <TableCell>Delete</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.vacancydataredux ? this.props.vacancydataredux.map(value => {
                  return (

                    <TableRow key={value.id}>
                      <TableCell component="th" scope="row">
                        {value.CompanyName}
                      </TableCell>
                      <TableCell >{value.Email}</TableCell>
                      <TableCell >{value.Salary}</TableCell>
                      <TableCell >{value.Criteria}</TableCell>
                      <TableCell >{value.JobProfile}</TableCell>
                      <TableCell >{value.Bond}</TableCell>
                      <TableCell>
                        <IconButton aria-label="Delete" onClick={() => this.delete(value.id)}>
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
    vacancydataredux: state.CampusReducer.vacancydataredux,
  }

}

const mapDispatchToProps = dispatch => {
  return {
    vacancydata: () => dispatch(CampusActions.vacancydata()),
    adminDeletePostVacancy: (data) => dispatch(CampusActions.adminDeletePostVacancy(data)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AdminPostnewvacancy));
