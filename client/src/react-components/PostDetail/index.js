import React from 'react';
import './styles.css'
import "../../css/animate.css";
import "../../css/icomoon.css";
import "../../css/bootstrap.css";
import "../../css/magnific-popup.css";
import "../../css/style.css";

class PostDetail extends React.Component {
  // const classes = useStyles();
  render(){
  const {post} = this.props
  const requirements = new Array(post.requirements)
  

  return (
  
		<div className="container">
      
      <div className="fh5co-post" style={{minHeight: "300px"}}>
			<h3>Job Description</h3>
      <hr/>
			<p>{post.description}</p>			
			</div>

			<div className="fh5co-post" style={{minHeight: "300px"}}>
			<h3>Skills Needed</h3>
      <hr/>
      { requirements[0] ? requirements[0].map(requirement => (<p>{requirement}</p>)) :null }
      
      
			</div>

      <div className="fh5co-post" style={{minHeight: "250px"}}>
			<h3>Location</h3>
      <hr/>
      <p>{post.location}</p>
			</div>
      
    </div>
    
    
  );
}}

export default PostDetail;