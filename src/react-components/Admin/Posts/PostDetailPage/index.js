import React from "react";
import AdminNav from '../../AdminNav';
import Header_appli from '../../../../react-components/Volunteer/Header_appli';
import PostDetail from '../../../../react-components/PostDetail';
import {Link} from 'react-router-dom';
import {BackButton} from '../../Hook/backButton';
import './styles.css'

class PostDetailPage extends React.Component{
    render(){
        const post=this.props.post
        return(
            <div>
            <AdminNav />
            <Header_appli title={post.name} subtitle={post.organization}/>
            <div id="fh5co-blog" className="fh5co-bg-section">
            <div className="container">
            <PostDetail post={post}/>
            <div className="detailpagebutton">
            <span ><Link to={{pathname:`/admin/organizations/orgprofile/${post.orgId}`}}><button className='btn btn-primary'>
            Organization Profile
            </button></Link><BackButton className="Organizationbutton"/></span>
            
            </div>
            </div>
            </div>
            </div>
        )

    }
}

export default PostDetailPage;