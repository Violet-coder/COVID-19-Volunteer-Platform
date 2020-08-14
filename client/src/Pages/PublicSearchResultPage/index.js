import React from "react";
import Header_appli from "../../react-components/Volunteer/Header_appli";
import HomeNav from '../../react-components/HomeNav';
import {searchByKeyword} from "../../actions/searchByKeyword"
import Posts from "../../react-components/Posts"
// import {BackButton} from '../../react-components/Organization/Hook/backButton';



class PublicSearchResultPage extends React.Component {
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
            <HomeNav/>
            <Header_appli title="Search Result" subtitle="Good Luck"/>
            { (this.state.isLoading && filteredPosts.length>0) ? <Posts posts={filteredPosts}/> : <div id="fh5co-blog" className="fh5co-bg-section">
                <div className="container">
                    <div className="row animate-box row-pb-md" data-animate-effect="fadeInUp">
                        <div className="col-md-8 col-md-offset-2 text-left fh5co-heading">
                            <h2>No post found.</h2>
                            <p>Try another search!</p>
                        </div>
                </div> 	
                </div>
                </div>}

                {/* <span className='Applybutton'><BackButton/></span> */}
            
                    
            </div>  
        )
       
        
    }


}

export default PublicSearchResultPage;