import React from 'react';
import {uid} from 'react-uid';
import {Link} from "react-router-dom";
import {adminDeleteOrganization} from '../../../../actions/deleteUser';
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

export default function OrganizationTable(props) {
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
  //console.log("props",props)
  const organizations = props.organizations;

  return (
    <div id="fh5co-blog" className="fh5co-bg-section">
                <div className="container">
                    <div className="row animate-box row-pb-md" data-animate-effect="fadeInUp">
                        <div className="col-md-8 col-md-offset-2 text-left fh5co-heading">
                            <span>Admin Functionality</span>
                            <h2>Organization Management</h2>
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
            {organizations.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((org) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={uid(org)}>
                      <TableCell className={classes.singleCell} key={columns[0].id} >
                      {org.name}
                      </TableCell>
                      <TableCell className={classes.singleCell} key={columns[1].id} >
                      {org._id}
                      </TableCell>
                      <TableCell className={classes.singleCell} key={columns[2].id} >
                        <Link to={{pathname:`/admin/organizations/orgprofile/${org._id}`}}>
                        <button  type="submit" className="btn btn-info ">View</button></Link>
                      </TableCell>
                      <TableCell className={classes.singleCell} key={columns[3].id}>
                        <Link to={{pathname:`/admin/organizations/editorgprofile/${org._id}`}}> 
                        <button  type="submit" className="btn btn-info">Edit</button></Link>
                      </TableCell>
                      <TableCell className={classes.singleCell} key={columns[4].id}> 
                        
                          <button  type="submit" className="btn btn-primary"  onClick={adminDeleteOrganization.bind(this, props.orgComp, org)}>Delete</button>
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
        count={organizations.length}
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
