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


class Adminstudentinfo extends Component {

  componentDidMount() {
    this.props.studentdata()
  }
  delete = (value) => {
    this.props.adminDeleteStudent(value);
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div>
          <Grid container spacing={24}>

            <Grid item xs={12}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow className={classes.tableText}>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>City</TableCell>
                    <TableCell>Contact</TableCell>
                    <TableCell>Department </TableCell>
                    <TableCell>Uni </TableCell>
                    <TableCell>HSC </TableCell>
                    <TableCell>SSC </TableCell>
                    <TableCell>Delete </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.props.studentdataredux ? this.props.studentdataredux.map(value => {
                    return (

                      <TableRow key={value.id}>
                        <TableCell component="th" scope="row">
                          {value.Name}
                        </TableCell>
                        <TableCell >{value.Email}</TableCell>
                        <TableCell >{value.Address}</TableCell>
                        <TableCell >{value.Age}</TableCell>
                        <TableCell >{value.City}</TableCell>
                        <TableCell >{value.Contact}</TableCell>
                        <TableCell >{value.Dept}</TableCell>
                        <TableCell>{value.Uni}</TableCell>
                        <TableCell>{value.Hsc}</TableCell>
                        <TableCell>{value.School}</TableCell>
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

    studentdataredux: state.CampusReducer.studentdataredux,
  }

}

const mapDispatchToProps = dispatch => {
  return {
    studentdata: () => dispatch(CampusActions.studentdata()),
    adminDeleteStudent: (data) => dispatch(CampusActions.adminDeleteStudent(data)),

  }
}



export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Adminstudentinfo));
