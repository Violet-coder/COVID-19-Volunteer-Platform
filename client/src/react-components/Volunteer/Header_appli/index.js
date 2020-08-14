import React from "react";

import "./styles.css";

/* The Header Component */
class Header_appli extends React.Component {
  render() {
	const { title, subtitle } = this.props;
	const app = this.props.app
	

    return (
        <div id="fh5co-started">
		<div className="container">
			<div className="row animate-box">
				<div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
					<span id='header-sub'>{ subtitle }</span>
					<h2 id='header-title'>{ title }</h2>			
				</div>
			</div>
		</div>
        </div>
    );
  }
}

export default Header_appli;