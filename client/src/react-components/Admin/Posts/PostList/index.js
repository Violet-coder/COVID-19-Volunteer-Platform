import React from 'react';

import AdminNav from '../../AdminNav';
import {uid} from 'react-uid';
import {withRouter,Link} from 'react-router-dom'
import {adminDeletePost} from '../../../../actions/adminDeletePost';
import {adminApprovePost} from '../../../../actions/adminApprovePost';
import {BackButton} from '../../Hook/backButton';



class PostList extends React.Component{
    constructor(props) {
        super(props);
        this.props.history.push('/admin/posts')
        this.state = {
            posts: [],
            dataIsReturned: false
        }
    } 

    componentDidMount() {

        const url = "/posts"
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
        //here we get post data from global state
        //in phase2 get data from database
        const posts = this.state.posts;
        posts.reverse();

        const desc = 'Administration'
        const title = 'Post Management'
        const subtitle =''
        const app = this.props.app

       
        return(
            <div>
                <AdminNav app={app} />
                {this.state.dataIsReturned ? 
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
                                    <button type="submit" className="btn btn-primary user-manage" onClick={adminDeletePost.bind(this, this, op)}>Delete</button>
                                    <Link to={{pathname:`/admin/posts/${op._id}`}} ><button type="submit" className="btn btn-primary user-manage"  
                                                >View</button></Link>
                                    {(op.status === 'Approved')? <button type="button" className='btn btn-info disabled'>{op.status}</button> :
                                        <button type="submit" className='btn btn-primary' onClick={adminApprovePost.bind(this,this,op)} >Approve</button>}

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
                : <h1>Loading</h1>}
                <div className='fh5co-bg-section'><div id='update-button' className="fh5co-bg-section"><BackButton /></div></div>
            </div>
        )
    }
}

export default withRouter(PostList);