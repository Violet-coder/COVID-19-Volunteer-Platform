import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

/* The Header Component */
class HeaderwithSearchbar extends React.Component {
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

	validateForm= () => {
		if(! this.state.postname){
			console.error("invalid form")
			return false
		}
		else
			return true
		
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
						<span className="searchinput"><input id="postname"  required="required" onChange={this.handleInputChange} type="text" placeholder="Search"/></span>
						{console.log('valid',this.validateForm())}
						{(this.validateForm())?
						<span ><Link to={{pathname:`/searchresult`, state: this.state.postname,query: posts }}><button id="searchbutton" type="submit" className="btn-search btn-primary" >GO</button></Link></span> :
						<span ><button id="searchbutton" type="submit" className="btn-search btn-primary" >GO</button></span>

 						 }

					</form>
				</div>
			</div>
		</div>
        </div>
    );
  }
}

export default HeaderwithSearchbar;
