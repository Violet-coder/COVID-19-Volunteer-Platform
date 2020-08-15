import React from 'react';
import { uid } from 'react-uid';
import { Link} from 'react-router-dom';
import './styles.css'

class PostArea extends React.Component {
    
    render(){
        const {desc, title, subtitle, ops} = this.props;

        return(
            <div id="fh5co-blog" className="fh5co-bg-section">
                <div className="container">
                    <div className="row animate-box row-pb-md" data-animate-effect="fadeInUp">
                        <div className="col-md-8 col-md-offset-2 text-left fh5co-heading">
                            <span>{desc}</span>
                            <h2>{title}</h2>
                            <p>{subtitle}</p>
                        </div>
                    </div>
                    <div className="row">
                        {ops.slice(0,4).map( op => (<Link to={{pathname:`/publicpost/${op._id}`}} >
                            <div key= {uid(op)}  className="col-md-4 col-sm-4 animate-box" data-animate-effect="fadeInUp">
                            
                            <div className="fh5co-post">
                                <span className="fh5co-date">{new Date(op.date).toDateString()}</span>
                                <h3>{op.name}</h3>
                                <p id='post-para'>{op.description}</p>
                                <p className="author"><cite> {op.organization}</cite></p>
                               
                            </div>
                            </div></Link>))}
                            <div className="center">
                                <p><span><Link to="/publicposts" ><button type="submit" className="btn btn-primary">See All</button></Link></span></p>
                            </div>
                        
                    </div>	

                    	
            </div>
            </div>

        )
    }
}

export default PostArea;