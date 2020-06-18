import React from "react";
import { uid } from "react-uid";

class Recommended_ops extends React.Component{
    render(){
       const {ops} = this.props

       return(
        <div id="fh5co-blog" class="fh5co-bg-section">
		<div class="container">
			<div class="row animate-box row-pb-md" data-animate-effect="fadeInUp">
				<div class="col-md-8 col-md-offset-2 text-left fh5co-heading">
					<h2>Recommended Opportunities</h2>
					<p>See what we selected for you</p>
				</div>
			</div> 
        <div class="row">
            {ops.map(op => (
            <div class="col-md-4 col-sm-4 animate-box" data-animate-effect="fadeInUp">
            <div class="fh5co-post">
                <span class="fh5co-date">{ op.date }</span>
                <h3><a href="#">{ op.title }</a></h3>
                <p>{ op.content }</p>
            <p class="author"><cite>{ op.organization }</cite></p>
            </div>
        </div>  
          ))}
          <div class="center">
					<p><span><button type="submit" class="btn btn-primary">See All</button></span></p>
				</div>
			</div>		
		</div>
        </div>
       )
    }
}

export default Recommended_ops;