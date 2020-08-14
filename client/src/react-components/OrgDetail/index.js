import React from "react";
import "./styles.css";

/* The Organization Profile Component */
class OrgDetail extends React.Component {
  render() {
    const {org} = this.props;

    return (
		<div className="container" style={{marginTop:"60px"}}>
      
      <div className="fh5co-post" style={{minHeight: "100px"}}>
			<h3>Organization Name</h3>
      <hr/>
			<p>{org.name}</p>			
			</div>

			<div className="fh5co-post" style={{minHeight: "300px"}}>
			<h3>Organization Introduction</h3>
      <hr/>
      <p>{org.info}</p>
			</div>

      <div className="fh5co-post" style={{minHeight: "100px"}}>
			<h3>Website</h3>
      <hr/>
      <p>{org.website}</p>
			</div>
      
    </div>
    );
  }
}

export default OrgDetail;