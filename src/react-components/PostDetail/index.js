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
  

  return (
  
		<div class="container">
      
      <div class="fh5co-post" style={{minHeight: "300px"}}>
			<h3>Job Description</h3>
      <hr/>
			<p>{post.description}</p>			
			</div>

			<div class="fh5co-post" style={{minHeight: "300px"}}>
			<h3>Skills needed</h3>
      <hr/>
      <p>{post.requirement}</p>
			</div>

      <div class="fh5co-post">
			<h3>Location</h3>
      <hr/>
      <p>{post.location}</p>
			</div>
      
    </div>
    
    
  );
}}

export default PostDetail;