import React from 'react';
import {uid} from 'react-uid';
import {Link} from "react-router-dom";
import {adminDeleteVolunteer} from "../../../actions/deleteUser";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';


const columns = [
  { id: 'name', label: 'Name', minWidth: 150 },
  {
    id: 'id',
    label: 'ID',
    minWidth: 100,
  },

  {
    id: 'view',
    label: 'View',
    minWidth: 100,
  },
  {
    id: 'edit',
    label: 'Edit',
    minWidth: 100,
  },
  {
    id: 'delte',
    label: 'Delete',
    minWidth: 100,
  },
];

const useStyles = makeStyles({
  root: {
    width: '100%',

  },
  container: {
    maxHeight: '100%',
    backgroundColor:'transparent',
  },
  singleRow: {
    lineHeight:2.4,
    fontSize:20,
    fontFamily:'Roboto',
    align: 'center',


  },
  singleCell:{
    lineHeight:2.4,
    fontSize:20,
    fontFamily:'Roboto',
    align: 'center',

  }
});

export default function VolUserTable(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const volusers = props.volunteers;


  return (
    <div id="fh5co-blog" className="fh5co-bg-section">
                <div className="container">
                    <div className="row animate-box row-pb-md" data-animate-effect="fadeInUp">
                        <div className="col-md-8 col-md-offset-2 text-left fh5co-heading">
                            <span>Admin Functionality</span>
                            <h2>User Management</h2>
                        </div>
                    </div>  
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow className={classes.singleRow}>
              {columns.map((column) => (
                <TableCell className={classes.singleRow}
                  key={column.id}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {volusers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((vol) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={uid(vol)}>
                      <TableCell className={classes.singleCell} key={columns[0].id} >
                      {vol.firstName+" "+vol.lastName}
                      </TableCell>
                      <TableCell className={classes.singleCell} key={columns[1].id} >
                      {vol._id}
                      </TableCell>
                      <TableCell className={classes.singleCell} key={columns[2].id} >
                        <Link to={{pathname:`/admin/volunteers/volprofile/${vol._id}`}}>
                        <button  type="submit" className="btn btn-info ">View</button></Link>
                      </TableCell>
                      <TableCell className={classes.singleCell} key={columns[3].id}>
                        <Link to={{pathname:`/admin/volunteers/editvolprofile/${vol._id}`}}> 
                        <button  type="submit" className="btn btn-info">Edit</button></Link>
                      </TableCell>
                      <TableCell className={classes.singleCell} key={columns[4].id}> 
                        
                          <button  type="submit" className="btn btn-primary"  onClick={adminDeleteVolunteer.bind(this, props.volComp, vol)}>Delete</button>
                      </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={volusers.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
    </div>
    </div>

  );
}
