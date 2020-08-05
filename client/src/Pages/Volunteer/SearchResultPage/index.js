import React from "react";
import Header_appli from "../../../react-components/Volunteer/Header_appli";
import Navbar from "../../../react-components/Volunteer/Navbar";
import {searchByKeyword} from "../../../actions/searchByKeyword"
import All_ops from "../../../react-components/Volunteer/All_ops"

class SearchResultPage extends React.Component {

    
    render(){     
        
         const keyword = this.props.location.state
         const posts = this.props.location.query.posts
         const queueComponent =  this.props.location.query.queueComponent
         const app = this.props.app
         
         console.log("queueComponent",queueComponent )
         console.log("posts", posts)
         


        //  if (keyword.length|posts.length === 0)

        const result = searchByKeyword(keyword, posts)

        {console.log(result)}

        if (result.length>0){
    
        return(
            <div id="page">
            <Navbar/>
            <Header_appli title="Search Result" subtitle="Good Luck"/>
         
            <All_ops queueComponent={queueComponent} posts={result}/>
                      
            </div>  
        )} else{
            return(
            <div id="page">
            <Navbar/>
            <Header_appli title="Search Result" subtitle="Good Luck" app ={app} />
                <div id="fh5co-blog" className="fh5co-bg-section">
                <div className="container">
                    <div className="row animate-box row-pb-md" data-animate-effect="fadeInUp">
                        <div className="col-md-8 col-md-offset-2 text-left fh5co-heading">
                            <h2>No post found.</h2>
                            <p>Try another search!</p>
                        </div>
                </div> 	
                </div>
                </div>
            </div>
            
            )
        }
        
    }


}

export default SearchResultPage;
