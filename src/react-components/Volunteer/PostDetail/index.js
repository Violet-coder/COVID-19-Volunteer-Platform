import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Link from '@material-ui/core/Link';
import './styles.css'



class PostDetail extends React.Component {
  // const classes = useStyles();
  render(){
  const {post} = this.props
  

  return (
    <div className="post">
    <Paper  elevation={3} style={{ padding:'20px'}}>
      {/* Increase the priority of the hero background image */}
      {/* {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />} */}
      {/* <Grid container spacing={1} > */}
        {/* <Grid item md={6}> */}
          
            {/* <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {post.name}
            </Typography> */}
            <h2>Job Description</h2>
            <h4>{post.description}</h4>
            <h2>Job Requirement</h2>
            <h4>{post.requirement}</h4>
            <h2>Job Location</h2>
            <h4>{post.location}</h4>
        
        {/* </Grid> */}
      {/* </Grid> */}
    </Paper></div>
  );
}}

export default PostDetail;