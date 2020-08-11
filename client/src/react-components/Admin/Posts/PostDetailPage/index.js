import React from "react";
import AdminNav from '../../AdminNav';
import Header_appli from '../../../../react-components/Volunteer/Header_appli';
import PostDetail from '../../../../react-components/PostDetail';
import {Link} from 'react-router-dom';
import {BackButton} from '../../Hook/backButton';
import {adminApprovePost} from '../../../../actions/adminApprovePost';

import './styles.css'

class PostDetailPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            dataIsReturned: false,
        }
        
    }

    componentDidMount() {
        console.log('jjjjjj')
        
            console.log('test')
            const url = `/post/${id}`
            fetch(url)
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                } else {
                    alert("Could not get posts");
                }
            })
            .then(json => {
                // the resolved promise with the JSON body
                this.setState({ posts: json, dataIsReturned: true });
            })
            .catch(error => {
                console.log(error);
            });
        
    }

    
    render(){
        console.log("post detail page")
        const post=this.props.post
        console.log("post detail", post)
        const queueComponent=this.props.queueComponent

        const status = post.status

        const app = this.props.app

        return(
            <div>
            <AdminNav app={app}/>
            <Header_appli title={post.name} subtitle={post.organization}/>
            <div id="fh5co-blog" className="fh5co-bg-section">
            <div className="container">
            <PostDetail post={post}/>
            <div className="detailpagebutton">
            <span ><Link to={{pathname:`/admin/organizations/orgprofile/${post.orgId}`}}><button className='btn btn-primary'>
            Organization Profile
            </button></Link>
            {(status !== 'Approved')?<button className='btn btn-primary' onClick={adminApprovePost.bind(this,queueComponent,post)}>Approve This Post</button> :
            <button className='btn btn-success'>Approved</button>} 
            <BackButton className="Organizationbutton"/>
            </span>
            
            </div>
            </div>
            </div>
            </div>
        )

    }
}

export default PostDetailPage;