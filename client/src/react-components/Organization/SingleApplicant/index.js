import React from "react";
import Button from "@material-ui/core/Button";
import "./styles.css";
import { ButtonGroup } from "@material-ui/core";
import { Link } from "react-router-dom";
import { acceptApplicant, rejectApplicant } from "../../../actions/decision";
class SingleApplicant extends React.Component {
  state = {
    status: this.props.status
  }
  checkState = (id) => {
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
          this.reject(id)
          
        }}
      >
        reject
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={()=>{
          this.accept(id)
          
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
  accept = (id) => {
    if (window.confirm("Are you sure you want to accept this candidate?")) {
      this.setState({
        status: 'accepted'
      })
      acceptApplicant(id)
    }
  }
  reject = (id) => {
    if (window.confirm("Are you sure you want to reject this candidate?")) {
      this.setState({
        status: 'rejected'
      })
      rejectApplicant(id)
    }
  }
  render() {
    const { name, rank ,jobName, app_id } = this.props;
    const addr = "/organization/volprofile/" + String(app_id)
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
        
        {this.checkState(app_id)}

      </tr>
    );
  }
}

export default SingleApplicant;
