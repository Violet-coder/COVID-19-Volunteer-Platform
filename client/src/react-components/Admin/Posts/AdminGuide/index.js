import React from 'react';
import {MyButton} from '../../AdminBtn';
import AdminNav from '../../AdminNav';
import {Container} from '../../AdminBtn';
import {Link} from 'react-router-dom';
import './styles.css'


class AdminGuide extends React.Component {
    render(){
        const app = this.props.app

        return(
            <div id="fh5co-blog" className="fh5co-bg-section">
                    <AdminNav app={app}/>
                    <div  className='guide-page'>
                        <div className="col-md-8 col-md-offset-2 text-left fh5co-heading">
                            <span>Admin Functionality</span>

                        </div>
                        <div className="col-md-8 col-md-offset-2 text-left animate-box" data-animate-effect="fadeInUp">
                        <div className="fh5co-heading">
                            <h2>Administration Entry</h2>
                            <p>Manage Uers and Posts.</p>
                        </div>
                    </div>
                    <div className="row" id='guide-box'>
                    
                        <div className=' col-md-3 col-sm-4'>
                        <div  className="feature-center animate-box" data-animate-effect="fadeInUp">
                            <Link to='/admin/volunteers'><Container><MyButton>Volunteers</MyButton></Container></Link>

                        </div>
                        </div>
                    
                        <div className=' col-md-3 col-sm-4'>
                        <div className="feature-center animate-box" data-animate-effect="fadeInUp">
                            <Link to='/admin/organizations'><Container><MyButton>Organizations</MyButton></Container></Link>

                        </div>
                        </div>
                    
                        <div className='col-md-3 col-sm-4'>
                        <div className="feature-center animate-box" data-animate-effect="fadeInUp">
                            <Link to='/admin/posts'><Container>
                                <MyButton>Posts</MyButton>
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
