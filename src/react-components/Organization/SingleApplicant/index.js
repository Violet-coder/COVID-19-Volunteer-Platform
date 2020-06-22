import React from "react";
import Button from "@material-ui/core/Button";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import "./styles.css";
import { ButtonGroup } from "@material-ui/core";
class Applicant extends React.Component {
  state = {
    status: this.props.status
  }
  checkState = (context, name) => {
    if (this.state.status=='rejected') {
      return (
        <TableCell component="th" scope="row">
        <p className='rejected'>Rejected</p>
        </TableCell>
      )
    }
    if (this.state.status=='accepted') {
      return (
        <TableCell component="th" scope="row">
        <p className='accepted'>Accepted</p>
        </TableCell>
      )
    }
    else if (this.state.status=='pending') {
      return (
      <TableCell component="th" scope="row">
        <ButtonGroup style={{width: 180}}>
      <Button
        variant="contained"
        color="secondary"
        style={{fontSize: 12}}
        onClick={()=>{
          this.reject(context, name)
        }}
      >
        reject
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={()=>{
          this.accept(context, name)
        }}
        style={{fontSize: 12}}
      >
        accept
      </Button>
      </ButtonGroup>
    </TableCell>
      )
    }
    
  }
  accept = (context, name) => {
    if (window.confirm("Are you sure you want to accept this candidate?")) {
      this.setState({
        status: 'accepted'
      })
      let appList = context.state.applicants
      for (var i in appList) {
        if (appList[i].name==name) {
          appList[i].status='accepted'
          break
        }
      }
      context.setState({
        applicants: appList
      })
    }
  }
  reject = (context, name) => {
    if (window.confirm("Are you sure you want to reject this candidate?")) {
      this.setState({
        status: 'rejected'
      })
      let appList = context.state.applicants
      for (var i in appList) {
        if (appList[i].name==name) {
          appList[i].status='rejected'
          break
        }
      }
      context.setState({
        applicants: appList
      })
    }
  }
  render() {
    const { name, rank ,jobName, context } = this.props;
    return (
      <TableRow key={name}>
        <div className="feature-center animate-box" data-animate-effect="fadeInUp">
        <TableCell component="th" scope="row" style={{fontSize:20}}>
          <p className='name'>{name}</p>
        </TableCell>
        <TableCell component="th" scope="row" style={{fontSize:20}}>
          <p className='job'>{jobName}</p>
        </TableCell>
        <TableCell component="th" scope="row" style={{fontSize:20}}>
        {rank}
        </TableCell>
        <TableCell component="th" scope="row">
          <Button
            variant="contained"
            color="default"
            style={{fontSize: 12}}
          >
            detail
          </Button>
        </TableCell>
        {this.checkState(context, name)}
        
        </div>
              
      </TableRow>
    );
  }
}

export default Applicant;
