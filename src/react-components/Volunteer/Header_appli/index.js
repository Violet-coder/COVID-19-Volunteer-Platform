import React from "react";

// import "./styles.css";

/* The Header Component */
class Header_appli extends React.Component {
  render() {
	const { title, subtitle } = this.props;
	console.log(title)

    return (
        <div id="fh5co-started">
		<div className="container">
			<div className="row animate-box">
				<div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
					<span>{ subtitle }</span>
					<h2>{ title }</h2>			
				</div>
			</div>
		</div>
        </div>
    );
  }
}

export default Header_appli;