import React from "react";
import Header_appli from "../../../react-components/Volunteer/Header_appli";
import Navbar from "../../../react-components/Volunteer/Navbar";
import {searchByKeyword} from "../../../actions/searchByKeyword"
import All_ops from "../../../react-components/Volunteer/All_ops"

class SearchResultPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            isLoading: false
        }

    }
    componentDidMount() {
        const keyword = this.props.location.state
        searchByKeyword(keyword, this)
       }

    
    render(){     
        
      
        const queueComponent =  this.props.location.query.queueComponent
        const app = this.props.app
        let posts = []
        let filteredPosts=[]
        if (this.state.isLoading) {
            posts = this.state.posts
            filteredPosts = posts.filter(
            p => p.status === "Approved"
        )
        }


        
 
        return(
            <div id="page">
            <Navbar app={app}/>
            <Header_appli title="Search Result" subtitle="Good Luck" app ={app}/>
         
            { (this.state.isLoading && filteredPosts.length>0) ? <All_ops queueComponent={queueComponent} posts={filteredPosts}/> : <div id="fh5co-blog" className="fh5co-bg-section">
                <div className="container">
                    <div className="row animate-box row-pb-md" data-animate-effect="fadeInUp">
                        <div className="col-md-8 col-md-offset-2 text-left fh5co-heading">
                            <h2>No post found.</h2>
                            <p>Try another search!</p>
                        </div>
                </div> 	
                </div>
                </div>}
                      
            </div>  
        )
        
    }


}

export default SearchResultPage;
