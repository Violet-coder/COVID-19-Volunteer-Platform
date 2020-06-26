import React from "react";
import "./styles.css";

/* The Organization Profile Component */
class OrgDetail extends React.Component {
  render() {
    const {info} = this.props;
    
    return (
		<div class="container">
      
      <div class="fh5co-post" style={{minHeight: "100px"}}>
			<h3>Organization Name</h3>
      <hr/>
			<p>{info.name}</p>			
			</div>

			<div class="fh5co-post" style={{minHeight: "300px"}}>
			<h3>Organization Introduction</h3>
      <hr/>
      <p>{info.intro}</p>
			</div>

      <div class="fh5co-post" style={{minHeight: "100px"}}>
			<h3>Website</h3>
      <hr/>
      <p>{info.website}</p>
			</div>
      
    </div>
    );
  }
}

export default OrgDetail;