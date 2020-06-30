import React from "react";
import Header_appli from "../../react-components/Volunteer/Header_appli";
import HomeNav from '../../react-components/HomeNav';
import {searchByKeyword} from "../../actions/searchByKeyword"
import Posts from "../../react-components/Posts"

class PublicSearchResultPage extends React.Component {

    
    render(){     
        console.log("posts")
        
         const keyword = this.props.location.state
         const posts = this.props.location.query
         console.log("posts",posts )
         /* const filteredPosts = posts.filter(
            p => p.status === 'Approved'
        )
        const filteredRecommendedPosts = recommended_posts.filter(
            p => p.status === 'Approved'
        ) */

        //  if (keyword.length|posts.length === 0)

        const result = searchByKeyword(keyword, posts)

        {console.log(result)}

        if (result.length>0){
    
        return(
            <div id="page">
            <HomeNav/>
            <Header_appli title="Search Result" subtitle="Good Luck"/>
            
            <Posts posts={result}/>           
            </div>  
        )} else{
            return(
            <div id="page">
            <HomeNav/>
            <Header_appli title="Search Result" subtitle="Good Luck"/>
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
        return(
            <div id="page">
            <HomeNav/>
            <Header_appli title="Search Result" subtitle="Good Luck"/>
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

export default PublicSearchResultPage;