import React from 'react';

import AdminNav from '../../AdminNav';
import PostArea from '../../../PostArea';
import {uid} from 'react-uid';
import {Link} from 'react-router-dom'
import {adminDeletePost} from '../../../../actions/adminDeletePost';
import {adminApprovePost} from '../../../../actions/adminApprovePost';



class PostList extends React.Component{
    render(){
        const posts = this.props.posts;
        const queueComponent = this.props.queueComponent;
        const desc = 'Administration'
        const title = 'Post Management'
        const subtitle =''
       
        return(
            <div>
                <AdminNav />
                <div id="fh5co-blog" className="fh5co-bg-section">
                    <div className="container">
                        <div className="row animate-box row-pb-md" data-animate-effect="fadeInUp">
                            <div className="col-md-8 col-md-offset-2 text-left fh5co-heading">
                                <span>{desc}</span>
                                <h2>{title}</h2>
                                <p>{subtitle}</p>
                            </div>
                        </div>
                        <div className="row">
                            {posts.map( op => (
                                <div key= {uid(op)}  className="col-md-4 col-sm-4 animate-box post-manage"  data-animate-effect="fadeInUp">
                                    <button type="submit" className="btn btn-primary user-manage" onClick={adminDeletePost.bind(this, queueComponent, op)}>Delete</button>
                                    <Link to={{pathname:`/post/${op.id}`}} ><button type="submit" className="btn btn-primary user-manage"  
                                                >View</button></Link>
                                    {(op.status === 'Approved')? <button type="button" className='btn btn-info'>{op.status}</button> :
                                        <button type="submit" className='btn btn-primary' onClick={adminApprovePost.bind(this,queueComponent,op)} >Approve</button>}

                                    <div className="fh5co-post">
                                        <span className="fh5co-date">{op.date}</span>
                                        <h3>{op.name}</h3>
                                        <p style={{color:"#989898"}}>{op.description}</p>
                                        <p className="author"><cite> {op.organization}</cite></p>
                                    </div>
                                    
                                
                                </div>))}
                                 
                        </div>	       
                    </div>
                </div>

            </div>
        )
    }
}

export default PostList;