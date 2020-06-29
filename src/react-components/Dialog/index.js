import React, { Component } from  'react';
import { Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './styles.css';


let dialogStyles = {
    width: '500px',
    margin:'0 auto',
    position:'fixed',
    left:'50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex:'999',
    backgroundColor: '#F1F5F9',
    padding: '10px 20px 40px',
    borderRadius: '8px',
    display:'flex',
    flexDirection:'column',
    // textAlign: 'center'
};

let dialogCloseButtonStyles = {
    marginBottom:'15px',
    padding: '3px 8px',
    cursor: 'pointer',
    borderRadius: '50%',
    border:'none',
    width:'30px',
    height:'30px',
    fontWeight:'bold',
    alignSelf:'flex-end',
    display:'inline-block'
};

class Dialog extends Component {
    render(){
        let dialog = (
            <div style={dialogStyles}>
                <button style={dialogCloseButtonStyles} onClick={this.props.onClose}>X</button>
                <span>{this.props.children}</span>
                <div className="popupbutton">
                <span ><Link to={{pathname:'/login'}}><Button className="Loginfirst" variant="contained" color="secondary">Log In</Button></Link></span>
                </div>
            </div>);
        if (! this.props.isOpen) {
            dialog = null
        }
        return (
            <div>
                {dialog}
            </div>

        )
    }
}

export default Dialog;