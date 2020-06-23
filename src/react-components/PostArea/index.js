import React from 'react';
import { uid } from 'react-uid';

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
                        {ops.map( op => (
                            <div key= {uid(op)}  className="col-md-4 col-sm-4 animate-box" data-animate-effect="fadeInUp">
                            <div className="fh5co-post">
                                <span className="fh5co-date">{op.date}</span>
                                <h3><a href="#">{op.title}</a></h3>
                                <p>{op.content}</p>
                                <p className="author"><cite> {op.organization}</cite></p>
                                
                                
                            </div>
                            </div>))}
                            <div className="center">
                                <p><span><button type="submit" className="btn btn-primary">See All</button></span></p>
                            </div>
                        
                    </div>	

                    	
            </div>
            </div>

        )
    }
}

export default PostArea;