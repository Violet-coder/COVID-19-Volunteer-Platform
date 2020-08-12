import React from "react";
import Navbar from "../../../react-components/Volunteer/Navbar";
import Header_appli from "../../../react-components/Volunteer/Header_appli";
import ApplicationList from "../../../react-components/Volunteer/ApplicationList"


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
            <div>
            { this.state.isLoading ?<ApplicationList applications={this.state.applications}/> : null}
            </div>




            </div>



        );
    }
}

export default My_application;

