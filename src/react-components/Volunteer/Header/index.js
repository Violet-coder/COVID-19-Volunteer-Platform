import React from "react";
import "./styles.css";
import {searchByKeyword} from "../../../actions/searchByKeyword"
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

/* The Header Component */
class Header extends React.Component {
	state= {
		postname:""
	}

	handleInputChange = (event) => {
        // console.log("input change")
        const target = event.target;
        const value = target.value;
        const id = target.id;

        this.setState({
            [id]:value
        });
    }
  render() {
	const { title, subtitle, posts } = this.props;

    return (
        <div id="fh5co-started">
		<div className="container">
			<div className="row animate-box">
				<div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
					<span>{ subtitle }</span>
					<h2>{ title }</h2>			
				</div>
			</div>
			<div id="opportunity-search-box">
				<div className="searchbar">
					<form>
						<span className="searchinput"><input id="postname" onChange={this.handleInputChange} type="text" placeholder="Search"/></span>
						<span ><Link to={{pathname:`/volunteer/searchresult`, state: this.state.postname,query: posts }}><button id="searchbutton" type="submit" className="btn-search btn-primary" >GO</button></Link></span>
	
						{/* <Link to={{pathname:'/volunteer/searchresult', query: result}}><Button className="searchbutton" variant="contained" color="secondary"  onClick={(function(){ const result = searchByKeyword.bind(this, this.state.postname, posts)})()}>Go</Button></Link> */}
						
					</form>
				</div>
			</div>
		</div>
        </div>
    );
  }
}

export default Header;
{/*  */}