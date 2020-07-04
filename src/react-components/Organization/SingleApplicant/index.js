import React from "react";
import Button from "@material-ui/core/Button";
import "./styles.css";
import { ButtonGroup } from "@material-ui/core";
import { Link } from "react-router-dom";
class Applicant extends React.Component {
  //applicants information should be requested from the database
  //rejecting or accepting an applicant should make a change to the database
  state = {
    status: this.props.status
  }
  checkState = (context, id) => {
    if (this.state.status==='rejected') {
      return (
        <td className='status'>
        <p className='rejected'>Rejected</p>
        </td>
      )
    }
    if (this.state.status==='accepted') {
      return (
        <td className='status'>
        <p className='accepted'>Accepted</p>
        </td>
      )
    }
    else if (this.state.status==='pending') {
      return (
      <td className='status'>
        <ButtonGroup style={{width: 250}}>
      <Button
        variant="contained"
        color="secondary"
        style={{fontSize: 12}}
        onClick={()=>{
          this.reject(context, id)
        }}
      >
        reject
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={()=>{
          this.accept(context, id)
        }}
        style={{fontSize: 12}}
      >
        accept
      </Button>
      </ButtonGroup>
    </td>
      )
    }
    
  }
  accept = (context, id) => {
    if (window.confirm("Are you sure you want to accept this candidate?")) {
      this.setState({
        status: 'accepted'
      })
      let appList = context.state.applicants
      for (var i in appList) {
        if (appList[i].id===id) {
          appList[i].status='accepted'
          break
        }
      }
      context.setState({
        applicants: appList
      })
    }
  }
  reject = (context, id) => {
    if (window.confirm("Are you sure you want to reject this candidate?")) {
      this.setState({
        status: 'rejected'
      })
      let appList = context.state.applicants
      for (var i in appList) {
        if (appList[i].id===id) {
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
    const { name, rank ,jobName, context, id } = this.props;
    const addr = "/organization/volprofile/" + String(id)
    return (
      <tr key={name} className="fh5co-post" id='row'>
        <td>
          <p className='name'>{name}</p>
        </td>
        <td>
          <p className='job'>{jobName}</p>
        </td>
        <td>
         <p className='rank'>{rank}</p>
        </td>
        <td id='detail'>
        <Link to={addr}>
          <Button
            variant="contained"
            color="default"
            style={{fontSize: 12, width: 150}}
          >
            detail
          </Button>
          </Link>
        </td>
        
        {this.checkState(context, id)}

      </tr>
    );
  }
}

export default Applicant;
