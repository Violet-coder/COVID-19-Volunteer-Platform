import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

class AdminNav extends React.Component {
    render(){
        return(
            <nav className="admin-nav" role="navigation">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-2 text-left">
                            <div id="admin-logo" ><a href="/" >VOLUNTEER<span>.</span></a></div>
                        </div>
                        <div className="col-xs-10 text-right menu-1">
                            <ul>
                                <li><a href="/admin" >Home</a></li>
                                <li><a href="/">Log Out</a></li>
                                <li>
                                    <Link to='/admin/publishpost'><button type="submit" className="btn btn-primary navBtn">Create New Post</button></Link>
                                </li>
        
                            
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </nav>
        )
    }
}

export default AdminNav;