import React from "react";
import { uid } from "react-uid";
import { Link} from 'react-router-dom'
import PostDetailPage from '../../../Pages/Volunteer/PostDetailPage'
import { Route} from 'react-router-dom';

class Recommended_ops extends React.Component{
    render(){
       
       const {queueComponent, posts} = this.props
       /* console.log("props",this.props)
    
       console.log("queueComponentinRec"+queueComponent)
       console.log("posts"+posts) */

       return(
        <div id="fh5co-blog" className="fh5co-bg-section">
		<div className="container">
			<div className="row animate-box row-pb-md" data-animate-effect="fadeInUp">
				<div className="col-md-8 col-md-offset-2 text-left fh5co-heading">
					<h2>Recommended Opportunities</h2>
					<p>See what we selected for you</p>
				</div>
			</div> 
        <div className="row">
            {posts.map(post => (
            <div key={uid(post)} className="col-md-4 col-sm-4 animate-box" data-animate-effect="fadeInUp">
            <div className="fh5co-post">
                <span className="fh5co-date">{ post.date }</span>
                <h3><Link to={{pathname:`/post/${post.id}`, query:queueComponent}} >{ post.name }</Link></h3>
                {/* {console.log(queueComponent)} */}
                <p>{ post.description }</p>
            <p className="author"><cite>{ post.organization }</cite></p>
            </div>
        </div>  
          ))}
          <div className="center">
					<p><span><button type="submit" className="btn btn-primary">See All</button></span></p>
				</div>
			</div>		
		</div>
        </div>
       )
    }
}

export default Recommended_ops;