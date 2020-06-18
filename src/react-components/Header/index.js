import React from "react";

// import "./styles.css";

/* The Header Component */
class Header extends React.Component {
  render() {
    const { title, subtitle } = this.props;

    return (
        <div id="fh5co-started">
		<div class="container">
			<div class="row animate-box">
				<div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
					<span>{ subtitle }</span>
					<h2>{ title }</h2>			
				</div>
			</div>
			<div id="opportunity-search-box">
				<div class="searchbar">
					<form>
						<span ><input type="text" placeholder="Search"/></span>
						<span ><button type="submit" class="btn btn-primary">GO</button></span>
					</form>
				</div>
			</div>
		</div>
        </div>
    );
  }
}

export default Header;