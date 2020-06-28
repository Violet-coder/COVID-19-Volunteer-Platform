import React from 'react';
import {MyButton} from '../../AdminBtn';
import AdminNac from '../../AdminNav';
import AdminNav from '../../AdminNav';
import {Container} from '../../AdminBtn';
import { shadows } from '@material-ui/system';
import {Link} from 'react-router-dom';

class AdminGuide extends React.Component {
    render(){
        return(
            <div id="fh5co-blog" className="fh5co-bg-section">
                    <AdminNav />
                    <div id="fh5co-started guide-page">
                        <div className="col-md-8 col-md-offset-2 text-left fh5co-heading">
                            <span>Admin Functionality</span>

                        </div>
                    <div className="row ">
                    
                    <div className=' col-md-4 col-sm-6'>
                    <div className="feature-center animate-box" data-animate-effect="fadeInUp">
                        <Link to='/admin/volunteers'><Container shadows={0}><MyButton>User Management</MyButton></Container></Link>

                        </div>
                    </div>
                    
            
                    
                    <div className='col-md-4 col-sm-6'>
                    <div className="feature-center animate-box" data-animate-effect="fadeInUp">
                        <Link to='/admin/posts'><Container shadows={0}>
                            <MyButton>Post Management</MyButton>
                            </Container></Link>
                        
                    </div>
                    </div>
                    </div>
                    
                </div>
                </div>
                
                
            
        )
    }
}

export default AdminGuide;
