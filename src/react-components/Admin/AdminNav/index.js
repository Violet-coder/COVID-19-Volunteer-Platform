import React from 'react';
import './styles.css'

class AdminNav extends React.Component {
    render(){
        return(
            <nav class="admin-nav" role="navigation">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-2 text-left">
                            <div id="admin-logo" ><a href="/" >VOLUNTEER<span>.</span></a></div>
                        </div>
                        <div class="col-xs-10 text-right menu-1">
                            <ul>
                                <li><a href="/" >Home</a></li>
                                <li><a href="#">Log Out</a></li>
                                <li>
                                    <button type="submit" class="btn btn-primary navBtn">Create New Post</button>
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