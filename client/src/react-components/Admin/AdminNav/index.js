import React from 'react';
import { withRouter,Link } from 'react-router-dom';
import './styles.css'
import {logout} from '../../../actions/login';


class AdminNav extends React.Component {
    logoutUser = (app) => {
		console.log("log out admin")
        this.props.history.push("/login");
        logout(app);
	};
    render(){
        const app = this.props.app
        return(
            <nav className="admin-nav" role="navigation">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-2 text-left">
                            <div id="admin-logo" ><a href="/" >VOLUNTEER<span>.</span></a></div>
                        </div>
                        <div className="col-xs-10 text-right menu-1">
                            <ul>
                                <li><Link to={"/admin/entry"} >Home</Link></li>
                                <li><Link><a onClick={() =>{
                                    this.logoutUser(app)} }>Log Out</a></Link></li>
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

export default withRouter(AdminNav);