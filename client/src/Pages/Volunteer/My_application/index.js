import React from "react";
import Navbar from "../../../react-components/Volunteer/Navbar";
import Header_appli from "../../../react-components/Volunteer/Header_appli";
import ApplicationList from "../../../react-components/Volunteer/ApplicationList"
import {BackButton} from "../../../react-components/Organization/Hook/backButton"


import "../../../css/animate.css";
import "../../../css/icomoon.css";
import "../../../css/bootstrap.css";
import "../../../css/magnific-popup.css";
import "../../../css/style.css";
import "./styles.css"






class My_application extends React.Component{
    constructor(props) {
        super(props);
        //this.props.history.push('/volunteer/myapplication')
        this.state = {
            applications: [],
            isLoading: false
        }
        
    }

    componentDidMount() {
        const id = this.props.app.state.currentUserId
        const url = `/volunteer/applicatoinlist/${id}`
        console.log("idyayayay", id)
        console.log("url", url)
        
        fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                alert("Could not get applications");
            }
        })
        .then(json => {
            this.setState({ applications: json, isLoading: true });
            // console.log("state this time", this.state)
        })
        .catch(error => {
            console.log(error);
        });
    }
    
    
    render() {
    //   const {applications} = this.props
      const app = this.props.app
      
        return(
            <div id="page">
            <Navbar user="Application" app={app}/>
            <Header_appli title="My Application" subtitle="Let's work together" app={app} />
            
            { this.state.isLoading ?<ApplicationList applications={this.state.applications}/> : <div id="fh5co-blog" className="fh5co-bg-section">
                <div className="container">
                    <div className="row animate-box row-pb-md" data-animate-effect="fadeInUp">
                        <div className="col-md-8 col-md-offset-2 text-left fh5co-heading">
                            <h2>No Application now.</h2>
                            
                        </div>
                </div> 	
                <span className='Applybutton'><BackButton/></span>
                </div>
                </div>}
            
            </div>




           



        );
    }
}

export default My_application;

